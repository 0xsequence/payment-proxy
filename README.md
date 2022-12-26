proxy-payment
=======================
Allows users to make on-chain payments for off-chain services. 

## How does it work?

Off-chain services can listen to events emitted by an instance of this contract to validate user payments. Services can analyse the payments that were done via ERC20 or ERC-1155 Transfer events and handle the business logic associated with these payments. 

THis can for isntance be used to purchase off-chain, in-game items while the payment is executed on-chain. Game creator can deploy an instance of this proxy contract, have users make on-chain via a proxy payment instance and listen to these events before crediting users with the respective off-chain items users purchased.

## How to use

1. Install via `pnpm install`
2. Write contracts in `src/contracts/`
3. Write tests in `tests/`
4. Build with `pnpm build`


## LICENSE

Copyright (c) 2017-present [Horizon Blockchain Games Inc](https://horizon.io).

Licensed under [Apache-2.0](./LICENSE)
