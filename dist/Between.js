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
var Between = /** @class */ (function (_super) {
    __extends(Between, _super);
    function Between() {
        return _super.call(this) || this;
    }
    Between.prototype.betweenFromAndTo = function (inOperand, ojFromValue, objToValue, datatype) {
        _super.prototype.abstractOperandName.call(this, inOperand, datatype);
        this.From = ojFromValue;
        this.To = objToValue;
    };
    return Between;
}(Operand_1.Operand));
exports.Between = Between;
//# sourceMappingURL=Between.js.map