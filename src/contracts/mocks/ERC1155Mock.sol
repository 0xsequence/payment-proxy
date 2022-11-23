pragma solidity 0.7.4;
pragma experimental ABIEncoderV2;


import "@0xsequence/erc-1155/contracts/mocks/ERC1155MintBurnMockOwned.sol";

contract ERC1155Mock is ERC1155MintBurnMockOwned {
  constructor() ERC1155MintBurnMockOwned('ERC1155MockOwned', "") {}
}