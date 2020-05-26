import { Equality } from "./EqualOperation";
import { SearchParam } from "./SearchParam";
import { Where } from "./Where";
export declare class ConditionCreator {
    objEquality: Equality;
    count: number;
    constructor();
    getSearchCondition(objSearchParamLit: SearchParam[]): Where;
    private getMultiParamCondition;
}
