"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionCreator = void 0;
var LikeOperation_1 = require("./LikeOperation");
var EqualOperation_1 = require("./EqualOperation");
var Where_1 = require("./Where");
var Operation_1 = require("./Operation");
var ConditionCreator = /** @class */ (function () {
    function ConditionCreator() {
        this.count = 1;
    }
    ConditionCreator.prototype.getSearchCondition = function (objSearchParamLit) {
        var _this = this;
        var objWhere = new Where_1.Where();
        var dataTimeString = "datetime";
        if (objSearchParamLit != null) {
            objSearchParamLit.forEach(function (objParam) {
                if (objParam.dataType == null)
                    objParam.dataType = "String";
                if (objParam.dataType.toLowerCase() == dataTimeString.toLowerCase() && objParam.fieldValueTo != null) {
                    objParam.dataType = "DateTime";
                    var operation = new Operation_1.Operation(Operation_1.OperationFlag.Between);
                    operation.getBetween().betweenFromAndTo(objParam.name, objParam.fieldValueFrom, objParam.fieldValueTo, objParam.dataType);
                    operation.setIterationCount(_this.count++);
                    operation.toJsonString();
                    objWhere.addConditionalParam(operation);
                }
                else if (objParam.hasMultValue) {
                    var operation = new Operation_1.Operation(Operation_1.OperationFlag.In);
                    operation.getIn().inOperand(objParam.name, objParam.dataType, objParam.hasMultValueList);
                    // objParam.hasMultValueList.forEach(itemList => {
                    //     operation.getIn().addValues(itemList)
                    // });
                    console.log('operation', operation);
                    operation.setIterationCount(_this.count++);
                    operation.toJsonString();
                    objWhere.addConditionalParam(operation);
                }
                else if (objParam.hasMultiParam) {
                    _this.getMultiParamCondition(objParam)._OperationList.forEach(function (operatorList) {
                        return objWhere._OperationList.push(operatorList);
                    });
                }
                else {
                    if (objParam.operation instanceof EqualOperation_1.EqualOperation) {
                        var operation = new Operation_1.Operation(Operation_1.OperationFlag.EqualOperation);
                        var objEqualOption = (objParam.operation);
                        operation.getEqualOperation().equalOperand(objParam.name, objParam.fieldValueFrom, objParam.dataType);
                        operation.setIterationCount(_this.count++);
                        operation.toJsonString();
                        objWhere.addConditionalParam(operation);
                    }
                    else if (objParam.operation instanceof LikeOperation_1.LikeOperation) {
                        var operation = new Operation_1.Operation(Operation_1.OperationFlag.LikeOperation);
                        var objLikeOption = (objParam.operation);
                        operation.getLikeOperation().likeOperation(objParam.name, objParam.fieldValueFrom);
                        var objLikeOperation = operation.getLikeOperation();
                        if (!operation.getLikeOperation().likeMode) {
                            operation.getLikeOperation().likeOperation(objParam.name, objParam.fieldValueFrom);
                        }
                        operation.setIterationCount(_this.count++);
                        operation.toJsonString();
                        objWhere.addConditionalParam(operation);
                    }
                }
                if (objSearchParamLit != undefined && objSearchParamLit[objSearchParamLit.length - 1] != objParam) {
                    var operationObj = new Operation_1.Operation(Operation_1.OperationFlag.And);
                    operationObj.getAnd();
                    operationObj.setIterationCount(_this.count++);
                    operationObj.toJsonString();
                    objWhere.addConditionalParam(operationObj);
                }
            });
        }
        return objWhere;
    };
    ConditionCreator.prototype.getMultiParamCondition = function (objSearchParam) {
        var _this = this;
        var objWhere = new Where_1.Where();
        var dataTimeString = "datetime";
        if (objSearchParam.hasMultiParam) {
            if (objSearchParam.multiparams != undefined && objSearchParam.multiparams.length > 0) {
                var operationObj = new Operation_1.Operation(Operation_1.OperationFlag.StartParenthesis);
                operationObj.getStartParenthesis();
                operationObj.setIterationCount(this.count++);
                operationObj.toJsonString();
                objWhere.addConditionalParam(operationObj);
                objSearchParam.multiparams.forEach(function (objParam) {
                    if (objParam.dataType == null) {
                        objParam.dataType = "string";
                    }
                    if (objParam.dataType.toLowerCase() == dataTimeString.toLowerCase() && (objParam.fieldValueTo != null)) {
                        objParam.dataType = "DateTime";
                        var operation_1 = new Operation_1.Operation(Operation_1.OperationFlag.Between);
                        operation_1.getBetween().betweenFromAndTo(objParam.name, objParam.fieldValueFrom, objParam.fieldValueTo, objParam.dataType);
                        operation_1.setIterationCount(_this.count++);
                        operation_1.toJsonString();
                        objWhere.addConditionalParam(operation_1);
                    }
                    else if (objParam.hasMultValue) {
                        var operation_2 = new Operation_1.Operation(Operation_1.OperationFlag.In);
                        operation_2.getIn().inOperand(objParam.name, objParam.dataType, objParam.hasMultValueList);
                        // objParam.hasMultValueList.forEach(itemList => {
                        //     operation.getIn().addValues(itemList)
                        // });
                        operation_2.setIterationCount(_this.count++);
                        operation_2.toJsonString();
                        objWhere.addConditionalParam(operation_2);
                    }
                    else if (objParam.hasMultiParams) {
                        var operation_3 = new Operation_1.Operation(Operation_1.OperationFlag.In);
                        operation_3.getIn().inOperand(objParam.name, objParam.dataType, objParam.hasMultValueList);
                        // objParam.hasMultValueList.forEach(itemList => {
                        //     operation.getIn().addValues(itemList)
                        // });
                        operation_3.setIterationCount(_this.count++);
                        operation_3.toJsonString();
                        objWhere.addConditionalParam(operation_3);
                    }
                    else {
                        if (objSearchParam.operation instanceof EqualOperation_1.EqualOperation) {
                            var operation_4 = new Operation_1.Operation(Operation_1.OperationFlag.EqualOperation);
                            var objEqualOption = (objParam.operation);
                            operation_4.getEqualOperation().equalOperand(objParam.name, objParam.fieldValueFrom, objParam.dataType);
                            operation_4.setIterationCount(_this.count++);
                            operation_4.toJsonString();
                            objWhere.addConditionalParam(operation_4);
                        }
                        else if (objSearchParam.operation instanceof LikeOperation_1.LikeOperation) {
                            var operation_5 = new Operation_1.Operation(Operation_1.OperationFlag.LikeOperation);
                            var objLikeOption = (objParam.operation);
                            operation_5.getLikeOperation().likeOperation(objParam.name, objParam.fieldValueFrom);
                            if (!operation_5.getLikeOperation().likeMode) {
                                operation_5.getLikeOperation().likeOperation(objParam.name, objParam.fieldValueFrom);
                            }
                            operation_5.setIterationCount(_this.count++);
                            operation_5.toJsonString();
                            objWhere.addConditionalParam(operation_5);
                        }
                    }
                    if (objSearchParam.multiparams != undefined && objSearchParam.multiparams.length > 0 && objSearchParam.multiparams[objSearchParam.multiparams.length - 1] != objParam) {
                        var operation_6 = new Operation_1.Operation(Operation_1.OperationFlag.Or);
                        operation_6.getOr();
                        operation_6.setIterationCount(_this.count++);
                        operation_6.toJsonString();
                        objWhere.addConditionalParam(operation_6);
                    }
                });
                var operation = new Operation_1.Operation(Operation_1.OperationFlag.CloseParenthesis);
                operation.getCloseParenthesis();
                operation.setIterationCount(this.count++);
                operation.toJsonString();
                objWhere.addConditionalParam(operation);
            }
        }
        return objWhere;
    };
    return ConditionCreator;
}());
exports.ConditionCreator = ConditionCreator;
//# sourceMappingURL=ConditionCreator.js.map