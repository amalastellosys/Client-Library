import { Operation } from "./Operation";
export declare class Where {
    _OperationList: Array<Operation>;
    constructor();
    addConditionalParam(objOperator: any): void;
    toJsonString(): string;
}
