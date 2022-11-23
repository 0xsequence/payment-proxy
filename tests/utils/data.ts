import * as ethers from 'ethers'
import { BigNumber } from 'ethers'

export type BurnOrderRequest = {
  itemRecipient: string
  nonce: number | string | BigNumber
  itemIDsPurchased: number[] | string[] | BigNumber[]
}

export const BurnOrderRequestType = `tuple(
  address itemRecipient,
  uint32 nonce,
  uint256[] itemIDsPurchased
)`

export const getBurnOrderRequestData = (
  itemRecipient: string,
  nonce: number | BigNumber,
  itemIDsPurchased: number[] | BigNumber[]
) => {
  const request: BurnOrderRequest = { itemRecipient, nonce, itemIDsPurchased }
  return ethers.utils.defaultAbiCoder.encode([BurnOrderRequestType], [request])
}