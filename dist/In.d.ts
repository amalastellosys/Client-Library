import { Operand } from "./Operand";
export declare class In extends Operand {
    private Values;
    operand: any;
    constructor();
    inOperand(name: any, type: any, value?: any): void;
    addValues(objValue: object): void;
}
