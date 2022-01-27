"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationFlag = exports.Operation = void 0;
var And_1 = require("./And");
var Between_1 = require("./Between");
var Or_1 = require("./Or");
var CloseParenthesis_1 = require("./CloseParenthesis");
var LikeOperation_1 = require("./LikeOperation");
var StartParenthesis_1 = require("./StartParenthesis");
var In_1 = require("./In");
var NotIn_1 = require("./NotIn");
var EqualOperation_1 = require("./EqualOperation");
var BetweenReverse_1 = require("./BetweenReverse");
var GreaterThanComparer_1 = require("./GreaterThanComparer");
var NotEqualOperation_1 = require("./NotEqualOperation");
var Operation = /** @class */ (function () {
    function Operation(p_status) {
        this.IterationCount;
        this._Status = p_status;
    }
    Operation.prototype.getIterationCount = function () {
        return this.IterationCount;
    };
    Operation.prototype.setIterationCount = function (value) {
        this.IterationCount = value;
    };
    Operation.prototype.getOr = function () {
        this._Or = new Or_1.Or();
        return this._Or;
    };
    Operation.prototype.setOr = function (value) {
        this._Or = value;
    };
    Operation.prototype.getAnd = function () {
        this._And = new And_1.And();
        return this._And;
    };
    Operation.prototype.setAnd = function (value) {
        this._And = value;
    };
    Operation.prototype.getEqualOperation = function () {
        this._EqualOperation = new EqualOperation_1.EqualOperation();
        return this._EqualOperation;
    };
    Operation.prototype.setEqualOperation = function (value) {
        this._EqualOperation = value;
    };
    Operation.prototype.getNotEqualOperation = function () {
        this._NotEqualOperation = new NotEqualOperation_1.NotEqualOperation();
        return this._NotEqualOperation;
    };
    Operation.prototype.setNotEqualOperation = function (value) {
        this._NotEqualOperation = value;
    };
    Operation.prototype.getLikeOperation = function () {
        this._LikeOperation = new LikeOperation_1.LikeOperation();
        return this._LikeOperation;
    };
    Operation.prototype.setLikeOperation = function (value) {
        this._LikeOperation = value;
    };
    Operation.prototype.getBetween = function () {
        this._Between = new Between_1.Between();
        return this._Between;
    };
    Operation.prototype.setBetween = function (value) {
        this._Between = value;
    };
    Operation.prototype.getBetweenReverse = function () {
        this._BetweenReverse = new BetweenReverse_1.BetweenReverse();
        return this._BetweenReverse;
    };
    Operation.prototype.setBetweenReverse = function (value) {
        this._BetweenReverse = value;
    };
    Operation.prototype.getIn = function () {
        this._In = new In_1.In();
        return this._In;
    };
    Operation.prototype.setIn = function (value) {
        this._In = value;
    };
    Operation.prototype.getNotIn = function () {
        this._NotIn = new NotIn_1.NotIn();
        return this._NotIn;
    };
    Operation.prototype.setNotIn = function (value) {
        this._NotIn = value;
    };
    Operation.prototype.getStartParenthesis = function () {
        this._StartParenthesis = new StartParenthesis_1.StartParenthesis();
        return this._StartParenthesis;
    };
    Operation.prototype.setStartParenthesis = function (value) {
        this._StartParenthesis = value;
    };
    Operation.prototype.getCloseParenthesis = function () {
        this._CloseParenthesis = new CloseParenthesis_1.CloseParenthesis();
        return this._CloseParenthesis;
    };
    Operation.prototype.setCloseParenthesis = function (value) {
        this._CloseParenthesis = value;
    };
    Operation.prototype.getGreaterThan = function () {
        this._GreaterThanComparer = new GreaterThanComparer_1.GreaterThanComparer();
        return this._GreaterThanComparer;
    };
    Operation.prototype.setGreaterThan = function (value) {
        this._GreaterThanComparer = value;
    };
    Operation.prototype.toJsonString = function () {
        var _this = this;
        var strJson = JSON.stringify(this);
        var JsonObj = JSON.parse(strJson);
        Object.keys(this).filter(function (key) { return key[0] === "_"; }).forEach(function (key) {
            if (OperationFlag[_this._Status] != key.slice(1)) {
                delete JsonObj[key];
            }
        });
        var strJSON = JSON.stringify(JsonObj);
        Object.keys(JSON.parse(strJSON)).filter(function (key) { return key[0] === "_"; }).forEach(function (key) {
            strJSON = strJSON.replace(key, key.substring(1));
        });
        return strJSON;
    };
    return Operation;
}());
exports.Operation = Operation;
var OperationFlag;
(function (OperationFlag) {
    OperationFlag[OperationFlag["Between"] = 0] = "Between";
    OperationFlag[OperationFlag["BetweenReverse"] = 1] = "BetweenReverse";
    OperationFlag[OperationFlag["NotIn"] = 2] = "NotIn";
    OperationFlag[OperationFlag["EqualOperation"] = 3] = "EqualOperation";
    OperationFlag[OperationFlag["LikeOperation"] = 4] = "LikeOperation";
    OperationFlag[OperationFlag["And"] = 5] = "And";
    OperationFlag[OperationFlag["Or"] = 6] = "Or";
    OperationFlag[OperationFlag["In"] = 7] = "In";
    OperationFlag[OperationFlag["StartParenthesis"] = 8] = "StartParenthesis";
    OperationFlag[OperationFlag["CloseParenthesis"] = 9] = "CloseParenthesis";
    OperationFlag[OperationFlag["GreaterThanComparer"] = 10] = "GreaterThanComparer";
    OperationFlag[OperationFlag["NotEqualOperation"] = 11] = "NotEqualOperation";
})(OperationFlag = exports.OperationFlag || (exports.OperationFlag = {}));
//# sourceMappingURL=Operation.js.map