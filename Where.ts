import { Operation } from "./Operation";

export class Where {

    _OperationList: Array<Operation>;

    constructor() {
        this._OperationList = []
    }

    addConditionalParam(objOperator) {
        this._OperationList.push(objOperator);
    }

    toJsonString(): string {

        let json = '[]';
        let oprList = JSON.parse(json);
        this._OperationList.forEach(list => {
            oprList.push(JSON.parse(list.toJsonString()));
        })
        return oprList ;
    }
    
}