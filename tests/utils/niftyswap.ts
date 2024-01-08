// See // See https://github.com/0xsequence/niftyswap/blob/master/tests/utils/helpers.ts

import { ethers, BigNumber } from 'ethers'

import { BuyTokensObj, AddLiquidityObj } from '@0xsequence/niftyswap/typings/tx-types'

import NiftyswapFactory20Artifact from '@0xsequence/niftyswap/artifacts/contracts/exchange/NiftyswapFactory20.sol/NiftyswapFactory20.json'
import { AbstractContract } from './contract'

// Deploy using the bytecode from the package to ensure correctness
export const deployNiftyswapFactory20 = async (wallet: ethers.Wallet, owner: string): Promise<ethers.Contract> => {
  const abstract = await AbstractContract.fromArtifactName('NiftyswapFactory20Mock')
  const factory = new ethers.ContractFactory(abstract.abi, NiftyswapFactory20Artifact.bytecode, wallet)
  return factory.deploy(owner)
}

enum MethodSignature20 {
  BUYTOKENS = '0xb2d81047',
  ADDLIQUIDITY = '0x82da2b73'
}

const BuyTokensType = `tuple(
  address recipient,
  uint256[] tokensBoughtIDs,
  uint256[] tokensBoughtAmounts,
  uint256 deadline
)`

const AddLiquidityType = `tuple(
  uint256[] maxCurrency,
  uint256 deadline
)`

export const getBuyTokenData = (
  recipient: string,
  types: number[] | BigNumber[],
  tokensAmountsToBuy: BigNumber[],
  deadline: number
) => {
  const buyTokenObj = {
    recipient: recipient,
    tokensBoughtIDs: types,
    tokensBoughtAmounts: tokensAmountsToBuy,
    deadline: deadline
  } as BuyTokensObj

  return ethers.utils.defaultAbiCoder.encode(['bytes4', BuyTokensType], [MethodSignature20.BUYTOKENS, buyTokenObj])
}

export const getAddLiquidityData = (maxCurrency: BigNumber[], deadline: number) => {
  const addLiquidityObj = { maxCurrency, deadline } as AddLiquidityObj

  return ethers.utils.defaultAbiCoder.encode(['bytes4', AddLiquidityType], [MethodSignature20.ADDLIQUIDITY, addLiquidityObj])
}
