
import { Operand } from "./Operand";

export class Between extends Operand {

    private From: string;
    private To: string;

    constructor() {

        super();
    }

    betweenFromAndTo(inOperand, ojFromValue, objToValue, datatype): any {

        super.abstractOperandName(inOperand, datatype);
        this.From = ojFromValue;
        this.To = objToValue;
    }

}


