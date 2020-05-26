import { Operand } from "./Operand";

export class In extends Operand {

    private Values: any = [];
    operand: any;

    constructor() {
        super();
    }
    
    inOperand(name, type) {
        super.abstractOperandName(name, type);
    }

    addValues(objValue: object) {
        this.Values.push(objValue);
    }

}