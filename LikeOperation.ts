import { Operand } from "./Operand";


export class LikeOperation extends Operand {
    likeMode: LikeMode;
    startWith: boolean;
    endWith: boolean;
    LikeMode: boolean;

    constructor(isLike?: boolean, startWith?, endWith?) {

        super();
        // this.LikeMode = isLike;
        // this.startWith = true;
        // this.endWith = true;

    }

    // likeOperation(objLikeMode: LikeMode, startWith, endWith, name, value, ) {

    likeOperation(name, value, type) {
        super.abstractOperandObjLike(name, value, type);
        // this.likeMode = objLikeMode;
        // this.startWith = startWith;
        // this.endWith = endWith;
    }

    // likeModeOperation(objLikeMode: LikeMode, startWith, endWith, name, value, ) {
    //     this.likeMode = objLikeMode;
    //     this.startWith = startWith;
    //     this.endWith = endWith;
    // }
}

export enum LikeMode {
    Like = 0,
    NotLike = 1,
};