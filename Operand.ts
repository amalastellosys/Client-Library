
export class Operand {

    private Name: string;
    private Type: string;
    private Value: string;
    private operation: any;
    private operandType: string;

    constructor() {

    }


    abstractOperandName(inName, type?) {

        this.Name = inName;
        this.Type = type
    }

    abstractOperandType(inName, value, type) {

        this.Name = inName;
        this.Type = type;
        this.Value = value;
    }

    abstractOperandObjLike(inName, value, type) {

        this.Name = inName;
        this.Value = value;
        this.Type = type;
    }

}


export enum ValueType {
    NULL = 0
}