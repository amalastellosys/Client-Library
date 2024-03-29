import { LikeMode, LikeOperation } from "./LikeOperation";
import { Equality, EqualOperation } from "./EqualOperation";
import { SearchParam } from "./SearchParam";
import { Where } from "./Where";
import { Operand } from "./Operand";
import { Operation, OperationFlag } from "./Operation";
import { GreaterThanComparer } from "./GreaterThanComparer";
import { NotEqualOperation } from "./NotEqualOperation";


export class ConditionCreator {

    objEquality: Equality;
    count = 1;

    constructor() {
    }


    getSearchCondition(objSearchParamLit: SearchParam[]) {

        let objWhere = new Where();
        let dataTimeString = "datetime";

        if (objSearchParamLit != null) {

            objSearchParamLit.forEach((objParam, index) => {

                if (objParam.dataType == null)
                    objParam.dataType = "String";

                if (objParam.dataType.toLowerCase() == dataTimeString.toLowerCase() && objParam.fieldValueTo != null) {
                    objParam.dataType = "DateTime";
                    let operation = new Operation(OperationFlag.Between);
                    operation.getBetween().betweenFromAndTo(objParam.name, objParam.fieldValueFrom, objParam.fieldValueTo, objParam.dataType);
                    operation.setIterationCount(this.count++);
                    operation.toJsonString();
                    objWhere.addConditionalParam(operation);
                }

                else if (objParam.hasMultValue) {
                    let operation = new Operation(OperationFlag.In);
                    operation.getIn().inOperand(objParam.name, objParam.dataType, objParam.hasMultValueList);

                    // objParam.hasMultValueList.forEach(itemList => {
                    //     operation.getIn().addValues(itemList)
                    // });
                    operation.setIterationCount(this.count++);
                    operation.toJsonString();
                    objWhere.addConditionalParam(operation);


                }
                else if (objParam.hasMultiParam) {
                    this.getMultiParamCondition(objParam)._OperationList.forEach(operatorList =>
                        objWhere._OperationList.push(operatorList));
                }

                else {
                    if (objParam.operation instanceof EqualOperation) {
                        let operation = new Operation(OperationFlag.EqualOperation);
                        let objEqualOption: EqualOperation = (<EqualOperation>(objParam.operation));
                        operation.getEqualOperation().equalOperand(objParam.name, objParam.fieldValueFrom, objParam.dataType);
                        operation.setIterationCount(this.count++);
                        operation.toJsonString();
                        objWhere.addConditionalParam(operation);
                    }

                    if (objParam.operation instanceof NotEqualOperation) {
                        let operation = new Operation(OperationFlag.NotEqualOperation);
                        let objEqualOption: NotEqualOperation = (<NotEqualOperation>(objParam.operation));
                        operation.getNotEqualOperation().notEqualOperand(objParam.name, objParam.fieldValueFrom, objParam.dataType);
                        operation.setIterationCount(this.count++);
                        operation.toJsonString();
                        objWhere.addConditionalParam(operation);
                    }

                    if (objParam.operation instanceof GreaterThanComparer) {

                        let operation = new Operation(OperationFlag.GreaterThanComparer);
                        let objEqualOption: GreaterThanComparer = (<GreaterThanComparer>(objParam.operation));

                        operation.getGreaterThan().greaterThanOperand(objParam.name, objParam.secondName, objParam.fieldValueFrom, objParam.dataType);
                        operation.setIterationCount(this.count++);
                        operation.toJsonString();
                        objWhere.addConditionalParam(operation);

                    }

                    else if (objParam.operation instanceof LikeOperation) {
                        let operation = new Operation(OperationFlag.LikeOperation);
                        let objLikeOption: LikeOperation = (<LikeOperation>(objParam.operation));
                        operation.getLikeOperation().likeOperation(objParam.name, objParam.fieldValueFrom, objParam.dataType);
                        let objLikeOperation = operation.getLikeOperation();

                        if (!operation.getLikeOperation().likeMode) {
                            operation.getLikeOperation().likeOperation(objParam.name, objParam.fieldValueFrom, objParam.dataType);
                        }
                        operation.setIterationCount(this.count++);
                        operation.toJsonString();
                        objWhere.addConditionalParam(operation);
                    }
                }

                if (objSearchParamLit != undefined && objSearchParamLit.length >= 2 && index != (objSearchParamLit.length - 1)) {
                    if (objParam.isAndOperator) {
                        let operationObj = new Operation(OperationFlag.And);
                        operationObj.getAnd();
                        operationObj.setIterationCount(this.count++);
                        operationObj.toJsonString();
                        objWhere.addConditionalParam(operationObj);
                    }
                    else if (objParam.isAndOperator == false) {
                        let operationObj = new Operation(OperationFlag.Or);
                        operationObj.getOr();
                        operationObj.setIterationCount(this.count++);
                        operationObj.toJsonString();
                        objWhere.addConditionalParam(operationObj);
                    }
                    else {
                        let operationObj = new Operation(OperationFlag.And);
                        operationObj.getAnd();
                        operationObj.setIterationCount(this.count++);
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
        return objWhere
    }


    private getMultiParamCondition(objSearchParam: SearchParam) {

        let objWhere = new Where();
        let dataTimeString = "datetime";

        if (objSearchParam.hasMultiParam) {

            if (objSearchParam.multiparams != undefined && objSearchParam.multiparams.length > 0) {

                let operationObj = new Operation(OperationFlag.StartParenthesis);
                operationObj.getStartParenthesis();
                operationObj.setIterationCount(this.count++);
                operationObj.toJsonString();
                objWhere.addConditionalParam(operationObj);

                objSearchParam.multiparams.forEach((objParam, index) => {

                    if (objParam.dataType == null) {
                        objParam.dataType = "string";
                    }

                    if (objParam.dataType.toLowerCase() == dataTimeString.toLowerCase() && (objParam.fieldValueTo != null)) {

                        objParam.dataType = "DateTime";
                        let operation = new Operation(OperationFlag.Between);
                        operation.getBetween().betweenFromAndTo(objParam.name, objParam.fieldValueFrom, objParam.fieldValueTo, objParam.dataType);
                        operation.setIterationCount(this.count++);
                        operation.toJsonString();
                        objWhere.addConditionalParam(operation);

                    }

                    else if (objParam.hasMultValue) {

                        let operation = new Operation(OperationFlag.In);
                        operation.getIn().inOperand(objParam.name, objParam.dataType, objParam.hasMultValueList);
                        // objParam.hasMultValueList.forEach(itemList => {
                        //     operation.getIn().addValues(itemList)
                        // });

                        operation.setIterationCount(this.count++);
                        operation.toJsonString();
                        objWhere.addConditionalParam(operation);
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
                        this.getMultiParamCondition(objParam)._OperationList.forEach(operatorList =>
                            objWhere._OperationList.push(operatorList));
                    }

                    else {

                        if (objParam.operation instanceof EqualOperation) {

                            let operation = new Operation(OperationFlag.EqualOperation);
                            let objEqualOption: EqualOperation = (<EqualOperation>(objParam.operation));

                            operation.getEqualOperation().equalOperand(objParam.name, objParam.fieldValueFrom, objParam.dataType);
                            operation.setIterationCount(this.count++);
                            operation.toJsonString();
                            objWhere.addConditionalParam(operation);

                        }

                        if (objParam.operation instanceof GreaterThanComparer) {

                            let operation = new Operation(OperationFlag.GreaterThanComparer);
                            let objEqualOption: GreaterThanComparer = (<GreaterThanComparer>(objParam.operation));

                            operation.getGreaterThan().greaterThanOperand(objParam.name, objParam.secondName, objParam.fieldValueFrom, objParam.dataType);
                            operation.setIterationCount(this.count++);
                            operation.toJsonString();
                            objWhere.addConditionalParam(operation);

                        }

                        else if (objParam.operation instanceof LikeOperation) {

                            let operation = new Operation(OperationFlag.LikeOperation);
                            let objLikeOption: LikeOperation = (<LikeOperation>(objParam.operation));
                            operation.getLikeOperation().likeOperation(objParam.name, objParam.fieldValueFrom, objParam.dataType);

                            if (!operation.getLikeOperation().likeMode) {
                                operation.getLikeOperation().likeOperation(objParam.name, objParam.fieldValueFrom, objParam.dataType);
                            }

                            operation.setIterationCount(this.count++);
                            operation.toJsonString();
                            objWhere.addConditionalParam(operation);
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
                            let operationObj = new Operation(OperationFlag.And);
                            operationObj.getAnd();
                            operationObj.setIterationCount(this.count++);
                            operationObj.toJsonString();
                            objWhere.addConditionalParam(operationObj);
                        }
                        else if (objParam.isAndOperator == false) {
                            let operationObj = new Operation(OperationFlag.Or);
                            operationObj.getOr();
                            operationObj.setIterationCount(this.count++);
                            operationObj.toJsonString();
                            objWhere.addConditionalParam(operationObj);
                        }
                        else {
                            let operationObj = new Operation(OperationFlag.Or);
                            operationObj.getOr();
                            operationObj.setIterationCount(this.count++);
                            operationObj.toJsonString();
                            objWhere.addConditionalParam(operationObj);
                        }
                    }
                });

                let operation = new Operation(OperationFlag.CloseParenthesis);
                operation.getCloseParenthesis();
                operation.setIterationCount(this.count++);
                operation.toJsonString();
                objWhere.addConditionalParam(operation);

            }
        }

        return objWhere
    }

}