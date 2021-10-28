"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchOpEquality = exports.SearchOperationBuilder = exports.SearchOperation = exports.SearchParam = void 0;
var EqualOperation_1 = require("./EqualOperation");
var LikeOperation_1 = require("./LikeOperation");
var SearchParam = /** @class */ (function () {
    function SearchParam() {
        this.name = null;
        this.dataType = null;
        this.operation = null;
        this.hasMultValue = false;
        this.hasMultValueList = [];
        this.hasMultiParam = false;
        this.multiparams = [];
        this.operation = new EqualOperation_1.EqualOperation(EqualOperation_1.Equality.Equal);
        this.hasMultValueList = [];
        this.hasMultValue = false;
        this.multiparams = [];
    }
    SearchParam.prototype.searchParamCreate = function (inName, inDataType, inValue1, objSearchOperation) {
        this.name = inName;
        this.dataType = inDataType;
        this.fieldValueFrom = inValue1.Month + 1;
        this.operation = objSearchOperation;
    };
    SearchParam.prototype.searchParamFrom = function (inName, inDataType, inValue1) {
        this.name = inName;
        this.dataType = inDataType;
        this.fieldValueFrom = inValue1;
    };
    SearchParam.prototype.searchParamFromTo = function (inName, inDataType, inValue1, inValue2) {
        console.log('inValue1+++', inValue1.Month);
        inValue1.Month = inValue1.Month + 1;
        inValue2.Month = inValue2.Month + 1;
        this.name = inName;
        this.dataType = inDataType;
        if (inValue1 != undefined)
            this.fieldValueFrom = inValue1;
        if (inValue2 != undefined)
            this.fieldValueTo = inValue2;
    };
    SearchParam.prototype.searchParamMultiValue = function (inName, inDataType, multiValueList) {
        this.name = inName;
        this.dataType = inDataType;
        this.hasMultValueList = multiValueList;
        this.hasMultValue = true;
    };
    return SearchParam;
}());
exports.SearchParam = SearchParam;
var SearchOperation = /** @class */ (function () {
    function SearchOperation() {
    }
    return SearchOperation;
}());
exports.SearchOperation = SearchOperation;
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
var SearchOperationBuilder = /** @class */ (function () {
    function SearchOperationBuilder() {
        this.equalValue = SearchOpEquality.Equal;
    }
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
    SearchOperationBuilder.create = function (isLike, startWith, endWith) {
        this.objSearchOperation = new EqualOperation_1.EqualOperation(EqualOperation_1.Equality.Equal);
        if (!startWith && !endWith) {
            if (isLike) {
                this.objSearchOperation = new EqualOperation_1.EqualOperation(EqualOperation_1.Equality.Equal);
            }
            else {
                this.objSearchOperation = new EqualOperation_1.EqualOperation(EqualOperation_1.Equality.NotEqual);
            }
        }
        else {
            this.objSearchOperation = new LikeOperation_1.LikeOperation(isLike, startWith, endWith);
        }
        return this.objSearchOperation;
    };
    return SearchOperationBuilder;
}());
exports.SearchOperationBuilder = SearchOperationBuilder;
var SearchOpEquality;
(function (SearchOpEquality) {
    SearchOpEquality[SearchOpEquality["None"] = 0] = "None";
    SearchOpEquality[SearchOpEquality["Equal"] = 1] = "Equal";
    SearchOpEquality[SearchOpEquality["LessThan"] = 2] = "LessThan";
    SearchOpEquality[SearchOpEquality["GreaterThan"] = 3] = "GreaterThan";
    SearchOpEquality[SearchOpEquality["NotEqual"] = 4] = "NotEqual";
    SearchOpEquality[SearchOpEquality["GreaterThanOrEqual"] = 5] = "GreaterThanOrEqual";
    SearchOpEquality[SearchOpEquality["LessThanOrEqual"] = 6] = "LessThanOrEqual";
})(SearchOpEquality = exports.SearchOpEquality || (exports.SearchOpEquality = {}));
//# sourceMappingURL=SearchParam.js.map