import { EqualOperation, Equality } from "./EqualOperation";
import { GreaterThanComparer } from "./GreaterThanComparer";
import { LikeOperation } from "./LikeOperation";
import { NotEqualOperation } from "./NotEqualOperation";

export class SearchParam {


    name: string = null;
    secondName: string = null;
    dataType: string = null;
    //fieldValue: string;
    fieldValueFrom: any;
    fieldValueTo: any;
    operation: any = null;
    hasMultValue: boolean = false;
    hasMultValueList: any = [];
    hasMultiParam: boolean = false;
    multiparams = [];
    isAndOperator: boolean = true;

    constructor() {
        this.operation = new EqualOperation(Equality.Equal);
        this.hasMultValueList = [];
        this.hasMultValue = false;
        this.multiparams = [];
    }


    searchParamCreate(inName, inDataType, inValue1, objSearchOperation: SearchOperation, isAndOperator?) {
        this.name = inName;
        this.dataType = inDataType;
        this.fieldValueFrom = inValue1;
        this.operation = objSearchOperation;
        this.isAndOperator = isAndOperator;
    }

    searchParamCreator(inName, inDataType, inValue1, isAndOperator?) {

        var firstChar = inValue1.charAt(0);
        var lastChar = inValue1.substr(inValue1.length - 1);
        let bLikeStart = false;
        let bLikeEnd = false;
        let searchedString = inValue1;

        if (firstChar == "*") {
            searchedString = searchedString.substring(1);
            bLikeStart = true;
        }
        if (lastChar == "*") {
            searchedString = searchedString.substring(0, searchedString.length - 1);
            bLikeEnd = true;
        }
        this.name = inName;
        this.dataType = inDataType;
        this.fieldValueFrom = inValue1;
        this.searchParamCreate(inName, inDataType, searchedString, SearchOperationBuilder.create(true, bLikeStart, bLikeEnd), isAndOperator);
    }

    searchParamFrom(inName, inDataType, inValue1, isAndOperator?) {
        this.name = inName;
        this.dataType = inDataType;
        this.fieldValueFrom = inValue1;
        this.isAndOperator = isAndOperator;
    }

    searchParamGreaterThanComparer(inName, secondName, inDataType, inValue1, isAndOperator?) {
        this.name = inName;
        this.secondName = secondName;
        this.fieldValueFrom = inValue1;
        this.dataType = inDataType;
        this.operation = new GreaterThanComparer();;
        if (isAndOperator)
            this.isAndOperator = isAndOperator;
        else
            this.isAndOperator = this.isAndOperator;
    }

    searchParamFromTo(inName, inDataType, inValue1, inValue2, isAndOperator?) {
        inValue1.Month = inValue1.Month + 1;
        inValue2.Month = inValue2.Month + 1;
        this.name = inName;
        this.dataType = inDataType;
        this.isAndOperator = isAndOperator;
        if (inValue1 != undefined)
            this.fieldValueFrom = inValue1;
        if (inValue2 != undefined)
            this.fieldValueTo = inValue2;
    }

    searchParamMultiValue(inName, inDataType, multiValueList, isAndOperator?) {
        this.name = inName;
        this.dataType = inDataType;
        this.hasMultValueList = multiValueList;
        this.hasMultValue = true;
        this.isAndOperator = isAndOperator;
    }

}


export abstract class SearchOperation {

    constructor() {
    }
}

// export class EqualOption extends SearchOperation {

//     private likeMode: SearchOpEquality;

//     constructor(isEqual: SearchOpEquality) {

//         super();
//         this.likeMode = isEqual;
//     }

//     EqualMode = this.likeMode;


//     public static ReverseDateEquality(searchOpEquality: SearchOpEquality): SearchOpEquality {

//         let objSearchOpEquality: SearchOpEquality;
//         objSearchOpEquality = searchOpEquality;

//         switch (searchOpEquality) {
//             case SearchOpEquality.GreaterThan:
//                 objSearchOpEquality = SearchOpEquality.LessThan;
//                 break;

//             case SearchOpEquality.LessThan:
//                 objSearchOpEquality = SearchOpEquality.GreaterThan;
//                 break;

//             case SearchOpEquality.GreaterThanOrEqual:
//                 objSearchOpEquality = SearchOpEquality.LessThanOrEqual;
//                 break;

//             case SearchOpEquality.LessThanOrEqual:
//                 objSearchOpEquality = SearchOpEquality.GreaterThanOrEqual;
//                 break;
//         }

//         return objSearchOpEquality;
//     }
// }
// export class LikeOption extends SearchOperation {

//     private startWith: boolean;
//     private endWith: boolean;
//     private likeMode: boolean;
//     // likeStartWith: boolean;
//     // likeEndWith: boolean;
//     // likeModes: boolean;
//     constructor(isLike: boolean, inStartWith: boolean, inEndWith: boolean) {

//         super();
//         this.startWith = inStartWith;
//         this.endWith = inEndWith;
//         this.likeMode = isLike;
//     }

//     StartWith = this.startWith;

//     EndWith = this.endWith;
// }

export class SearchOperationBuilder {

    equalValue: SearchOpEquality = SearchOpEquality.Equal;
    static objSearchOperation: SearchOperation;

    // static create(isLike: boolean, startWith: boolean, endWith: boolean): SearchOperation {

    //     this.objSearchOperation = new EqualOption(SearchOpEquality.Equal);

    //     if (!startWith && !endWith) {

    //         if (isLike) {
    //             this.objSearchOperation = new EqualOption(SearchOpEquality.Equal);
    //         }
    //         else {
    //             this.objSearchOperation = new EqualOption(SearchOpEquality.NotEqual);
    //         }
    //     }

    //     else {
    //         this.objSearchOperation = new LikeOption(isLike, startWith, endWith);
    //     }

    //     return this.objSearchOperation;
    // }

    static create(isLike: boolean, startWith: boolean, endWith: boolean): SearchOperation {

        this.objSearchOperation = new EqualOperation(Equality.Equal);

        if (!startWith && !endWith) {

            if (isLike) {
                this.objSearchOperation = new EqualOperation(Equality.Equal);
            }
            else {
                this.objSearchOperation = new NotEqualOperation(Equality.NotEqual);
            }
        }
        else {
            this.objSearchOperation = new LikeOperation(isLike, startWith, endWith);
        }

        return this.objSearchOperation;
    }
}


export enum SearchOpEquality {
    None = 0,
    Equal = 1,
    LessThan = 2,
    GreaterThan = 3,
    NotEqual = 4,
    GreaterThanOrEqual = 5,
    LessThanOrEqual = 6,
}