"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomDateTime = /** @class */ (function () {
    function CustomDateTime(p_dateInput) {
        this.year = p_dateInput.getFullYear();
        this.month = p_dateInput.getMonth();
        this.day = p_dateInput.getDate();
        this.hours = p_dateInput.getHours();
        this.minutes = p_dateInput.getMinutes();
        this.seconds = p_dateInput.getSeconds();
        this.milliSecond = p_dateInput.getMilliseconds();
    }
    CustomDateTime.prototype.getDateobj = function () {
        var dtdate = new Date(this.year, this.month, this.day, this.hours, this.minutes, this.seconds, this.milliSecond);
        return dtdate;
    };
    return CustomDateTime;
}());
exports.CustomDateTime = CustomDateTime;
//# sourceMappingURL=CustomDateTime.js.map