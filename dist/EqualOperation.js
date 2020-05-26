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
var EqualOperation = /** @class */ (function (_super) {
    __extends(EqualOperation, _super);
    //EqualOperator: Equality;
    function EqualOperation(objEquality) {
        return _super.call(this) || this;
        // if (objEquality) {
        //     this.EqualOperator = objEquality;
        // }
        // else {
        //     this.EqualOperator = Equality.Equal;
        // }
    }
    EqualOperation.prototype.equalOperand = function (name, value, type) {
        _super.prototype.abstractOperandType.call(this, name, value, type);
        //this.EqualOperator = objEquality;
    };
    return EqualOperation;
}(Operand_1.Operand));
exports.EqualOperation = EqualOperation;
var Equality;
(function (Equality) {
    Equality[Equality["None"] = 0] = "None";
    Equality[Equality["Equal"] = 1] = "Equal";
    Equality[Equality["LessThan"] = 2] = "LessThan";
    Equality[Equality["GreaterThan"] = 3] = "GreaterThan";
    Equality[Equality["NotEqual"] = 4] = "NotEqual";
    Equality[Equality["GreaterThanOrEqual"] = 5] = "GreaterThanOrEqual";
    Equality[Equality["LessThanOrEqual"] = 6] = "LessThanOrEqual";
})(Equality = exports.Equality || (exports.Equality = {}));
;
//# sourceMappingURL=EqualOperation.js.map