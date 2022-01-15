export declare class Operand {
    private Name;
    private SecondName;
    private Type;
    private Value;
    private operation;
    private operandType;
    constructor();
    abstractOperandName(inName: any, type?: any): void;
    abstractOperandType(inName: any, value: any, type: any): void;
    abstractOperandObjLike(inName: any, value: any, type: any): void;
    abstractOperandObjGreaterThan(inName: any, secondName: any, value: any, type: any): void;
}
export declare enum ValueType {
    NULL = 0
}
