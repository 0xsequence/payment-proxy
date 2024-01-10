// SPDX-License-Identifier: Apache-2.0
pragma solidity 0.7.4;

import {NiftyswapExchange20} from "@0xsequence/niftyswap/contracts/exchange/NiftyswapExchange20.sol";

contract NiftyswapExchange20Mock is NiftyswapExchange20 {
    constructor(address _tokenAddr, address _currencyAddr, uint256 _lpFee)
        NiftyswapExchange20(_tokenAddr, _currencyAddr, _lpFee)
    {} // solhint-disable-line no-empty-blocks
}
