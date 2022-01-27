import { Operand } from "./Operand";
export declare class NotEqualOperation extends Operand {
    constructor(objEquality?: Equality);
    notEqualOperand(name: any, value: any, type: any): void;
}
export declare enum Equality {
    None = 0,
    Equal = 1,
    LessThan = 2,
    GreaterThan = 3,
    NotEqual = 4,
    GreaterThanOrEqual = 5,
    LessThanOrEqual = 6
}
