import { Operand } from "./Operand";
export declare class LikeOperation extends Operand {
    likeMode: LikeMode;
    startWith: boolean;
    endWith: boolean;
    LikeMode: boolean;
    constructor(isLike?: boolean, startWith?: any, endWith?: any);
    likeOperation(name: any, value: any, type: any): void;
}
export declare enum LikeMode {
    Like = 0,
    NotLike = 1
}
