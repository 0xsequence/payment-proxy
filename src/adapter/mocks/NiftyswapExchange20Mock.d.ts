import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace INiftyswapExchange20 {
    type LiquidityRemovedEventObjStruct = {
        currencyAmount: PromiseOrValue<BigNumberish>;
        soldTokenNumerator: PromiseOrValue<BigNumberish>;
        boughtCurrencyNumerator: PromiseOrValue<BigNumberish>;
        totalSupply: PromiseOrValue<BigNumberish>;
    };
    type LiquidityRemovedEventObjStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        currencyAmount: BigNumber;
        soldTokenNumerator: BigNumber;
        boughtCurrencyNumerator: BigNumber;
        totalSupply: BigNumber;
    };
}
export interface NiftyswapExchange20MockInterface extends utils.Interface {
    functions: {
        "balanceOf(address,uint256)": FunctionFragment;
        "balanceOfBatch(address[],uint256[])": FunctionFragment;
        "buyTokens(uint256[],uint256[],uint256,uint256,address,address[],uint256[])": FunctionFragment;
        "changeOwnableParent(address)": FunctionFragment;
        "getBuyPrice(uint256,uint256,uint256)": FunctionFragment;
        "getBuyPriceWithRoyalty(uint256,uint256,uint256,uint256)": FunctionFragment;
        "getCurrencyInfo()": FunctionFragment;
        "getCurrencyReserves(uint256[])": FunctionFragment;
        "getFactoryAddress()": FunctionFragment;
        "getGlobalRoyaltyFee()": FunctionFragment;
        "getGlobalRoyaltyRecipient()": FunctionFragment;
        "getLPFee()": FunctionFragment;
        "getOwner()": FunctionFragment;
        "getPrice_currencyToToken(uint256[],uint256[])": FunctionFragment;
        "getPrice_tokenToCurrency(uint256[],uint256[])": FunctionFragment;
        "getRoyalties(address)": FunctionFragment;
        "getRoyaltiesNumerator(address)": FunctionFragment;
        "getRoyaltyInfo(uint256,uint256)": FunctionFragment;
        "getSellPrice(uint256,uint256,uint256)": FunctionFragment;
        "getSellPriceWithRoyalty(uint256,uint256,uint256,uint256)": FunctionFragment;
        "getTokenAddress()": FunctionFragment;
        "getTotalSupply(uint256[])": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
        "sendRoyalties(address)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setRoyaltyInfo(uint256,address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "uri(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "balanceOf" | "balanceOfBatch" | "buyTokens" | "changeOwnableParent" | "getBuyPrice" | "getBuyPriceWithRoyalty" | "getCurrencyInfo" | "getCurrencyReserves" | "getFactoryAddress" | "getGlobalRoyaltyFee" | "getGlobalRoyaltyRecipient" | "getLPFee" | "getOwner" | "getPrice_currencyToToken" | "getPrice_tokenToCurrency" | "getRoyalties" | "getRoyaltiesNumerator" | "getRoyaltyInfo" | "getSellPrice" | "getSellPriceWithRoyalty" | "getTokenAddress" | "getTotalSupply" | "isApprovedForAll" | "onERC1155BatchReceived" | "onERC1155Received" | "safeBatchTransferFrom" | "safeTransferFrom" | "sendRoyalties" | "setApprovalForAll" | "setRoyaltyInfo" | "supportsInterface" | "uri"): FunctionFragment;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOfBatch", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "buyTokens", values: [
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "changeOwnableParent", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getBuyPrice", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getBuyPriceWithRoyalty", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getCurrencyInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrencyReserves", values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "getFactoryAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGlobalRoyaltyFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGlobalRoyaltyRecipient", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLPFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPrice_currencyToToken", values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "getPrice_tokenToCurrency", values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "getRoyalties", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getRoyaltiesNumerator", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getRoyaltyInfo", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getSellPrice", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getSellPriceWithRoyalty", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTokenAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalSupply", values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
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
    encodeFunctionData(functionFragment: "safeBatchTransferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "sendRoyalties", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setRoyaltyInfo", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "uri", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buyTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeOwnableParent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBuyPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBuyPriceWithRoyalty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrencyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrencyReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFactoryAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGlobalRoyaltyFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGlobalRoyaltyRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLPFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPrice_currencyToToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPrice_tokenToCurrency", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoyalties", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoyaltiesNumerator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoyaltyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSellPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSellPriceWithRoyalty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeBatchTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendRoyalties", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRoyaltyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
    events: {
        "ApprovalForAll(address,address,bool)": EventFragment;
        "CurrencyPurchase(address,address,uint256[],uint256[],uint256[],address[],uint256[])": EventFragment;
        "LiquidityAdded(address,uint256[],uint256[],uint256[])": EventFragment;
        "LiquidityRemoved(address,uint256[],uint256[],tuple[])": EventFragment;
        "ParentOwnerChanged(address,address)": EventFragment;
        "RoyaltyChanged(address,uint256)": EventFragment;
        "TokensPurchase(address,address,uint256[],uint256[],uint256[],address[],uint256[])": EventFragment;
        "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
        "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CurrencyPurchase"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidityAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidityRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ParentOwnerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoyaltyChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensPurchase"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
}
export interface ApprovalForAllEventObject {
    _owner: string;
    _operator: string;
    _approved: boolean;
}
export declare type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject>;
export declare type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export interface CurrencyPurchaseEventObject {
    buyer: string;
    recipient: string;
    tokensSoldIds: BigNumber[];
    tokensSoldAmounts: BigNumber[];
    currencyBoughtAmounts: BigNumber[];
    extraFeeRecipients: string[];
    extraFeeAmounts: BigNumber[];
}
export declare type CurrencyPurchaseEvent = TypedEvent<[
    string,
    string,
    BigNumber[],
    BigNumber[],
    BigNumber[],
    string[],
    BigNumber[]
], CurrencyPurchaseEventObject>;
export declare type CurrencyPurchaseEventFilter = TypedEventFilter<CurrencyPurchaseEvent>;
export interface LiquidityAddedEventObject {
    provider: string;
    tokenIds: BigNumber[];
    tokenAmounts: BigNumber[];
    currencyAmounts: BigNumber[];
}
export declare type LiquidityAddedEvent = TypedEvent<[
    string,
    BigNumber[],
    BigNumber[],
    BigNumber[]
], LiquidityAddedEventObject>;
export declare type LiquidityAddedEventFilter = TypedEventFilter<LiquidityAddedEvent>;
export interface LiquidityRemovedEventObject {
    provider: string;
    tokenIds: BigNumber[];
    tokenAmounts: BigNumber[];
    details: INiftyswapExchange20.LiquidityRemovedEventObjStructOutput[];
}
export declare type LiquidityRemovedEvent = TypedEvent<[
    string,
    BigNumber[],
    BigNumber[],
    INiftyswapExchange20.LiquidityRemovedEventObjStructOutput[]
], LiquidityRemovedEventObject>;
export declare type LiquidityRemovedEventFilter = TypedEventFilter<LiquidityRemovedEvent>;
export interface ParentOwnerChangedEventObject {
    previousParent: string;
    newParent: string;
}
export declare type ParentOwnerChangedEvent = TypedEvent<[
    string,
    string
], ParentOwnerChangedEventObject>;
export declare type ParentOwnerChangedEventFilter = TypedEventFilter<ParentOwnerChangedEvent>;
export interface RoyaltyChangedEventObject {
    royaltyRecipient: string;
    royaltyFee: BigNumber;
}
export declare type RoyaltyChangedEvent = TypedEvent<[
    string,
    BigNumber
], RoyaltyChangedEventObject>;
export declare type RoyaltyChangedEventFilter = TypedEventFilter<RoyaltyChangedEvent>;
export interface TokensPurchaseEventObject {
    buyer: string;
    recipient: string;
    tokensBoughtIds: BigNumber[];
    tokensBoughtAmounts: BigNumber[];
    currencySoldAmounts: BigNumber[];
    extraFeeRecipients: string[];
    extraFeeAmounts: BigNumber[];
}
export declare type TokensPurchaseEvent = TypedEvent<[
    string,
    string,
    BigNumber[],
    BigNumber[],
    BigNumber[],
    string[],
    BigNumber[]
], TokensPurchaseEventObject>;
export declare type TokensPurchaseEventFilter = TypedEventFilter<TokensPurchaseEvent>;
export interface TransferBatchEventObject {
    _operator: string;
    _from: string;
    _to: string;
    _ids: BigNumber[];
    _amounts: BigNumber[];
}
export declare type TransferBatchEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber[],
    BigNumber[]
], TransferBatchEventObject>;
export declare type TransferBatchEventFilter = TypedEventFilter<TransferBatchEvent>;
export interface TransferSingleEventObject {
    _operator: string;
    _from: string;
    _to: string;
    _id: BigNumber;
    _amount: BigNumber;
}
export declare type TransferSingleEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], TransferSingleEventObject>;
export declare type TransferSingleEventFilter = TypedEventFilter<TransferSingleEvent>;
export interface NiftyswapExchange20Mock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NiftyswapExchange20MockInterface;
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
        balanceOf(_owner: PromiseOrValue<string>, _id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfBatch(_owners: PromiseOrValue<string>[], _ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        buyTokens(_tokenIds: PromiseOrValue<BigNumberish>[], _tokensBoughtAmounts: PromiseOrValue<BigNumberish>[], _maxCurrency: PromiseOrValue<BigNumberish>, _deadline: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, _extraFeeRecipients: PromiseOrValue<string>[], _extraFeeAmounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        changeOwnableParent(_newParent: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getBuyPrice(_assetBoughtAmount: PromiseOrValue<BigNumberish>, _assetSoldReserve: PromiseOrValue<BigNumberish>, _assetBoughtReserve: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            price: BigNumber;
        }>;
        getBuyPriceWithRoyalty(_tokenId: PromiseOrValue<BigNumberish>, _assetBoughtAmount: PromiseOrValue<BigNumberish>, _assetSoldReserve: PromiseOrValue<BigNumberish>, _assetBoughtReserve: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            price: BigNumber;
        }>;
        getCurrencyInfo(overrides?: CallOverrides): Promise<[string]>;
        getCurrencyReserves(_ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        getFactoryAddress(overrides?: CallOverrides): Promise<[string]>;
        getGlobalRoyaltyFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        getGlobalRoyaltyRecipient(overrides?: CallOverrides): Promise<[string]>;
        getLPFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        getOwner(overrides?: CallOverrides): Promise<[string]>;
        getPrice_currencyToToken(_ids: PromiseOrValue<BigNumberish>[], _tokensBought: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        getPrice_tokenToCurrency(_ids: PromiseOrValue<BigNumberish>[], _tokensSold: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        getRoyalties(_royaltyRecipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getRoyaltiesNumerator(_royaltyRecipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getRoyaltyInfo(_tokenId: PromiseOrValue<BigNumberish>, _cost: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber] & {
            recipient: string;
            royalty: BigNumber;
        }>;
        getSellPrice(_assetSoldAmount: PromiseOrValue<BigNumberish>, _assetSoldReserve: PromiseOrValue<BigNumberish>, _assetBoughtReserve: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            price: BigNumber;
        }>;
        getSellPriceWithRoyalty(_tokenId: PromiseOrValue<BigNumberish>, _assetSoldAmount: PromiseOrValue<BigNumberish>, _assetSoldReserve: PromiseOrValue<BigNumberish>, _assetBoughtReserve: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            price: BigNumber;
        }>;
        getTokenAddress(overrides?: CallOverrides): Promise<[string]>;
        getTotalSupply(_ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        isApprovedForAll(_owner: PromiseOrValue<string>, _operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean] & {
            isOperator: boolean;
        }>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, _from: PromiseOrValue<string>, _ids: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        onERC1155Received(_operator: PromiseOrValue<string>, _from: PromiseOrValue<string>, _id: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        safeBatchTransferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _ids: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        safeTransferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _id: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendRoyalties(_royaltyRecipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(_operator: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRoyaltyInfo(_fee: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        uri(_id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
    };
    balanceOf(_owner: PromiseOrValue<string>, _id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfBatch(_owners: PromiseOrValue<string>[], _ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
    buyTokens(_tokenIds: PromiseOrValue<BigNumberish>[], _tokensBoughtAmounts: PromiseOrValue<BigNumberish>[], _maxCurrency: PromiseOrValue<BigNumberish>, _deadline: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, _extraFeeRecipients: PromiseOrValue<string>[], _extraFeeAmounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    changeOwnableParent(_newParent: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getBuyPrice(_assetBoughtAmount: PromiseOrValue<BigNumberish>, _assetSoldReserve: PromiseOrValue<BigNumberish>, _assetBoughtReserve: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getBuyPriceWithRoyalty(_tokenId: PromiseOrValue<BigNumberish>, _assetBoughtAmount: PromiseOrValue<BigNumberish>, _assetSoldReserve: PromiseOrValue<BigNumberish>, _assetBoughtReserve: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getCurrencyInfo(overrides?: CallOverrides): Promise<string>;
    getCurrencyReserves(_ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
    getFactoryAddress(overrides?: CallOverrides): Promise<string>;
    getGlobalRoyaltyFee(overrides?: CallOverrides): Promise<BigNumber>;
    getGlobalRoyaltyRecipient(overrides?: CallOverrides): Promise<string>;
    getLPFee(overrides?: CallOverrides): Promise<BigNumber>;
    getOwner(overrides?: CallOverrides): Promise<string>;
    getPrice_currencyToToken(_ids: PromiseOrValue<BigNumberish>[], _tokensBought: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
    getPrice_tokenToCurrency(_ids: PromiseOrValue<BigNumberish>[], _tokensSold: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
    getRoyalties(_royaltyRecipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getRoyaltiesNumerator(_royaltyRecipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getRoyaltyInfo(_tokenId: PromiseOrValue<BigNumberish>, _cost: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber] & {
        recipient: string;
        royalty: BigNumber;
    }>;
    getSellPrice(_assetSoldAmount: PromiseOrValue<BigNumberish>, _assetSoldReserve: PromiseOrValue<BigNumberish>, _assetBoughtReserve: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getSellPriceWithRoyalty(_tokenId: PromiseOrValue<BigNumberish>, _assetSoldAmount: PromiseOrValue<BigNumberish>, _assetSoldReserve: PromiseOrValue<BigNumberish>, _assetBoughtReserve: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getTokenAddress(overrides?: CallOverrides): Promise<string>;
    getTotalSupply(_ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
    isApprovedForAll(_owner: PromiseOrValue<string>, _operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    onERC1155BatchReceived(arg0: PromiseOrValue<string>, _from: PromiseOrValue<string>, _ids: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    onERC1155Received(_operator: PromiseOrValue<string>, _from: PromiseOrValue<string>, _id: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    safeBatchTransferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _ids: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    safeTransferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _id: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendRoyalties(_royaltyRecipient: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(_operator: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRoyaltyInfo(_fee: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    uri(_id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        balanceOf(_owner: PromiseOrValue<string>, _id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfBatch(_owners: PromiseOrValue<string>[], _ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        buyTokens(_tokenIds: PromiseOrValue<BigNumberish>[], _tokensBoughtAmounts: PromiseOrValue<BigNumberish>[], _maxCurrency: PromiseOrValue<BigNumberish>, _deadline: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, _extraFeeRecipients: PromiseOrValue<string>[], _extraFeeAmounts: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        changeOwnableParent(_newParent: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        getBuyPrice(_assetBoughtAmount: PromiseOrValue<BigNumberish>, _assetSoldReserve: PromiseOrValue<BigNumberish>, _assetBoughtReserve: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getBuyPriceWithRoyalty(_tokenId: PromiseOrValue<BigNumberish>, _assetBoughtAmount: PromiseOrValue<BigNumberish>, _assetSoldReserve: PromiseOrValue<BigNumberish>, _assetBoughtReserve: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getCurrencyInfo(overrides?: CallOverrides): Promise<string>;
        getCurrencyReserves(_ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getFactoryAddress(overrides?: CallOverrides): Promise<string>;
        getGlobalRoyaltyFee(overrides?: CallOverrides): Promise<BigNumber>;
        getGlobalRoyaltyRecipient(overrides?: CallOverrides): Promise<string>;
        getLPFee(overrides?: CallOverrides): Promise<BigNumber>;
        getOwner(overrides?: CallOverrides): Promise<string>;
        getPrice_currencyToToken(_ids: PromiseOrValue<BigNumberish>[], _tokensBought: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getPrice_tokenToCurrency(_ids: PromiseOrValue<BigNumberish>[], _tokensSold: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getRoyalties(_royaltyRecipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoyaltiesNumerator(_royaltyRecipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoyaltyInfo(_tokenId: PromiseOrValue<BigNumberish>, _cost: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber] & {
            recipient: string;
            royalty: BigNumber;
        }>;
        getSellPrice(_assetSoldAmount: PromiseOrValue<BigNumberish>, _assetSoldReserve: PromiseOrValue<BigNumberish>, _assetBoughtReserve: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSellPriceWithRoyalty(_tokenId: PromiseOrValue<BigNumberish>, _assetSoldAmount: PromiseOrValue<BigNumberish>, _assetSoldReserve: PromiseOrValue<BigNumberish>, _assetBoughtReserve: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenAddress(overrides?: CallOverrides): Promise<string>;
        getTotalSupply(_ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        isApprovedForAll(_owner: PromiseOrValue<string>, _operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, _from: PromiseOrValue<string>, _ids: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(_operator: PromiseOrValue<string>, _from: PromiseOrValue<string>, _id: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        safeBatchTransferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _ids: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        safeTransferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _id: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        sendRoyalties(_royaltyRecipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(_operator: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setRoyaltyInfo(_fee: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        uri(_id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "ApprovalForAll(address,address,bool)"(_owner?: PromiseOrValue<string> | null, _operator?: PromiseOrValue<string> | null, _approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(_owner?: PromiseOrValue<string> | null, _operator?: PromiseOrValue<string> | null, _approved?: null): ApprovalForAllEventFilter;
        "CurrencyPurchase(address,address,uint256[],uint256[],uint256[],address[],uint256[])"(buyer?: PromiseOrValue<string> | null, recipient?: PromiseOrValue<string> | null, tokensSoldIds?: null, tokensSoldAmounts?: null, currencyBoughtAmounts?: null, extraFeeRecipients?: null, extraFeeAmounts?: null): CurrencyPurchaseEventFilter;
        CurrencyPurchase(buyer?: PromiseOrValue<string> | null, recipient?: PromiseOrValue<string> | null, tokensSoldIds?: null, tokensSoldAmounts?: null, currencyBoughtAmounts?: null, extraFeeRecipients?: null, extraFeeAmounts?: null): CurrencyPurchaseEventFilter;
        "LiquidityAdded(address,uint256[],uint256[],uint256[])"(provider?: PromiseOrValue<string> | null, tokenIds?: null, tokenAmounts?: null, currencyAmounts?: null): LiquidityAddedEventFilter;
        LiquidityAdded(provider?: PromiseOrValue<string> | null, tokenIds?: null, tokenAmounts?: null, currencyAmounts?: null): LiquidityAddedEventFilter;
        "LiquidityRemoved(address,uint256[],uint256[],tuple[])"(provider?: PromiseOrValue<string> | null, tokenIds?: null, tokenAmounts?: null, details?: null): LiquidityRemovedEventFilter;
        LiquidityRemoved(provider?: PromiseOrValue<string> | null, tokenIds?: null, tokenAmounts?: null, details?: null): LiquidityRemovedEventFilter;
        "ParentOwnerChanged(address,address)"(previousParent?: PromiseOrValue<string> | null, newParent?: PromiseOrValue<string> | null): ParentOwnerChangedEventFilter;
        ParentOwnerChanged(previousParent?: PromiseOrValue<string> | null, newParent?: PromiseOrValue<string> | null): ParentOwnerChangedEventFilter;
        "RoyaltyChanged(address,uint256)"(royaltyRecipient?: PromiseOrValue<string> | null, royaltyFee?: null): RoyaltyChangedEventFilter;
        RoyaltyChanged(royaltyRecipient?: PromiseOrValue<string> | null, royaltyFee?: null): RoyaltyChangedEventFilter;
        "TokensPurchase(address,address,uint256[],uint256[],uint256[],address[],uint256[])"(buyer?: PromiseOrValue<string> | null, recipient?: PromiseOrValue<string> | null, tokensBoughtIds?: null, tokensBoughtAmounts?: null, currencySoldAmounts?: null, extraFeeRecipients?: null, extraFeeAmounts?: null): TokensPurchaseEventFilter;
        TokensPurchase(buyer?: PromiseOrValue<string> | null, recipient?: PromiseOrValue<string> | null, tokensBoughtIds?: null, tokensBoughtAmounts?: null, currencySoldAmounts?: null, extraFeeRecipients?: null, extraFeeAmounts?: null): TokensPurchaseEventFilter;
        "TransferBatch(address,address,address,uint256[],uint256[])"(_operator?: PromiseOrValue<string> | null, _from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null, _ids?: null, _amounts?: null): TransferBatchEventFilter;
        TransferBatch(_operator?: PromiseOrValue<string> | null, _from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null, _ids?: null, _amounts?: null): TransferBatchEventFilter;
        "TransferSingle(address,address,address,uint256,uint256)"(_operator?: PromiseOrValue<string> | null, _from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null, _id?: null, _amount?: null): TransferSingleEventFilter;
        TransferSingle(_operator?: PromiseOrValue<string> | null, _from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null, _id?: null, _amount?: null): TransferSingleEventFilter;
    };
    estimateGas: {
        balanceOf(_owner: PromiseOrValue<string>, _id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfBatch(_owners: PromiseOrValue<string>[], _ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        buyTokens(_tokenIds: PromiseOrValue<BigNumberish>[], _tokensBoughtAmounts: PromiseOrValue<BigNumberish>[], _maxCurrency: PromiseOrValue<BigNumberish>, _deadline: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, _extraFeeRecipients: PromiseOrValue<string>[], _extraFeeAmounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        changeOwnableParent(_newParent: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getBuyPrice(_assetBoughtAmount: PromiseOrValue<BigNumberish>, _assetSoldReserve: PromiseOrValue<BigNumberish>, _assetBoughtReserve: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getBuyPriceWithRoyalty(_tokenId: PromiseOrValue<BigNumberish>, _assetBoughtAmount: PromiseOrValue<BigNumberish>, _assetSoldReserve: PromiseOrValue<BigNumberish>, _assetBoughtReserve: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getCurrencyInfo(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrencyReserves(_ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        getFactoryAddress(overrides?: CallOverrides): Promise<BigNumber>;
        getGlobalRoyaltyFee(overrides?: CallOverrides): Promise<BigNumber>;
        getGlobalRoyaltyRecipient(overrides?: CallOverrides): Promise<BigNumber>;
        getLPFee(overrides?: CallOverrides): Promise<BigNumber>;
        getOwner(overrides?: CallOverrides): Promise<BigNumber>;
        getPrice_currencyToToken(_ids: PromiseOrValue<BigNumberish>[], _tokensBought: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        getPrice_tokenToCurrency(_ids: PromiseOrValue<BigNumberish>[], _tokensSold: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        getRoyalties(_royaltyRecipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoyaltiesNumerator(_royaltyRecipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoyaltyInfo(_tokenId: PromiseOrValue<BigNumberish>, _cost: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSellPrice(_assetSoldAmount: PromiseOrValue<BigNumberish>, _assetSoldReserve: PromiseOrValue<BigNumberish>, _assetBoughtReserve: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSellPriceWithRoyalty(_tokenId: PromiseOrValue<BigNumberish>, _assetSoldAmount: PromiseOrValue<BigNumberish>, _assetSoldReserve: PromiseOrValue<BigNumberish>, _assetBoughtReserve: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenAddress(overrides?: CallOverrides): Promise<BigNumber>;
        getTotalSupply(_ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(_owner: PromiseOrValue<string>, _operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, _from: PromiseOrValue<string>, _ids: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        onERC1155Received(_operator: PromiseOrValue<string>, _from: PromiseOrValue<string>, _id: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        safeBatchTransferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _ids: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        safeTransferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _id: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendRoyalties(_royaltyRecipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(_operator: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRoyaltyInfo(_fee: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        uri(_id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        balanceOf(_owner: PromiseOrValue<string>, _id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfBatch(_owners: PromiseOrValue<string>[], _ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        buyTokens(_tokenIds: PromiseOrValue<BigNumberish>[], _tokensBoughtAmounts: PromiseOrValue<BigNumberish>[], _maxCurrency: PromiseOrValue<BigNumberish>, _deadline: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, _extraFeeRecipients: PromiseOrValue<string>[], _extraFeeAmounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        changeOwnableParent(_newParent: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getBuyPrice(_assetBoughtAmount: PromiseOrValue<BigNumberish>, _assetSoldReserve: PromiseOrValue<BigNumberish>, _assetBoughtReserve: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBuyPriceWithRoyalty(_tokenId: PromiseOrValue<BigNumberish>, _assetBoughtAmount: PromiseOrValue<BigNumberish>, _assetSoldReserve: PromiseOrValue<BigNumberish>, _assetBoughtReserve: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrencyInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrencyReserves(_ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFactoryAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGlobalRoyaltyFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGlobalRoyaltyRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLPFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPrice_currencyToToken(_ids: PromiseOrValue<BigNumberish>[], _tokensBought: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPrice_tokenToCurrency(_ids: PromiseOrValue<BigNumberish>[], _tokensSold: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoyalties(_royaltyRecipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoyaltiesNumerator(_royaltyRecipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoyaltyInfo(_tokenId: PromiseOrValue<BigNumberish>, _cost: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSellPrice(_assetSoldAmount: PromiseOrValue<BigNumberish>, _assetSoldReserve: PromiseOrValue<BigNumberish>, _assetBoughtReserve: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSellPriceWithRoyalty(_tokenId: PromiseOrValue<BigNumberish>, _assetSoldAmount: PromiseOrValue<BigNumberish>, _assetSoldReserve: PromiseOrValue<BigNumberish>, _assetBoughtReserve: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalSupply(_ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(_owner: PromiseOrValue<string>, _operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, _from: PromiseOrValue<string>, _ids: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155Received(_operator: PromiseOrValue<string>, _from: PromiseOrValue<string>, _id: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        safeBatchTransferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _ids: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        safeTransferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _id: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendRoyalties(_royaltyRecipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(_operator: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRoyaltyInfo(_fee: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        uri(_id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
