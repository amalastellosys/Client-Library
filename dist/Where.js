"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Where = void 0;
var Where = /** @class */ (function () {
    function Where() {
        this._OperationList = [];
    }
    Where.prototype.addConditionalParam = function (objOperator) {
        this._OperationList.push(objOperator);
    };
    Where.prototype.toJsonString = function () {
        var json = '[]';
        var oprList = JSON.parse(json);
        this._OperationList.forEach(function (list) {
            oprList.push(JSON.parse(list.toJsonString()));
        });
        return oprList;
    };
    return Where;
}());
exports.Where = Where;
//# sourceMappingURL=Where.js.map