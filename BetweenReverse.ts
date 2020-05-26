import { Operand } from "./Operand";

export class BetweenReverse extends Operand {

    from: Object;
    to: Object;

    constructor() {
        super();
    }

    betweenReverseFrom(objFromValue: Object, objToValue: string) {

        this.from = objFromValue.toString();
        this.to = objToValue.toString();
    }
}