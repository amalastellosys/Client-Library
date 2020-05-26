"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Operand_1 = require("./Operand");
var LikeOperation = /** @class */ (function (_super) {
    __extends(LikeOperation, _super);
    function LikeOperation(isLike, startWith, endWith) {
        return _super.call(this) || this;
        // this.LikeMode = isLike;
        // this.startWith = true;
        // this.endWith = true;
    }
    // likeOperation(objLikeMode: LikeMode, startWith, endWith, name, value, ) {
    LikeOperation.prototype.likeOperation = function (name, value) {
        _super.prototype.abstractOperandObjLike.call(this, name, value);
        // this.likeMode = objLikeMode;
        // this.startWith = startWith;
        // this.endWith = endWith;
    };
    return LikeOperation;
}(Operand_1.Operand));
exports.LikeOperation = LikeOperation;
var LikeMode;
(function (LikeMode) {
    LikeMode[LikeMode["Like"] = 0] = "Like";
    LikeMode[LikeMode["NotLike"] = 1] = "NotLike";
})(LikeMode = exports.LikeMode || (exports.LikeMode = {}));
;
//# sourceMappingURL=LikeOperation.js.map