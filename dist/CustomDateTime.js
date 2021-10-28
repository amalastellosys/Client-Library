"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDateTime = void 0;
var CustomDateTime = /** @class */ (function () {
    function CustomDateTime(p_dateInput) {
        this.Year = p_dateInput.getFullYear();
        this.Month = p_dateInput.getMonth();
        this.Day = p_dateInput.getDate();
        this.Hour = p_dateInput.getHours();
        this.Minute = p_dateInput.getMinutes();
        this.Second = p_dateInput.getSeconds();
    }
    CustomDateTime.prototype.getDateobj = function () {
        var dtdate = new Date(this.Year, this.Month, this.Day, this.Hour, this.Minute, this.Second);
        return dtdate;
    };
    return CustomDateTime;
}());
exports.CustomDateTime = CustomDateTime;
//# sourceMappingURL=CustomDateTime.js.map