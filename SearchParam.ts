import { EqualOperation, Equality } from "./EqualOperation";
import { LikeOperation } from "./LikeOperation";

export class SearchParam {


    name: string = null;
    dataType: string = null;
    //fieldValue: string;
    fieldValueFrom: string = null;
    fieldValueTo: string = null;
    operation: any = null;
    hasMultValue: boolean = false;
    hasMultValueList: any = [];
    hasMultiParam: boolean = false;
    multiparams = [];

    constructor() {
        this.operation = new EqualOperation(Equality.Equal);
        this.hasMultValueList = [];
        this.hasMultValue = false;
        this.multiparams = [];
    }


    searchParamCreate(inName, inDataType, inValue1, objSearchOperation: SearchOperation) {
        this.name = inName;
        this.dataType = inDataType;
        this.fieldValueFrom = inValue1;
        this.operation = objSearchOperation;
    }
    searchParamFrom(inName, inDataType, inValue1) {
        this.name = inName;
        this.dataType = inDataType;
        this.fieldValueFrom = inValue1;
    }
    searchParamFromTo(inName, inDataType, inValue1, inValue2) {
        this.name = inName;
        this.dataType = inDataType;
        this.fieldValueFrom = inValue1;
        this.fieldValueTo = inValue2;
    }
    searchParamMultiValue(inName, inDataType, multiValueList) {
        this.name = inName;
        this.dataType = inDataType;
        this.hasMultValueList = multiValueList;
        this.hasMultValue = true;
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
                this.objSearchOperation = new EqualOperation(Equality.NotEqual);
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