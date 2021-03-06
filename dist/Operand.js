"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Operand = /** @class */ (function () {
    function Operand() {
    }
    Operand.prototype.abstractOperandName = function (inName, type) {
        this.Name = inName;
        this.Type = type;
    };
    Operand.prototype.abstractOperandType = function (inName, value, type) {
        this.Name = inName;
        this.Type = type;
        this.Value = value;
    };
    Operand.prototype.abstractOperandObjLike = function (inName, value) {
        this.Name = inName;
        this.Value = value;
        this.Type = "System.String";
    };
    return Operand;
}());
exports.Operand = Operand;
var ValueType;
(function (ValueType) {
    ValueType[ValueType["NULL"] = 0] = "NULL";
})(ValueType = exports.ValueType || (exports.ValueType = {}));
//# sourceMappingURL=Operand.js.map