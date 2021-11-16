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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.In = void 0;
var Operand_1 = require("./Operand");
var In = /** @class */ (function (_super) {
    __extends(In, _super);
    function In() {
        var _this = _super.call(this) || this;
        _this.Values = [];
        return _this;
    }
    In.prototype.inOperand = function (name, type, value) {
        _super.prototype.abstractOperandName.call(this, name, type);
        this.Values = __spreadArray([], value, true);
    };
    In.prototype.addValues = function (objValue) {
        this.Values.push(objValue);
    };
    return In;
}(Operand_1.Operand));
exports.In = In;
//# sourceMappingURL=In.js.map