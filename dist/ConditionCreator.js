"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionCreator = void 0;
var LikeOperation_1 = require("./LikeOperation");
var EqualOperation_1 = require("./EqualOperation");
var Where_1 = require("./Where");
var Operation_1 = require("./Operation");
var GreaterThanComparer_1 = require("./GreaterThanComparer");
var NotEqualOperation_1 = require("./NotEqualOperation");
var ConditionCreator = /** @class */ (function () {
    function ConditionCreator() {
        this.count = 1;
    }
    ConditionCreator.prototype.getSearchCondition = function (objSearchParamLit) {
        var _this = this;
        var objWhere = new Where_1.Where();
        var dataTimeString = "datetime";
        if (objSearchParamLit != null) {
            objSearchParamLit.forEach(function (objParam, index) {
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
                    if (objParam.operation instanceof NotEqualOperation_1.NotEqualOperation) {
                        var operation = new Operation_1.Operation(Operation_1.OperationFlag.NotEqualOperation);
                        var objEqualOption = (objParam.operation);
                        operation.getNotEqualOperation().notEqualOperand(objParam.name, objParam.fieldValueFrom, objParam.dataType);
                        operation.setIterationCount(_this.count++);
                        operation.toJsonString();
                        objWhere.addConditionalParam(operation);
                    }
                    if (objParam.operation instanceof GreaterThanComparer_1.GreaterThanComparer) {
                        var operation = new Operation_1.Operation(Operation_1.OperationFlag.GreaterThanComparer);
                        var objEqualOption = (objParam.operation);
                        operation.getGreaterThan().greaterThanOperand(objParam.name, objParam.secondName, objParam.fieldValueFrom, objParam.dataType);
                        operation.setIterationCount(_this.count++);
                        operation.toJsonString();
                        objWhere.addConditionalParam(operation);
                    }
                    else if (objParam.operation instanceof LikeOperation_1.LikeOperation) {
                        var operation = new Operation_1.Operation(Operation_1.OperationFlag.LikeOperation);
                        var objLikeOption = (objParam.operation);
                        operation.getLikeOperation().likeOperation(objParam.name, objParam.fieldValueFrom, objParam.dataType);
                        var objLikeOperation = operation.getLikeOperation();
                        if (!operation.getLikeOperation().likeMode) {
                            operation.getLikeOperation().likeOperation(objParam.name, objParam.fieldValueFrom, objParam.dataType);
                        }
                        operation.setIterationCount(_this.count++);
                        operation.toJsonString();
                        objWhere.addConditionalParam(operation);
                    }
                }
                if (objSearchParamLit != undefined && objSearchParamLit.length >= 2 && index != (objSearchParamLit.length - 1)) {
                    if (objParam.isAndOperator) {
                        var operationObj = new Operation_1.Operation(Operation_1.OperationFlag.And);
                        operationObj.getAnd();
                        operationObj.setIterationCount(_this.count++);
                        operationObj.toJsonString();
                        objWhere.addConditionalParam(operationObj);
                    }
                    else if (objParam.isAndOperator == false) {
                        var operationObj = new Operation_1.Operation(Operation_1.OperationFlag.Or);
                        operationObj.getOr();
                        operationObj.setIterationCount(_this.count++);
                        operationObj.toJsonString();
                        objWhere.addConditionalParam(operationObj);
                    }
                    else {
                        var operationObj = new Operation_1.Operation(Operation_1.OperationFlag.And);
                        operationObj.getAnd();
                        operationObj.setIterationCount(_this.count++);
                        operationObj.toJsonString();
                        objWhere.addConditionalParam(operationObj);
                    }
                }
                // if (objSearchParamLit != undefined && objSearchParamLit[objSearchParamLit.length - 1] != objParam) {
                //     let operationObj = new Operation(OperationFlag.And);
                //     operationObj.getAnd();
                //     operationObj.setIterationCount(this.count++);
                //     operationObj.toJsonString();
                //     objWhere.addConditionalParam(operationObj);
                // }
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
                objSearchParam.multiparams.forEach(function (objParam, index) {
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
                    else if (objParam.hasMultiParam) {
                        // let operation = new Operation(OperationFlag.In);
                        // operation.getIn().inOperand(objParam.name, objParam.dataType, objParam.hasMultValueList);
                        // // objParam.hasMultValueList.forEach(itemList => {
                        // //     operation.getIn().addValues(itemList)
                        // // });
                        // operation.setIterationCount(this.count++);
                        // operation.toJsonString();
                        // objWhere.addConditionalParam(operation);
                        _this.getMultiParamCondition(objParam)._OperationList.forEach(function (operatorList) {
                            return objWhere._OperationList.push(operatorList);
                        });
                    }
                    else {
                        if (objSearchParam.operation instanceof EqualOperation_1.EqualOperation) {
                            var operation_3 = new Operation_1.Operation(Operation_1.OperationFlag.EqualOperation);
                            var objEqualOption = (objParam.operation);
                            operation_3.getEqualOperation().equalOperand(objParam.name, objParam.fieldValueFrom, objParam.dataType);
                            operation_3.setIterationCount(_this.count++);
                            operation_3.toJsonString();
                            objWhere.addConditionalParam(operation_3);
                        }
                        if (objSearchParam.operation instanceof GreaterThanComparer_1.GreaterThanComparer) {
                            var operation_4 = new Operation_1.Operation(Operation_1.OperationFlag.GreaterThanComparer);
                            var objEqualOption = (objParam.operation);
                            operation_4.getGreaterThan().greaterThanOperand(objParam.name, objParam.secondName, objParam.fieldValueFrom, objParam.dataType);
                            operation_4.setIterationCount(_this.count++);
                            operation_4.toJsonString();
                            objWhere.addConditionalParam(operation_4);
                        }
                        else if (objSearchParam.operation instanceof LikeOperation_1.LikeOperation) {
                            var operation_5 = new Operation_1.Operation(Operation_1.OperationFlag.LikeOperation);
                            var objLikeOption = (objParam.operation);
                            operation_5.getLikeOperation().likeOperation(objParam.name, objParam.fieldValueFrom, objParam.dataType);
                            if (!operation_5.getLikeOperation().likeMode) {
                                operation_5.getLikeOperation().likeOperation(objParam.name, objParam.fieldValueFrom, objParam.dataType);
                            }
                            operation_5.setIterationCount(_this.count++);
                            operation_5.toJsonString();
                            objWhere.addConditionalParam(operation_5);
                        }
                    }
                    // if (objSearchParam.multiparams != undefined && objSearchParam.multiparams.length > 0 && objSearchParam.multiparams[objSearchParam.multiparams.length - 1] != objParam) {
                    //     let operation = new Operation(OperationFlag.Or);
                    //     operation.getOr();
                    //     operation.setIterationCount(this.count++);
                    //     operation.toJsonString();
                    //     objWhere.addConditionalParam(operation);
                    // }
                    if (objSearchParam.multiparams != undefined && objSearchParam.multiparams.length >= 2 && index != (objSearchParam.multiparams.length - 1)) {
                        if (objParam.isAndOperator) {
                            var operationObj_1 = new Operation_1.Operation(Operation_1.OperationFlag.And);
                            operationObj_1.getAnd();
                            operationObj_1.setIterationCount(_this.count++);
                            operationObj_1.toJsonString();
                            objWhere.addConditionalParam(operationObj_1);
                        }
                        else if (objParam.isAndOperator == false) {
                            var operationObj_2 = new Operation_1.Operation(Operation_1.OperationFlag.Or);
                            operationObj_2.getOr();
                            operationObj_2.setIterationCount(_this.count++);
                            operationObj_2.toJsonString();
                            objWhere.addConditionalParam(operationObj_2);
                        }
                        else {
                            var operationObj_3 = new Operation_1.Operation(Operation_1.OperationFlag.Or);
                            operationObj_3.getOr();
                            operationObj_3.setIterationCount(_this.count++);
                            operationObj_3.toJsonString();
                            objWhere.addConditionalParam(operationObj_3);
                        }
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