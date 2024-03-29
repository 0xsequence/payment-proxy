import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface NiftyswapFactory20MockInterface extends utils.Interface {
    functions: {
        "createExchange(address,address,uint256,uint256)": FunctionFragment;
        "getOwner()": FunctionFragment;
        "getPairExchanges(address,address)": FunctionFragment;
        "metadataProvider()": FunctionFragment;
        "setMetadataContract(address)": FunctionFragment;
        "tokensToExchange(address,address,uint256,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createExchange" | "getOwner" | "getPairExchanges" | "metadataProvider" | "setMetadataContract" | "tokensToExchange" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "createExchange", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPairExchanges", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "metadataProvider", values?: undefined): string;
    encodeFunctionData(functionFragment: "setMetadataContract", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "tokensToExchange", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "createExchange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPairExchanges", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "metadataProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMetadataContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokensToExchange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "MetadataContractChanged(address)": EventFragment;
        "NewExchange(address,address,uint256,uint256,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MetadataContractChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewExchange"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface MetadataContractChangedEventObject {
    metadataContract: string;
}
export declare type MetadataContractChangedEvent = TypedEvent<[
    string
], MetadataContractChangedEventObject>;
export declare type MetadataContractChangedEventFilter = TypedEventFilter<MetadataContractChangedEvent>;
export interface NewExchangeEventObject {
    token: string;
    currency: string;
    salt: BigNumber;
    lpFee: BigNumber;
    exchange: string;
}
export declare type NewExchangeEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    string
], NewExchangeEventObject>;
export declare type NewExchangeEventFilter = TypedEventFilter<NewExchangeEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface NiftyswapFactory20Mock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NiftyswapFactory20MockInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        createExchange(_token: PromiseOrValue<string>, _currency: PromiseOrValue<string>, _lpFee: PromiseOrValue<BigNumberish>, _instance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getOwner(overrides?: CallOverrides): Promise<[string]>;
        getPairExchanges(_token: PromiseOrValue<string>, _currency: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]]>;
        metadataProvider(overrides?: CallOverrides): Promise<[string]>;
        setMetadataContract(_contract: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tokensToExchange(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    createExchange(_token: PromiseOrValue<string>, _currency: PromiseOrValue<string>, _lpFee: PromiseOrValue<BigNumberish>, _instance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getOwner(overrides?: CallOverrides): Promise<string>;
    getPairExchanges(_token: PromiseOrValue<string>, _currency: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
    metadataProvider(overrides?: CallOverrides): Promise<string>;
    setMetadataContract(_contract: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tokensToExchange(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        createExchange(_token: PromiseOrValue<string>, _currency: PromiseOrValue<string>, _lpFee: PromiseOrValue<BigNumberish>, _instance: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getOwner(overrides?: CallOverrides): Promise<string>;
        getPairExchanges(_token: PromiseOrValue<string>, _currency: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        metadataProvider(overrides?: CallOverrides): Promise<string>;
        setMetadataContract(_contract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        tokensToExchange(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "MetadataContractChanged(address)"(metadataContract?: PromiseOrValue<string> | null): MetadataContractChangedEventFilter;
        MetadataContractChanged(metadataContract?: PromiseOrValue<string> | null): MetadataContractChangedEventFilter;
        "NewExchange(address,address,uint256,uint256,address)"(token?: PromiseOrValue<string> | null, currency?: PromiseOrValue<string> | null, salt?: PromiseOrValue<BigNumberish> | null, lpFee?: null, exchange?: null): NewExchangeEventFilter;
        NewExchange(token?: PromiseOrValue<string> | null, currency?: PromiseOrValue<string> | null, salt?: PromiseOrValue<BigNumberish> | null, lpFee?: null, exchange?: null): NewExchangeEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        createExchange(_token: PromiseOrValue<string>, _currency: PromiseOrValue<string>, _lpFee: PromiseOrValue<BigNumberish>, _instance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getOwner(overrides?: CallOverrides): Promise<BigNumber>;
        getPairExchanges(_token: PromiseOrValue<string>, _currency: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        metadataProvider(overrides?: CallOverrides): Promise<BigNumber>;
        setMetadataContract(_contract: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tokensToExchange(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        createExchange(_token: PromiseOrValue<string>, _currency: PromiseOrValue<string>, _lpFee: PromiseOrValue<BigNumberish>, _instance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPairExchanges(_token: PromiseOrValue<string>, _currency: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        metadataProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setMetadataContract(_contract: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tokensToExchange(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
