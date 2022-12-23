/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { utils, Contract, ContractFactory } from "ethers";
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "_approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_operator",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "_amounts",
                type: "uint256[]",
            },
        ],
        name: "TransferBatch",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_operator",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "TransferSingle",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "_uri",
                type: "string",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
        ],
        name: "URI",
        type: "event",
    },
    {
        stateMutability: "nonpayable",
        type: "fallback",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_owners",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]",
            },
        ],
        name: "balanceOfBatch",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "baseURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "_values",
                type: "uint256[]",
            },
        ],
        name: "batchBurn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "_values",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "batchMint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "_operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "isOperator",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "_amounts",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "safeBatchTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "_approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_interfaceID",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
        ],
        name: "uri",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b50604080518082018252601081526f115490cc4c4d4d535bd8dad3dddb995960821b602080830191909152825190810183526000808252600280546001600160a01b031916331790819055935192939192849284926001600160a01b0391909116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a38151620000ad906004906020850190620000ce565b508051620000c3906003906020840190620000ce565b50505050506200017a565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928262000106576000855562000151565b82601f106200012157805160ff191683800117855562000151565b8280016001018555821562000151579182015b828111156200015157825182559160200191906001019062000134565b506200015f92915062000163565b5090565b5b808211156200015f576000815560010162000164565b61275a806200018a6000396000f3fe608060405234801561001057600080fd5b50600436106100ff5760003560e01c8063731133e911610097578063b48ab8b611610066578063b48ab8b614610249578063e985e9c51461025c578063f242432a1461026f578063f2fde38b14610282576100ff565b8063731133e9146101fb5780638da5cb5b1461020e578063a22cb46514610223578063b390c0ab14610236576100ff565b806320ec271b116100d357806320ec271b146101ab5780632eb2c2d6146101c05780634e1273f4146101d35780636c0360eb146101f3576100ff565b8062fdd58e1461013a57806301ffc9a71461016357806306fdde03146101835780630e89341c14610198575b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101319061243e565b60405180910390fd5b61014d61014836600461215d565b610295565b60405161015a919061249b565b60405180910390f35b6101766101713660046122e4565b6102c8565b60405161015a91906123c2565b61018b6102db565b60405161015a91906123cd565b61018b6101a6366004612324565b610387565b6101be6101b936600461229a565b6104da565b005b6101be6101ce366004611f85565b6104e9565b6101e66101e13660046121d9565b6105f4565b60405161015a919061237e565b61018b610740565b6101be610209366004612186565b6107b9565b61021661083b565b60405161015a919061235d565b6101be610231366004612123565b610857565b6101be61024436600461233c565b6108f0565b6101be61025736600461208e565b6108fb565b61017661026a366004611f53565b610977565b6101be61027d36600461202b565b6109b2565b6101be610290366004611f39565b610ab6565b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260208181526040808320938352929052205490565b60006102d382610c20565b90505b919050565b6004805460408051602060026001851615610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190941693909304601f8101849004840282018401909252818152929183018282801561037f5780601f106103545761010080835404028352916020019161037f565b820191906000526020600020905b81548152906001019060200180831161036257829003601f168201915b505050505081565b6060600361039483610c7d565b60405160200180838054600181600116156101000203166002900480156103f25780601f106103d05761010080835404028352918201916103f2565b820191906000526020600020905b8154815290600101906020018083116103de575b5050825160208401908083835b6020831061043c57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016103ff565b5181516020939093036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01801990911692169190911790527f2e6a736f6e000000000000000000000000000000000000000000000000000000920191825250604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe50181526005909201905295945050505050565b6104e5338383610da9565b5050565b3373ffffffffffffffffffffffffffffffffffffffff8616148061051257506105128533610977565b610567576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612627602f913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166105d3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603081526020018061259b6030913960400191505060405180910390fd5b6105df8585858561100e565b6105ed858585855a8661133d565b5050505050565b60608151835114610650576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806125fb602c913960400191505060405180910390fd5b6060835167ffffffffffffffff8111801561066a57600080fd5b50604051908082528060200260200182016040528015610694578160200160208202803683370190505b50905060005b8451811015610738576000808683815181106106b257fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600085838151811061070257fe5b602002602001015181526020019081526020016000205482828151811061072557fe5b602090810291909101015260010161069a565b509392505050565b6003805460408051602060026001851615610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190941693909304601f8101849004840282018401909252818152929183018282801561037f5780601f106103545761010080835404028352916020019161037f565b60025473ffffffffffffffffffffffffffffffffffffffff163314610829576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806126ff6026913960400191505060405180910390fd5b610835848484846115b4565b50505050565b60025473ffffffffffffffffffffffffffffffffffffffff1690565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6104e5338383611669565b60025473ffffffffffffffffffffffffffffffffffffffff16331461096b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806126ff6026913960400191505060405180910390fd5b61083584848484611714565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205460ff1690565b3373ffffffffffffffffffffffffffffffffffffffff861614806109db57506109db8533610977565b610a30576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612512602a913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416610a9c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806124e7602b913960400191505060405180910390fd5b610aa88585858561195e565b6105ed858585855a86611a61565b60025473ffffffffffffffffffffffffffffffffffffffff163314610b26576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806126ff6026913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610b92576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612571602a913960400191505060405180910390fd5b60025460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f0e89341c000000000000000000000000000000000000000000000000000000001415610c74575060016102d6565b6102d382611c52565b606081610cbe575060408051808201909152600181527f300000000000000000000000000000000000000000000000000000000000000060208201526102d6565b818060005b8215610cd757600101600a83049250610cc3565b60608167ffffffffffffffff81118015610cf057600080fd5b506040519080825280601f01601f191660200182016040528015610d1b576020820181803683370190505b5090507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82015b8315610d9f57600a840660300160f81b82828060019003935081518110610d6557fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a84049350610d42565b5095945050505050565b815181518114610e04576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806125cb6030913960400191505060405180910390fd5b60005b81811015610f0657610e97838281518110610e1e57fe5b60200260200101516000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000878581518110610e7257fe5b6020026020010151815260200190815260200160002054611caf90919063ffffffff16565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868481518110610ee357fe5b602090810291909101810151825281019190915260400160002055600101610e07565b50600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610fb4578181015183820152602001610f9c565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610ff3578181015183820152602001610fdb565b5050505090500194505050505060405180910390a450505050565b8051825114611068576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603581526020018061253c6035913960400191505060405180910390fd5b815160005b81811015611235576110d883828151811061108457fe5b60200260200101516000808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000878581518110610e7257fe5b6000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600086848151811061112457fe5b60200260200101518152602001908152602001600020819055506111c683828151811061114d57fe5b60200260200101516000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008785815181106111a157fe5b6020026020010151815260200190815260200160002054611d2690919063ffffffff16565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600086848151811061121257fe5b60209081029190910181015182528101919091526040016000205560010161106d565b508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156112e25781810151838201526020016112ca565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015611321578181015183820152602001611309565b5050505090500194505050505060405180910390a45050505050565b61135c8573ffffffffffffffffffffffffffffffffffffffff16611da1565b156115ac5760008573ffffffffffffffffffffffffffffffffffffffff1663bc197c8184338a8989886040518763ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b838110156114145781810151838201526020016113fc565b50505050905001848103835286818151815260200191508051906020019060200280838360005b8381101561145357818101518382015260200161143b565b50505050905001848103825285818151815260200191508051906020019080838360005b8381101561148f578181015183820152602001611477565b50505050905090810190601f1680156114bc5780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600088803b1580156114e157600080fd5b5087f11580156114f5573d6000803e3d6000fd5b50505050506040513d602081101561150c57600080fd5b505190507fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c8100000000000000000000000000000000000000000000000000000000146115aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603f815260200180612686603f913960400191505060405180910390fd5b505b505050505050565b73ffffffffffffffffffffffffffffffffffffffff84166000908152602081815260408083208684529091529020546115ed9083611d26565b73ffffffffffffffffffffffffffffffffffffffff8516600081815260208181526040808320888452825280832094909455835187815290810186905283519293919233927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62928290030190a461083560008585855a86611a61565b73ffffffffffffffffffffffffffffffffffffffff83166000908152602081815260408083208584529091529020546116a29082611caf565b73ffffffffffffffffffffffffffffffffffffffff841660008181526020818152604080832087845282528083209490945583518681529081018590528351919333927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629281900390910190a4505050565b815183511461176e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806126566030913960400191505060405180910390fd5b825160005b8181101561184d576117de84828151811061178a57fe5b60200260200101516000808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008885815181106111a157fe5b6000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600087848151811061182a57fe5b602090810291909101810151825281019190915260400160002055600101611773565b508473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156118fb5781810151838201526020016118e3565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561193a578181015183820152602001611922565b5050505090500194505050505060405180910390a46105ed60008686865a8761133d565b73ffffffffffffffffffffffffffffffffffffffff84166000908152602081815260408083208584529091529020546119979082611caf565b73ffffffffffffffffffffffffffffffffffffffff808616600090815260208181526040808320878452825280832094909455918616815280825282812085825290915220546119e79082611d26565b73ffffffffffffffffffffffffffffffffffffffff808516600081815260208181526040808320888452825291829020949094558051868152938401859052805191939288169233927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62929181900390910190a450505050565b611a808573ffffffffffffffffffffffffffffffffffffffff16611da1565b156115ac5760008573ffffffffffffffffffffffffffffffffffffffff1663f23a6e6184338a8989886040518763ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611b39578181015183820152602001611b21565b50505050905090810190601f168015611b665780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600088803b158015611b8957600080fd5b5087f1158015611b9d573d6000803e3d6000fd5b50505050506040513d6020811015611bb457600080fd5b505190507fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e6100000000000000000000000000000000000000000000000000000000146115aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a8152602001806126c5603a913960400191505060405180910390fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a26000000000000000000000000000000000000000000000000000000001415611ca6575060016102d6565b6102d382611dd8565b600082821115611d2057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f536166654d617468237375623a20554e444552464c4f57000000000000000000604482015290519081900360640190fd5b50900390565b600082820183811015611d9a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f536166654d617468236164643a204f564552464c4f5700000000000000000000604482015290519081900360640190fd5b9392505050565b6000813f8015801590611d9a57507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470141592915050565b7fffffffff0000000000000000000000000000000000000000000000000000000081167f01ffc9a70000000000000000000000000000000000000000000000000000000014919050565b803573ffffffffffffffffffffffffffffffffffffffff811681146102d657600080fd5b600082601f830112611e56578081fd5b8135611e69611e64826124c8565b6124a4565b818152915060208083019084810181840286018201871015611e8a57600080fd5b60005b84811015611ea957813584529282019290820190600101611e8d565b505050505092915050565b600082601f830112611ec4578081fd5b813567ffffffffffffffff811115611ed857fe5b611f0960207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016124a4565b9150808252836020828501011115611f2057600080fd5b8060208401602084013760009082016020015292915050565b600060208284031215611f4a578081fd5b611d9a82611e22565b60008060408385031215611f65578081fd5b611f6e83611e22565b9150611f7c60208401611e22565b90509250929050565b600080600080600060a08688031215611f9c578081fd5b611fa586611e22565b9450611fb360208701611e22565b9350604086013567ffffffffffffffff80821115611fcf578283fd5b611fdb89838a01611e46565b94506060880135915080821115611ff0578283fd5b611ffc89838a01611e46565b93506080880135915080821115612011578283fd5b5061201e88828901611eb4565b9150509295509295909350565b600080600080600060a08688031215612042578081fd5b61204b86611e22565b945061205960208701611e22565b93506040860135925060608601359150608086013567ffffffffffffffff811115612082578182fd5b61201e88828901611eb4565b600080600080608085870312156120a3578384fd5b6120ac85611e22565b9350602085013567ffffffffffffffff808211156120c8578485fd5b6120d488838901611e46565b945060408701359150808211156120e9578384fd5b6120f588838901611e46565b9350606087013591508082111561210a578283fd5b5061211787828801611eb4565b91505092959194509250565b60008060408385031215612135578182fd5b61213e83611e22565b915060208301358015158114612152578182fd5b809150509250929050565b6000806040838503121561216f578182fd5b61217883611e22565b946020939093013593505050565b6000806000806080858703121561219b578384fd5b6121a485611e22565b93506020850135925060408501359150606085013567ffffffffffffffff8111156121cd578182fd5b61211787828801611eb4565b600080604083850312156121eb578182fd5b823567ffffffffffffffff80821115612202578384fd5b818501915085601f830112612215578384fd5b8135612223611e64826124c8565b80828252602080830192508086018a828387028901011115612243578889fd5b8896505b8487101561226c5761225881611e22565b845260019690960195928101928101612247565b509096508701359350505080821115612283578283fd5b5061229085828601611e46565b9150509250929050565b600080604083850312156122ac578182fd5b823567ffffffffffffffff808211156122c3578384fd5b6122cf86838701611e46565b93506020850135915080821115612283578283fd5b6000602082840312156122f5578081fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114611d9a578182fd5b600060208284031215612335578081fd5b5035919050565b6000806040838503121561234e578182fd5b50508035926020909101359150565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b6020808252825182820181905260009190848201906040850190845b818110156123b65783518352928401929184019160010161239a565b50909695505050505050565b901515815260200190565b6000602080835283518082850152825b818110156123f9578581018301518582016040015282016123dd565b8181111561240a5783604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60208082526028908201527f455243313135354d696e744275726e4d6f636b4f776e65643a20494e56414c4960408201527f445f4d4554484f44000000000000000000000000000000000000000000000000606082015260800190565b90815260200190565b60405181810167ffffffffffffffff811182821017156124c057fe5b604052919050565b600067ffffffffffffffff8211156124dc57fe5b506020908102019056fe4552433131353523736166655472616e7366657246726f6d3a20494e56414c49445f524543495049454e544552433131353523736166655472616e7366657246726f6d3a20494e56414c49445f4f50455241544f5245524331313535235f7361666542617463685472616e7366657246726f6d3a20494e56414c49445f4152524159535f4c454e4754484f776e61626c65237472616e736665724f776e6572736869703a20494e56414c49445f4144445245535345524331313535237361666542617463685472616e7366657246726f6d3a20494e56414c49445f524543495049454e54455243313135354d696e744275726e2362617463684275726e3a20494e56414c49445f4152524159535f4c454e475448455243313135352362616c616e63654f6642617463683a20494e56414c49445f41525241595f4c454e47544845524331313535237361666542617463685472616e7366657246726f6d3a20494e56414c49445f4f50455241544f52455243313135354d696e744275726e2362617463684d696e743a20494e56414c49445f4152524159535f4c454e47544845524331313535235f63616c6c6f6e45524331313535426174636852656365697665643a20494e56414c49445f4f4e5f524543454956455f4d45535341474545524331313535235f63616c6c6f6e4552433131353552656365697665643a20494e56414c49445f4f4e5f524543454956455f4d4553534147454f776e61626c65236f6e6c794f776e65723a2053454e4445525f49535f4e4f545f4f574e4552a2646970667358221220d33952e2aef224983069d0a5901421395dc9f9e805903f8778cf67bd3f46263364736f6c63430007040033";
const isSuperArgs = (xs) => xs.length > 1;
export class ERC1155Mock__factory extends ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
ERC1155Mock__factory.bytecode = _bytecode;
ERC1155Mock__factory.abi = _abi;