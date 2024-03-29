export declare class SearchParam {
    name: string;
    secondName: string;
    dataType: string;
    fieldValueFrom: any;
    fieldValueTo: any;
    operation: any;
    hasMultValue: boolean;
    hasMultValueList: any;
    hasMultiParam: boolean;
    multiparams: any[];
    isAndOperator: boolean;
    constructor();
    searchParamCreate(inName: any, inDataType: any, inValue1: any, objSearchOperation: SearchOperation, isAndOperator?: any): void;
    searchParamCreator(inName: any, inDataType: any, inValue1: any, isAndOperator?: any): void;
    searchParamFrom(inName: any, inDataType: any, inValue1: any, isAndOperator?: any): void;
    searchParamGreaterThanComparer(inName: any, secondName: any, inDataType: any, inValue1: any, isAndOperator?: any): void;
    searchParamFromTo(inName: any, inDataType: any, inValue1: any, inValue2: any, isAndOperator?: any): void;
    searchParamMultiValue(inName: any, inDataType: any, multiValueList: any, isAndOperator?: any): void;
}
export declare abstract class SearchOperation {
    constructor();
}
export declare class SearchOperationBuilder {
    equalValue: SearchOpEquality;
    static objSearchOperation: SearchOperation;
    static create(isLike: boolean, startWith: boolean, endWith: boolean): SearchOperation;
}
export declare enum SearchOpEquality {
    None = 0,
    Equal = 1,
    LessThan = 2,
    GreaterThan = 3,
    NotEqual = 4,
    GreaterThanOrEqual = 5,
    LessThanOrEqual = 6
}
