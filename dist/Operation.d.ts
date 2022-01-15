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
export declare class Operation {
    IterationCount: number;
    private _Or;
    private _And;
    private _EqualOperation;
    private _LikeOperation;
    private _Between;
    private _BetweenReverse;
    private _In;
    private _NotIn;
    private _StartParenthesis;
    private _CloseParenthesis;
    private _GreaterThanComparer;
    _Status: OperationFlag;
    constructor(p_status: OperationFlag);
    getIterationCount(): number;
    setIterationCount(value: number): void;
    getOr(): Or;
    setOr(value: Or): void;
    getAnd(): And;
    setAnd(value: And): void;
    getEqualOperation(): EqualOperation;
    setEqualOperation(value: EqualOperation): void;
    getLikeOperation(): LikeOperation;
    setLikeOperation(value: LikeOperation): void;
    getBetween(): Between;
    setBetween(value: Between): void;
    getBetweenReverse(): BetweenReverse;
    setBetweenReverse(value: BetweenReverse): void;
    getIn(): In;
    setIn(value: In): void;
    getNotIn(): NotIn;
    setNotIn(value: NotIn): void;
    getStartParenthesis(): StartParenthesis;
    setStartParenthesis(value: StartParenthesis): void;
    getCloseParenthesis(): CloseParenthesis;
    setCloseParenthesis(value: CloseParenthesis): void;
    getGreaterThan(): GreaterThanComparer;
    setGreaterThan(value: GreaterThanComparer): void;
    toJsonString(): string;
}
export declare enum OperationFlag {
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
    GreaterThanComparer = 10
}
