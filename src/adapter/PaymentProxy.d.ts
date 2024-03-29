import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface PaymentProxyInterface extends utils.Interface {
    functions: {
        "buyAndBurn(address,uint256[],uint256[],address,uint256,uint32,uint256[],address)": FunctionFragment;
        "getOwner()": FunctionFragment;
        "name()": FunctionFragment;
        "nonces(address)": FunctionFragment;
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "purchaseItems(address,uint256,uint32,uint256[],address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "withdrawERC20(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "buyAndBurn" | "getOwner" | "name" | "nonces" | "onERC1155BatchReceived" | "onERC1155Received" | "purchaseItems" | "supportsInterface" | "transferOwnership" | "withdrawERC20"): FunctionFragment;
    encodeFunctionData(functionFragment: "buyAndBurn", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonces", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "purchaseItems", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdrawERC20", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "buyAndBurn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "purchaseItems", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawERC20", data: BytesLike): Result;
    events: {
        "ItemBurn(address,address,uint256,uint256[])": EventFragment;
        "ItemPurchase(address,address,uint256,uint256[])": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ItemBurn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ItemPurchase"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface ItemBurnEventObject {
    spender: string;
    itemRecipient: string;
    nonce: BigNumber;
    itemIDsPurchased: BigNumber[];
}
export declare type ItemBurnEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber[]
], ItemBurnEventObject>;
export declare type ItemBurnEventFilter = TypedEventFilter<ItemBurnEvent>;
export interface ItemPurchaseEventObject {
    spender: string;
    itemRecipient: string;
    nonce: BigNumber;
    itemIDsPurchased: BigNumber[];
}
export declare type ItemPurchaseEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber[]
], ItemPurchaseEventObject>;
export declare type ItemPurchaseEventFilter = TypedEventFilter<ItemPurchaseEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PaymentProxy extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PaymentProxyInterface;
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
        buyAndBurn(_niftyswapAddress: PromiseOrValue<string>, _swapTokenIds: PromiseOrValue<BigNumberish>[], _swapAmounts: PromiseOrValue<BigNumberish>[], _currencyToken: PromiseOrValue<string>, _currencyAmount: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _itemIDsPurchased: PromiseOrValue<BigNumberish>[], _itemRecipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getOwner(overrides?: CallOverrides): Promise<[string]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, _from: PromiseOrValue<string>, _ids: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        onERC1155Received(_operator: PromiseOrValue<string>, _from: PromiseOrValue<string>, _id: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        purchaseItems(_currencyToken: PromiseOrValue<string>, _currencyAmount: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _itemIDsPurchased: PromiseOrValue<BigNumberish>[], _itemRecipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawERC20(_recipient: PromiseOrValue<string>, _erc20: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    buyAndBurn(_niftyswapAddress: PromiseOrValue<string>, _swapTokenIds: PromiseOrValue<BigNumberish>[], _swapAmounts: PromiseOrValue<BigNumberish>[], _currencyToken: PromiseOrValue<string>, _currencyAmount: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _itemIDsPurchased: PromiseOrValue<BigNumberish>[], _itemRecipient: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getOwner(overrides?: CallOverrides): Promise<string>;
    name(overrides?: CallOverrides): Promise<string>;
    nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    onERC1155BatchReceived(arg0: PromiseOrValue<string>, _from: PromiseOrValue<string>, _ids: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    onERC1155Received(_operator: PromiseOrValue<string>, _from: PromiseOrValue<string>, _id: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    purchaseItems(_currencyToken: PromiseOrValue<string>, _currencyAmount: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _itemIDsPurchased: PromiseOrValue<BigNumberish>[], _itemRecipient: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawERC20(_recipient: PromiseOrValue<string>, _erc20: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        buyAndBurn(_niftyswapAddress: PromiseOrValue<string>, _swapTokenIds: PromiseOrValue<BigNumberish>[], _swapAmounts: PromiseOrValue<BigNumberish>[], _currencyToken: PromiseOrValue<string>, _currencyAmount: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _itemIDsPurchased: PromiseOrValue<BigNumberish>[], _itemRecipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        getOwner(overrides?: CallOverrides): Promise<string>;
        name(overrides?: CallOverrides): Promise<string>;
        nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, _from: PromiseOrValue<string>, _ids: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(_operator: PromiseOrValue<string>, _from: PromiseOrValue<string>, _id: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        purchaseItems(_currencyToken: PromiseOrValue<string>, _currencyAmount: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _itemIDsPurchased: PromiseOrValue<BigNumberish>[], _itemRecipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        withdrawERC20(_recipient: PromiseOrValue<string>, _erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ItemBurn(address,address,uint256,uint256[])"(spender?: PromiseOrValue<string> | null, itemRecipient?: PromiseOrValue<string> | null, nonce?: PromiseOrValue<BigNumberish> | null, itemIDsPurchased?: null): ItemBurnEventFilter;
        ItemBurn(spender?: PromiseOrValue<string> | null, itemRecipient?: PromiseOrValue<string> | null, nonce?: PromiseOrValue<BigNumberish> | null, itemIDsPurchased?: null): ItemBurnEventFilter;
        "ItemPurchase(address,address,uint256,uint256[])"(spender?: PromiseOrValue<string> | null, itemRecipient?: PromiseOrValue<string> | null, nonce?: PromiseOrValue<BigNumberish> | null, itemIDsPurchased?: null): ItemPurchaseEventFilter;
        ItemPurchase(spender?: PromiseOrValue<string> | null, itemRecipient?: PromiseOrValue<string> | null, nonce?: PromiseOrValue<BigNumberish> | null, itemIDsPurchased?: null): ItemPurchaseEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        buyAndBurn(_niftyswapAddress: PromiseOrValue<string>, _swapTokenIds: PromiseOrValue<BigNumberish>[], _swapAmounts: PromiseOrValue<BigNumberish>[], _currencyToken: PromiseOrValue<string>, _currencyAmount: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _itemIDsPurchased: PromiseOrValue<BigNumberish>[], _itemRecipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getOwner(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, _from: PromiseOrValue<string>, _ids: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        onERC1155Received(_operator: PromiseOrValue<string>, _from: PromiseOrValue<string>, _id: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        purchaseItems(_currencyToken: PromiseOrValue<string>, _currencyAmount: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _itemIDsPurchased: PromiseOrValue<BigNumberish>[], _itemRecipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawERC20(_recipient: PromiseOrValue<string>, _erc20: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        buyAndBurn(_niftyswapAddress: PromiseOrValue<string>, _swapTokenIds: PromiseOrValue<BigNumberish>[], _swapAmounts: PromiseOrValue<BigNumberish>[], _currencyToken: PromiseOrValue<string>, _currencyAmount: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _itemIDsPurchased: PromiseOrValue<BigNumberish>[], _itemRecipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, _from: PromiseOrValue<string>, _ids: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155Received(_operator: PromiseOrValue<string>, _from: PromiseOrValue<string>, _id: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        purchaseItems(_currencyToken: PromiseOrValue<string>, _currencyAmount: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _itemIDsPurchased: PromiseOrValue<BigNumberish>[], _itemRecipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawERC20(_recipient: PromiseOrValue<string>, _erc20: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
