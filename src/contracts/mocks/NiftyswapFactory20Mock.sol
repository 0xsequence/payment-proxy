// SPDX-License-Identifier: Apache-2.0
pragma solidity 0.7.4;

import {NiftyswapFactory20} from "@0xsequence/niftyswap/contracts/exchange/NiftyswapFactory20.sol";

contract NiftyswapFactory20Mock is NiftyswapFactory20 {
    constructor(address _admin)
        NiftyswapFactory20(_admin)
    {} // solhint-disable-line no-empty-blocks
}
