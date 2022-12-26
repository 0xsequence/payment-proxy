import * as ethers from 'ethers'

import { 
  AbstractContract, 
  expect,
  RevertError,
  createTestWallet,
  getBurnOrderRequestData,
  ZERO_ADDRESS
} from './utils'

import {
  ERC1155Mock,
  ERC20MintMock,
  PaymentProxy
} from 'src/cache/typechain'

import { BigNumber, constants } from 'ethers'

import { web3 } from 'hardhat'

// init test wallets from package.json mnemonic

const {
  wallet: ownerWallet,
  provider: ownerProvider,
  signer: ownerSigner
} = createTestWallet(web3, 1)


const {
  wallet: userWallet,
  provider: userProvider,
  signer: userSigner
} = createTestWallet(web3, 2)

const {
  wallet: recipientWallet,
  provider: recipientProvider,
  signer: recipientSigner
} = createTestWallet(web3, 4)

const getBig = (id: number) => BigNumber.from(id);

describe('PaymentProxy', () => {
  let ownerAddress: string
  let userAddress: string
  let recipientAddress: string
  let erc20Abstract: AbstractContract
  let paymentAbstract: AbstractContract
  let erc1155Abstract: AbstractContract

  // ERC-20 currency contract
  let erc20Contract: ERC20MintMock
  let userErc20Contract: ERC20MintMock

  // ERC-1155 currency contract
  let erc1155Contract: ERC1155Mock
  let userErc1155Contract: ERC1155Mock
  

  // Skyweaver Assets
  let paymentContract: PaymentProxy

  // Factory manager
  let userPaymentContract: PaymentProxy

  // Pass gas since ganache can't figure it out
  let TX_PARAM = {gasLimit: 2000000}

  // ERC-1155 Token Param
  const nTokenTypes    = BigNumber.from(30).add(1) 
  const nTokensPerType = BigNumber.from(100).mul(100)

  // erc20 Param, 6 decimals
  const baseTokenAmount = BigNumber.from(10000000).mul(BigNumber.from(10).pow(6))

  // Item ID to purchase
  const purchasedItemID = 999;
  const proxyName = "TEST PAYMENT"

  // Arrays for ERC-1155
  const ids = new Array(nTokenTypes.toNumber()).fill('').map((a, i) => getBig(i+1))
  const amounts = new Array(nTokenTypes.toNumber()).fill('').map((a, i) => nTokensPerType)

  // Init addresses
  let proxy;
  let currency;

  // load contract abi and deploy to test server
  before(async () => {
    ownerAddress = await ownerWallet.getAddress()
    userAddress = await userWallet.getAddress()
    recipientAddress = await recipientWallet.getAddress()
    erc20Abstract = await AbstractContract.fromArtifactName('ERC20MintMock')
    erc1155Abstract = await AbstractContract.fromArtifactName('ERC1155Mock')
    paymentAbstract = await AbstractContract.fromArtifactName('PaymentProxy')
  })

  // deploy before each test, to reset state of contract
  beforeEach(async () => {
    // Deploy ERC20 contract
    erc20Contract = await erc20Abstract.deploy(ownerWallet) as ERC20MintMock
    userErc20Contract = await erc20Contract.connect(userSigner) as ERC20MintMock

    // Deploy ERC-1155 Contract
    erc1155Contract = await erc1155Abstract.deploy(ownerWallet) as ERC1155Mock
    userErc1155Contract = await erc1155Contract.connect(userSigner)

    // Deploy factory
    paymentContract = await paymentAbstract.deploy(ownerWallet, [ownerAddress, proxyName]) as PaymentProxy
    userPaymentContract = await paymentContract.connect(userSigner) as PaymentProxy

    // Assing vars
    proxy = paymentContract.address
    currency = erc20Contract.address

    // Mint tokens to user
    await erc20Contract.mockMint(userAddress, baseTokenAmount)
    await erc1155Contract.batchMint(userAddress, ids, amounts , [])
  })

  describe('Getter functions', () => {
    describe('name()', () => {
      it('should return correct name', async () => {
        const name = await paymentContract.name()
        expect(name).to.be.eql(proxyName)
      })
    })
    describe('supportsInterface()', () => {
      it('should return true for 0x01ffc9a7 (ERC165)', async () => {
        const support = await paymentContract.supportsInterface('0x01ffc9a7')
        expect(support).to.be.eql(true)
      })

      it('should return true for 0x4e2312e0 (ERC1155Receiver)', async () => {
        const support = await paymentContract.supportsInterface('0x4e2312e0')
        expect(support).to.be.eql(true)
      })
    })
  })

  describe('purchaseItems()', () => {
    const nonce = 0;

    beforeEach(async () => {
      await userErc20Contract.approve(proxy, baseTokenAmount)
    })

    it('should PASS if caller sends erc-20', async () => {
      const tx = userPaymentContract.purchaseItems(currency, baseTokenAmount, nonce, [purchasedItemID], recipientAddress, TX_PARAM)
      await expect(tx).to.be.fulfilled
    })

    it('should PASS if recipient is 0x0', async () => {
      const tx = userPaymentContract.purchaseItems(currency, baseTokenAmount, nonce, [purchasedItemID], ethers.constants.AddressZero, TX_PARAM)
      await expect(tx).to.be.fulfilled

      // Check event
      let filterFromOperatorContract: ethers.ethers.EventFilter

      // Get event filter to get internal tx event
      filterFromOperatorContract = paymentContract.filters.ItemPurchase(null, null, null);

      // Get logs from internal transaction event
      // @ts-ignore (https://github.com/ethers-io/ethers.js/issues/204#issuecomment-427059031)
      filterFromOperatorContract.fromBlock = 0;
      const logs = await ownerProvider.getLogs(filterFromOperatorContract);
      let args = paymentContract.interface.decodeEventLog(paymentContract.interface.events["ItemPurchase(address,address,uint256,uint256[])"],logs[0].data, logs[0].topics)

      expect(args.itemRecipient).to.be.eql(userAddress)
    })

    it('should REVERT if nonce is incorrect', async () => {
      const badNonce = nonce + 1
      const tx = userPaymentContract.purchaseItems(currency, baseTokenAmount, badNonce, [purchasedItemID], recipientAddress, TX_PARAM)
      await expect(tx).to.be.rejectedWith(RevertError("PaymentProxy#purchaseItems: INVALID_NONCE"))

      const badNonce2 = BigNumber.from(2).pow(32).sub(1)
      const tx2 = userPaymentContract.purchaseItems(currency, baseTokenAmount, badNonce2, [purchasedItemID], recipientAddress, TX_PARAM)
      await expect(tx2).to.be.rejectedWith(RevertError("PaymentProxy#purchaseItems: INVALID_NONCE"))
    })

    it('should REVERT if amount is 0', async () => {
      const tx = userPaymentContract.purchaseItems(currency, 0, nonce, [purchasedItemID], recipientAddress, TX_PARAM)
      await expect(tx).to.be.rejectedWith(RevertError("PaymentProxy#purchaseItems: INVALID_PAYMENT_TOKEN_OR_AMOUNT"))
    })

    it('should REVERT if erc-20 is 0x0', async () => {
      const tx = userPaymentContract.purchaseItems(ethers.constants.AddressZero, baseTokenAmount, nonce, [purchasedItemID], recipientAddress, TX_PARAM)
      await expect(tx).to.be.rejectedWith(RevertError("PaymentProxy#purchaseItems: INVALID_PAYMENT_TOKEN_OR_AMOUNT"))
    })

    context('When assets were sent to proxy', () => {
      beforeEach(async () => {
        await userPaymentContract.purchaseItems(currency, baseTokenAmount, nonce, [purchasedItemID], recipientAddress, TX_PARAM)
      })

      it('should update user payment nonce', async () => {
        const nonce = await paymentContract.nonces(userAddress)
        expect(nonce).to.be.eql(BigNumber.from(1))
      })
      
      it('should increase proxy ERC-20 balance to amount received', async () => {
        const balance = await erc20Contract.balanceOf(proxy)
        expect(balance).to.be.eql(baseTokenAmount)
      })

      it('should update users ERC-20 balance', async () => {
        const balance = await erc20Contract.balanceOf(userAddress)
        expect(balance).to.be.eql(BigNumber.from(0))
      })

      it('should emit ItemPurchase event', async () => {
        let filterFromOperatorContract: ethers.ethers.EventFilter

        // Get event filter to get internal tx event
        filterFromOperatorContract = paymentContract.filters.ItemPurchase(null, null, null);

        // Get logs from internal transaction event
        // @ts-ignore (https://github.com/ethers-io/ethers.js/issues/204#issuecomment-427059031)
        filterFromOperatorContract.fromBlock = 0;
        let logs = await ownerProvider.getLogs(filterFromOperatorContract);
        expect(logs[0].topics[0]).to.be.eql(paymentContract.interface.getEventTopic(paymentContract.interface.events["ItemPurchase(address,address,uint256,uint256[])"]))
      })
      
      describe('ItemPurchase Event', () => {
        let args;
        beforeEach(async () => {
          let filterFromOperatorContract: ethers.ethers.EventFilter

          // Get event filter to get internal tx event
          filterFromOperatorContract = paymentContract.filters.ItemPurchase(null, null, null);
  
          // Get logs from internal transaction event
          // @ts-ignore (https://github.com/ethers-io/ethers.js/issues/204#issuecomment-427059031)
          filterFromOperatorContract.fromBlock = 0;
          let logs = await ownerProvider.getLogs(filterFromOperatorContract);
          args = paymentContract.interface.decodeEventLog(paymentContract.interface.events["ItemPurchase(address,address,uint256,uint256[])"],logs[0].data, logs[0].topics)
        })

        it('should have spender as right address as `spender` field', async () => {  
          expect(args.spender).to.be.eql(userAddress)
        })

        it('should have recipient as right address as `itemRecipient` field', async () => {  
          expect(args.itemRecipient).to.be.eql(recipientAddress)
        })

        it('should have correct nonce as `nonce` field', async () => {  
          expect(args.nonce).to.be.eql(BigNumber.from(0))
        })

        it('should have correct item purchased as `itemIDsPurchased` field', async () => {  
          expect(args.itemIDsPurchased[0]).to.be.eql(BigNumber.from(purchasedItemID))
        })

      })
    })
  })

  describe('ERC-1155 Burn', () => {
    let data

    before(async () => {
     data = getBurnOrderRequestData(recipientAddress, 0, [purchasedItemID])
    })

    it('should PASS if caller sends items', async () => {
      const tx = userErc1155Contract.safeBatchTransferFrom(userAddress, proxy, ids, amounts, data, TX_PARAM)
      await expect(tx).to.be.fulfilled
    })

    it('should PASS if recipient is 0x0', async () => {
      const data2 = getBurnOrderRequestData(ethers.constants.AddressZero, 0, [purchasedItemID])
      const tx = userErc1155Contract.safeBatchTransferFrom(userAddress, proxy, ids, amounts, data2, TX_PARAM)
      await expect(tx).to.be.fulfilled

      // Check event
      let filterFromOperatorContract: ethers.ethers.EventFilter

      // Get event filter to get internal tx event
      filterFromOperatorContract = paymentContract.filters.ItemBurn(null, null, null);

      // Get logs from internal transaction event
      // @ts-ignore (https://github.com/ethers-io/ethers.js/issues/204#issuecomment-427059031)
      filterFromOperatorContract.fromBlock = 0;
      const logs = await ownerProvider.getLogs(filterFromOperatorContract);

      let args = paymentContract.interface.decodeEventLog(paymentContract.interface.events["ItemBurn(address,address,uint256,uint256[])"],logs[0].data, logs[0].topics)
      expect(args.itemRecipient).to.be.eql(userAddress)
    })

    it('should REVERT if nonce is incorrect', async () => {
      const badData = getBurnOrderRequestData(userAddress, 1, [purchasedItemID])
      const tx = userErc1155Contract.safeBatchTransferFrom(userAddress, proxy, ids, amounts, badData, TX_PARAM)
      await expect(tx).to.be.rejectedWith(RevertError("PaymentProxy#onERC1155BatchReceived: INVALID_NONCE"))

      const badData2 = getBurnOrderRequestData(userAddress, BigNumber.from(2).pow(32).sub(1), [purchasedItemID])
      const tx2 = userErc1155Contract.safeBatchTransferFrom(userAddress, proxy, ids, amounts, badData2, TX_PARAM)
      await expect(tx2).to.be.rejectedWith(RevertError("PaymentProxy#onERC1155BatchReceived: INVALID_NONCE"))
    })

    context('When assets were sent to proxy', () => {      
      beforeEach(async () => {
        await userErc1155Contract.safeBatchTransferFrom(userAddress, proxy, ids, amounts, data, TX_PARAM)
      })

      it('should update user payment nonce', async () => {
        const nonce = await paymentContract.nonces(userAddress)
        expect(nonce).to.be.eql(BigNumber.from(1))
      })
      
      it('should leave proxy ERC-1155 balance of 0', async () => {
        let proxy_addresses = new Array(nTokenTypes.toNumber()).fill('').map((a, i) => proxy)
        let proxy_balances = await userErc1155Contract.balanceOfBatch(proxy_addresses, ids)
        for (let i = 0; i < ids.length; i++) {
          expect(proxy_balances[i]).to.be.eql(constants.Zero)
        }
      })

      it('should update users ERC-1155 balance', async () => {
        let user_addresses = new Array(nTokenTypes.toNumber()).fill('').map((a, i) => userAddress)
        let userBalances = await userErc1155Contract.balanceOfBatch(user_addresses, ids)
        for (let i = 0; i < ids.length; i++) {
          expect(userBalances[i]).to.be.eql(constants.Zero)
        }
      })

      it('should emit ItemBurn event', async () => {
        let filterFromOperatorContract: ethers.ethers.EventFilter

        // Get event filter to get internal tx event
        filterFromOperatorContract = paymentContract.filters.ItemBurn(null, null, null);

        // Get logs from internal transaction event
        // @ts-ignore (https://github.com/ethers-io/ethers.js/issues/204#issuecomment-427059031)
        filterFromOperatorContract.fromBlock = 0;
        let logs = await ownerProvider.getLogs(filterFromOperatorContract);
        expect(logs[0].topics[0]).to.be.eql(paymentContract.interface.getEventTopic(paymentContract.interface.events["ItemBurn(address,address,uint256,uint256[])"]))
      })
      
      describe('ItemBurn Event', () => {
        let args;
        beforeEach(async () => {
          let filterFromOperatorContract: ethers.ethers.EventFilter

          // Get event filter to get internal tx event
          filterFromOperatorContract = paymentContract.filters.ItemBurn(null, null, null);
  
          // Get logs from internal transaction event
          // @ts-ignore (https://github.com/ethers-io/ethers.js/issues/204#issuecomment-427059031)
          filterFromOperatorContract.fromBlock = 0;
          let logs = await ownerProvider.getLogs(filterFromOperatorContract);
          args = paymentContract.interface.decodeEventLog(paymentContract.interface.events["ItemBurn(address,address,uint256,uint256[])"],logs[0].data, logs[0].topics)
        })

        it('should have spender as right address as `spender` field', async () => {  
          expect(args.spender).to.be.eql(userAddress)
        })

        it('should have recipient as right address as `itemRecipient` field', async () => {  
          expect(args.itemRecipient).to.be.eql(recipientAddress)
        })

        it('should have correct nonce as `nonce` field', async () => {  
          expect(args.nonce).to.be.eql(BigNumber.from(0))
        })

        it('should have correct item purchased as `itemIDsPurchased` field', async () => {  
          expect(args.itemIDsPurchased[0]).to.be.eql(BigNumber.from(purchasedItemID))
        })

      })
    })
    
    describe('withdrawERC20() function', () => {
      const nonce = 0
      let recipient

      beforeEach(async () => {
        recipient = ownerAddress
        await userErc20Contract.approve(proxy, baseTokenAmount)
        await userPaymentContract.purchaseItems(currency, baseTokenAmount, nonce, [purchasedItemID], recipientAddress, TX_PARAM)
      })

      it('should PASS if caller is owner', async () => {
        const tx = paymentContract.withdrawERC20(recipient, erc20Contract.address, TX_PARAM)
        await expect(tx).to.be.fulfilled
      })
  
      it('should REVERT if caller is not owner', async () => {
        const tx = userPaymentContract.withdrawERC20(recipient, erc20Contract.address, TX_PARAM)
        await expect(tx).to.be.rejectedWith(RevertError("Ownable#onlyOwner: SENDER_IS_NOT_OWNER"))
      })
  
      it('should REVERT if recipient is 0x0', async () => {
        const tx = paymentContract.withdrawERC20(ZERO_ADDRESS, erc20Contract.address, TX_PARAM)
        await expect(tx).to.be.rejectedWith(RevertError("PaymentProxy#withdrawERC20: INVALID_RECIPIENT"))
      })

      context('When ERC-20 token is withdrawn', () => {
        beforeEach(async () => {
          await paymentContract.withdrawERC20(recipient, erc20Contract.address)
        })

        it('should update proxy ERC-20 balance', async () => {
          let proxy_balance = await erc20Contract.balanceOf(proxy)
          expect(proxy_balance).to.be.eql(constants.Zero)
        })
  
        it('should update recipient ERC-20 balance', async () => {
          let recipient_balance = await erc20Contract.balanceOf(recipient)
          expect(recipient_balance).to.be.eql(baseTokenAmount)
        })
      })
    })
  })
})
