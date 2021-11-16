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
    SearchParam.prototype.searchParamCreate = function (inName, inDataType, inValue1, objSearchOperation, isAndOperator) {
        this.name = inName;
        this.dataType = inDataType;
        this.fieldValueFrom = inValue1;
        this.operation = objSearchOperation;
        this.isAndOperator = isAndOperator;
    };
    SearchParam.prototype.searchParamCreator = function (inName, inDataType, inValue1, isAndOperator) {
        var firstChar = inValue1.charAt(0);
        var lastChar = inValue1.substr(inValue1.length - 1);
        var bLikeStart = false;
        var bLikeEnd = false;
        var searchedString = inValue1;
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
    };
    SearchParam.prototype.searchParamFrom = function (inName, inDataType, inValue1, isAndOperator) {
        this.name = inName;
        this.dataType = inDataType;
        this.fieldValueFrom = inValue1;
        this.isAndOperator = isAndOperator;
    };
    SearchParam.prototype.searchParamFromTo = function (inName, inDataType, inValue1, inValue2, isAndOperator) {
        inValue1.Month = inValue1.Month + 1;
        inValue2.Month = inValue2.Month + 1;
        this.name = inName;
        this.dataType = inDataType;
        this.isAndOperator = isAndOperator;
        if (inValue1 != undefined)
            this.fieldValueFrom = inValue1;
        if (inValue2 != undefined)
            this.fieldValueTo = inValue2;
    };
    SearchParam.prototype.searchParamMultiValue = function (inName, inDataType, multiValueList, isAndOperator) {
        this.name = inName;
        this.dataType = inDataType;
        this.hasMultValueList = multiValueList;
        this.hasMultValue = true;
        this.isAndOperator = isAndOperator;
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