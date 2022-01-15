"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreaterThanComparer = void 0;
var Operand_1 = require("./Operand");
var GreaterThanComparer = /** @class */ (function (_super) {
    __extends(GreaterThanComparer, _super);
    function GreaterThanComparer() {
        return _super.call(this) || this;
    }
    GreaterThanComparer.prototype.greaterThanOperand = function (name, secondName, value, type) {
        _super.prototype.abstractOperandObjGreaterThan.call(this, name, secondName, value, type);
    };
    return GreaterThanComparer;
}(Operand_1.Operand));
exports.GreaterThanComparer = GreaterThanComparer;
//# sourceMappingURL=GreaterThanComparer.js.map