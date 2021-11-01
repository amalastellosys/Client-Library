import { Operand } from "./Operand";

export class In extends Operand {

    private Values: any[] = [];
    operand: any;

    constructor() {
        super();
    }

    inOperand(name, type, value?) {
        super.abstractOperandName(name, type);
        this.Values = [...value];
    }

    addValues(objValue: object) {
        this.Values.push(objValue);
    }

}