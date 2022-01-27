import { And } from "./And";
import { Between } from "./Between";
import { Or } from "./Or";
import { CloseParenthesis } from "./CloseParenthesis";
import { LikeOperation } from "./LikeOperation";
import { StartParenthesis } from "./StartParenthesis";
import { In } from "./In";
import { NotIn } from "./NotIn";
import { EqualOperation } from "./EqualOperation";
import { BetweenReverse } from "./BetweenReverse";
import { GreaterThanComparer } from "./GreaterThanComparer";
import { NotEqualOperation } from "./NotEqualOperation";

export class Operation {

    IterationCount: number;
    private _Or: Or;
    private _And: And;
    private _EqualOperation: EqualOperation;
    private _NotEqualOperation: NotEqualOperation;
    private _LikeOperation: LikeOperation;
    private _Between: Between;
    private _BetweenReverse: BetweenReverse;
    private _In: In;
    private _NotIn: NotIn;
    private _StartParenthesis: StartParenthesis;
    private _CloseParenthesis: CloseParenthesis;
    private _GreaterThanComparer: GreaterThanComparer;
    _Status: OperationFlag;


    constructor(p_status: OperationFlag) {
        this.IterationCount;
        this._Status = p_status;
    }


    getIterationCount(): number {
        return this.IterationCount
    }

    setIterationCount(value: number) {
        this.IterationCount = value;
    }

    getOr(): Or {
        this._Or = new Or();
        return this._Or;
    }

    setOr(value: Or) {
        this._Or = value;
    }

    getAnd(): And {
        this._And = new And();
        return this._And;
    }

    setAnd(value: And) {
        this._And = value;
    }

    getEqualOperation(): EqualOperation {
        this._EqualOperation = new EqualOperation();
        return this._EqualOperation;
    }

    setEqualOperation(value: EqualOperation) {
        this._EqualOperation = value;
    }

    getNotEqualOperation(): NotEqualOperation {
        this._NotEqualOperation = new NotEqualOperation();
        return this._NotEqualOperation;
    }

    setNotEqualOperation(value: NotEqualOperation) {
        this._NotEqualOperation = value;
    }

    getLikeOperation(): LikeOperation {
        this._LikeOperation = new LikeOperation();
        return this._LikeOperation;
    }

    setLikeOperation(value: LikeOperation) {
        this._LikeOperation = value;
    }

    getBetween(): Between {
        this._Between = new Between();
        return this._Between;
    }

    setBetween(value: Between) {
        this._Between = value;
    }

    getBetweenReverse(): BetweenReverse {
        this._BetweenReverse = new BetweenReverse();
        return this._BetweenReverse;
    }

    setBetweenReverse(value: BetweenReverse) {
        this._BetweenReverse = value;
    }

    getIn(): In {
        this._In = new In();
        return this._In;
    }

    setIn(value: In) {
        this._In = value;
    }

    getNotIn(): NotIn {
        this._NotIn = new NotIn();
        return this._NotIn;
    }

    setNotIn(value: NotIn) {
        this._NotIn = value;
    }

    getStartParenthesis(): StartParenthesis {
        this._StartParenthesis = new StartParenthesis();
        return this._StartParenthesis;
    }

    setStartParenthesis(value: StartParenthesis) {
        this._StartParenthesis = value;
    }

    getCloseParenthesis(): CloseParenthesis {
        this._CloseParenthesis = new CloseParenthesis();
        return this._CloseParenthesis;
    }

    setCloseParenthesis(value: CloseParenthesis) {
        this._CloseParenthesis = value;
    }

    getGreaterThan(): GreaterThanComparer {
        this._GreaterThanComparer = new GreaterThanComparer();
        return this._GreaterThanComparer;
    }

    setGreaterThan(value: GreaterThanComparer) {
        this._GreaterThanComparer = value;
    }

    toJsonString(): string {

        let strJson = JSON.stringify(this);
        let JsonObj = JSON.parse(strJson);

        Object.keys(this).filter(key => key[0] === "_").forEach(key => {
            if (OperationFlag[this._Status] != key.slice(1)) {
                delete JsonObj[key];
            }
        });

        let strJSON = JSON.stringify(JsonObj);

        Object.keys(JSON.parse(strJSON)).filter(key => key[0] === "_").forEach(key => {
            strJSON = strJSON.replace(key, key.substring(1));
        });

        return strJSON;
    }
}

export enum OperationFlag {
    Between = 0,
    BetweenReverse = 1,
    NotIn = 2,
    EqualOperation = 3,
    LikeOperation = 4,
    And = 5,
    Or = 6,
    In = 7,
    StartParenthesis = 8,
    CloseParenthesis = 9,
    GreaterThanComparer = 10,
    NotEqualOperation = 11

}