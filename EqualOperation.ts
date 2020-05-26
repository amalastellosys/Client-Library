import { Operand } from "./Operand";


export class EqualOperation extends Operand {

    //EqualOperator: Equality;

    constructor(objEquality?: Equality) {

        super();

        // if (objEquality) {
        //     this.EqualOperator = objEquality;
        // }

        // else {
        //     this.EqualOperator = Equality.Equal;
        // }

    }

    equalOperand(name, value, type) {

        super.abstractOperandType(name, value, type);
        //this.EqualOperator = objEquality;
    }
}

export enum Equality {
    None = 0,
    Equal = 1,
    LessThan = 2,
    GreaterThan = 3,
    NotEqual = 4,
    GreaterThanOrEqual = 5,
    LessThanOrEqual = 6
};