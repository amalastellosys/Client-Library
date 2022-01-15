
import { Operand } from "./Operand";

export class GreaterThanComparer extends Operand {

    constructor() {

        super();
    }

    greaterThanOperand(name, secondName, value, type) {

        super.abstractOperandObjGreaterThan(name, secondName, value, type);
    }

}


