import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Ownable, OwnableInterface } from "../../utils/Ownable";
declare type OwnableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Ownable__factory extends ContractFactory {
    constructor(...args: OwnableConstructorParams);
    deploy(_firstOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Ownable>;
    getDeployTransaction(_firstOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Ownable;
    connect(signer: Signer): Ownable__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516103aa3803806103aa83398101604081905261002f9161007d565b600080546001600160a01b0319166001600160a01b03831690811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506100ab565b60006020828403121561008e578081fd5b81516001600160a01b03811681146100a4578182fd5b9392505050565b6102f0806100ba6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063893d20e81461003b578063f2fde38b14610059575b600080fd5b61004361006e565b60405161005091906101df565b60405180910390f35b61006c6100673660046101a4565b61008a565b005b60005473ffffffffffffffffffffffffffffffffffffffff1690565b60005473ffffffffffffffffffffffffffffffffffffffff1633146100e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100db9061025d565b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610131576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100db90610200565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691821780845560405192939116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a350565b6000602082840312156101b5578081fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146101d8578182fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b6020808252602a908201527f4f776e61626c65237472616e736665724f776e6572736869703a20494e56414c60408201527f49445f4144445245535300000000000000000000000000000000000000000000606082015260800190565b60208082526026908201527f4f776e61626c65236f6e6c794f776e65723a2053454e4445525f49535f4e4f5460408201527f5f4f574e4552000000000000000000000000000000000000000000000000000060608201526080019056fea2646970667358221220e1c3e90ba4def964bdd5a5f68641505256a47ba25c987f3175d37cd593197a4764736f6c63430007040033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): OwnableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Ownable;
}
export {};
