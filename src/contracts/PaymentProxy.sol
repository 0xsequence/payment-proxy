pragma solidity 0.7.4;
pragma experimental ABIEncoderV2;

import "./utils/Ownable.sol";
import "@uniswap/lib/contracts/libraries/TransferHelper.sol";
import "@0xsequence/erc-1155/contracts/utils/SafeMath.sol";
import "@0xsequence/erc-1155/contracts/interfaces/IERC165.sol";
import "@0xsequence/erc-1155/contracts/interfaces/IERC20.sol";
import "@0xsequence/erc-1155/contracts/interfaces/IERC1155MintBurn.sol";
import "@0xsequence/erc-1155/contracts/interfaces/IERC1155TokenReceiver.sol";
import "@0xsequence/niftyswap/contracts/interfaces/INiftyswapExchange20.sol";

/**
 * @notice Allows users to purchase off-chain assets with ERC-20s or by burning ERC-1155 tokens
 */
contract PaymentProxy is IERC1155TokenReceiver, Ownable {

  /***********************************|
  |             Variables             |
  |__________________________________*/

  // Track payment nonces to prevent accidental repeat orders
  mapping (address => uint256) public nonces;
  string public name; // Name of contract

  // Stored variable for buyAndBurn
  address private _caller;
  BurnOrder private _burnOrder;

  // Encoded data in ERC-1155 transfers, for log event
  struct BurnOrder {
    address itemRecipient;      // Who is supposed to receive the items
    uint256 nonce;              // Transaction nonce 
    uint256[] itemIDsPurchased; // Items that are supposed to be received
  }

  /***********************************|
  |               Events              |
  |__________________________________*/

  event ItemPurchase(address indexed spender, address indexed itemRecipient, uint256 indexed nonce, uint256[] itemIDsPurchased);
  event ItemBurn(address indexed spender, address indexed itemRecipient, uint256 indexed nonce, uint256[] itemIDsPurchased);

  /***********************************|
  |            Constructor            |
  |__________________________________*/

  /**
   * @notice Create payment proxy and assign ownership
   * @param _firstOwner Address of the initial owner
   * @param _name       Name of PaymentProxy
   */
  constructor(address _firstOwner, string memory _name) Ownable(_firstOwner) { 
    name = _name;
  }


  /***********************************|
  |          Purchase Method          |
  |__________________________________*/

  /**
   * @notice User is sending ERC-20 tokens for payment
   * @param _currencyToken     Address of ERC-20 token used as currency by user
   * @param _currencyAmount    Amount ERC-20 token sent as currency by user
   * @param _nonce             Purchase nonce, to prevent repeats
   * @param _itemIDsPurchased  Items that are supposed to be received
   * @param _itemRecipient     Who is supposed to receive the items
   */
  function purchaseItems(address _currencyToken, uint256 _currencyAmount, uint32 _nonce, uint256[] calldata _itemIDsPurchased, address _itemRecipient) external {
    // Validate currency address and amount
    require(
      _currencyToken != address(0x0) && _currencyAmount > 0,
      "PaymentProxy#purchaseItems: INVALID_PAYMENT_TOKEN_OR_AMOUNT"
    );

    // Check if nonce is OK, then increment
    uint256 currentNonce = nonces[msg.sender];
    require(currentNonce == _nonce, "PaymentProxy#purchaseItems: INVALID_NONCE");
    nonces[msg.sender] = currentNonce + 1;

    // If an address is specified use it as receiver, otherwise use msg.sender address
    address itemRecipient = _itemRecipient != address(0x0) ? _itemRecipient : msg.sender;

    // Transfer currency tokens here
    TransferHelper.safeTransferFrom(_currencyToken, msg.sender, address(this), _currencyAmount);
    emit ItemPurchase(msg.sender, itemRecipient, _nonce, _itemIDsPurchased);
  }

  /**
   * @notice User is purchasing items by purchasing ERC-1155 tokens with ERC-20 tokens, then burning them
   * @param _niftyswapAddress Address of Niftyswap exchange contract
   * @param _swapTokenIds     Array of token IDs to purchase
   * @param _swapAmounts      Array of amounts of each token ID to purchase
   * @param _currencyToken    Address of ERC-20 token used as currency by user
   * @param _currencyAmount   Amount ERC-20 token sent as currency by user
   * @param _nonce            Purchase nonce, to prevent repeats
   * @param _itemIDsPurchased Items that are supposed to be received
   * @param _itemRecipient    Who is supposed to receive the items
   * @notice Overpayment is allowed, extra currency tokens will be retained by this contract
   */
  function buyAndBurn(
      address _niftyswapAddress,
      uint256[] calldata _swapTokenIds,
      uint256[] calldata _swapAmounts,
      address _currencyToken,
      uint256 _currencyAmount,
      uint32 _nonce,
      uint256[] calldata _itemIDsPurchased,
      address _itemRecipient
  ) external {
    // Validate inputs
    require(
      _niftyswapAddress != address(0x0) && _swapTokenIds.length > 0 && _swapAmounts.length > 0 && _swapTokenIds.length == _swapAmounts.length && _currencyToken != address(0x0) && _currencyAmount > 0,
      "PaymentProxy#purchaseItems: INVALID_PAYMENT_TOKEN_OR_AMOUNT"
    );

    // Prepare ERC-20
    TransferHelper.safeTransferFrom(_currencyToken, msg.sender, address(this), _currencyAmount);
    TransferHelper.safeApprove(_currencyToken, _niftyswapAddress, _currencyAmount);

    // If an address is specified use it as receiver, otherwise use msg.sender address
    address itemRecipient = _itemRecipient != address(0x0) ? _itemRecipient : msg.sender;

    // We store here as Niftyswap does not support passing data in onERC1155Received callbacks
    _burnOrder = BurnOrder(itemRecipient, _nonce, _itemIDsPurchased);
    _caller = msg.sender;

    // Purchase tokens from Niftyswap
    INiftyswapExchange20(_niftyswapAddress).buyTokens(
      _swapTokenIds,
      _swapAmounts,
      _currencyAmount,
      block.timestamp, // solhint-disable-line not-rely-on-time
      address(this),
      new address[](0),
      new uint256[](0)
    );

    // Reclaim memory
    delete _burnOrder;
    delete _caller;
  }

  /***********************************|
  |      Receiver Method Handler      |
  |__________________________________*/

  /**
   * @notice Prevents receiving Ether or calls to unsuported methods
   */
  fallback () external {
    revert("PaymentProxy#_: UNSUPPORTED_METHOD");
  }

  /**
   * @notice ItemBurn is being called
   * @dev Payload is passed to and verified by onERC1155BatchReceived()
   */
  function onERC1155Received(
    address _operator,
    address _from,
    uint256 _id, 
    uint256 _amount, 
    bytes calldata _data
  )
    external override returns(bytes4)
  {
    // Convert payload to arrays to pass to onERC1155BatchReceived()
    uint256[] memory ids = new uint256[](1);
    uint256[] memory amounts = new uint256[](1);
    ids[0] = _id;
    amounts[0] = _amount;

    // Will revert call if doesn't pass
    onERC1155BatchReceived(_operator, _from, ids, amounts, _data);
    
    // Return success
    return IERC1155TokenReceiver.onERC1155Received.selector;
  }

  /**
   * @notice ItemBurn is being called
   * @param _from    Address who sent the token
   * @param _ids     An array containing ids of each Token being transferred
   * @param _amounts An array containing amounts of each Token being transferred
   * @param _data    Encoded BurnOrder struct with order information
   * @dev `_data` is empty when called from Niftyswap via buyAndBurn(). Use stored burn order instead.
   */
  function onERC1155BatchReceived(
    address, // _operator
    address _from,
    uint256[] memory _ids,
    uint256[] memory _amounts,
    bytes memory _data
  )
    public override returns(bytes4)
  { 
    BurnOrder memory burnOrder;
    if (_data.length == 0) {
      // Use stored burn order from buyAndBurn()
      burnOrder = _burnOrder;
      // When using buyAndBurn() the _from address is the original caller
      _from = _caller;
    } else {
      // Decode struct to retrieve the burn token order information
      burnOrder = abi.decode(_data, (BurnOrder));
    }

    // Validate burn order
    require(burnOrder.itemIDsPurchased.length > 0, "PaymentProxy#onERC1155BatchReceived: INVALID_ITEMS_PURCHASED");

    // If an address is specified, use it as receiver, otherwise use _from address
    address itemRecipient = burnOrder.itemRecipient != address(0x0) ? burnOrder.itemRecipient : _from;

    // Check if nonce is OK, then increment
    uint256 currentNonce = nonces[_from];
    require(currentNonce == burnOrder.nonce, "PaymentProxy#onERC1155BatchReceived: INVALID_NONCE");
    nonces[_from] = currentNonce + 1;

    // Burn items received & emit event. msg.sender is the token contract
    IERC1155MintBurn(msg.sender).batchBurn(_ids, _amounts);
    emit ItemBurn(_from, itemRecipient, burnOrder.nonce, burnOrder.itemIDsPurchased);

    // Return success
    return IERC1155TokenReceiver.onERC1155BatchReceived.selector;
  }

  /**
   * @notice Send ERC-20 balance to recipient
   * @param _recipient Address where the currency will be sent to
   * @param _erc20     Address of ERC-20 token to transfer out
   */
  function withdrawERC20(address _recipient, address _erc20) external onlyOwner() {
    require(_recipient != address(0x0), "PaymentProxy#withdrawERC20: INVALID_RECIPIENT");
    uint256 this_balance = IERC20(_erc20).balanceOf(address(this));
    IERC20(_erc20).transfer(_recipient, this_balance);
  }


  /***********************************|
  |         Utility Functions         |
  |__________________________________*/

  /**
   * @notice Indicates whether a contract implements a given interface.
   * @param interfaceID The ERC-165 interface ID that is queried for support.
   * @return True if contract interface is supported.
   */
  function supportsInterface(bytes4 interfaceID) external pure returns (bool) {
    return  interfaceID == type(IERC165).interfaceId || 
      interfaceID == type(IERC1155TokenReceiver).interfaceId;
  }
}
