"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomDateTime_1 = require("./CustomDateTime");
var DateCreator = /** @class */ (function () {
    function DateCreator() {
    }
    DateCreator.getDate = function (p_value) {
        var currDate = new Date();
        var customDateObj = new CustomDateTime_1.CustomDateTime(currDate);
        var currentDate = customDateObj.getDateobj();
        if (p_value == DateRange.Today) {
            var customDateObj_1 = new CustomDateTime_1.CustomDateTime(currentDate);
            this.firstday = customDateObj_1.getDateobj();
            this.lastday = new Date(currentDate.setDate(currentDate.getDate() + 1));
        }
        if (p_value == DateRange.ThisWeek) {
            this.firstday = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
            this.lastday = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 7));
        }
        if (p_value == DateRange.ThisMonth) {
            currentDate.setDate(1);
            this.firstday = new Date(currentDate.setDate(1));
            this.lastday = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
        }
        if (p_value == DateRange.ThisYear) {
            currentDate.setDate(1);
            currentDate.setMonth(0);
            this.firstday = new Date(currentDate.setFullYear(currentDate.getFullYear()));
            this.lastday = new Date(currentDate.setFullYear(currentDate.getFullYear() + 1));
        }
        if (p_value == DateRange.Yesterday) {
            var customDateObj_2 = new CustomDateTime_1.CustomDateTime(currentDate);
            this.lastday = customDateObj_2.getDateobj();
            this.firstday = new Date(currentDate.setDate(currentDate.getDate() - 1));
        }
        if (p_value == DateRange.LastWeek) {
            this.lastday = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
            var first = currentDate.getDate() - currentDate.getDay() - 7;
            this.firstday = new Date(currentDate.setDate(first));
        }
        if (p_value == DateRange.LastMonth) {
            currentDate.setDate(1);
            this.lastday = new Date(currentDate.setDate(1));
            this.firstday = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
        }
        if (p_value == DateRange.LastYear) {
            currentDate.setDate(1);
            currentDate.setMonth(0);
            var last = currentDate.getFullYear();
            this.firstday = new Date(currentDate.setFullYear(currentDate.getFullYear() - 1));
            this.lastday = new Date(currentDate.setFullYear(last));
        }
        if (p_value == DateRange.NextWeek) {
            var first = currentDate.getDate() - currentDate.getDay() + 7;
            this.firstday = new Date(currentDate.setDate(first));
            this.lastday = new Date(currentDate.setDate(this.firstday.getDate() - this.firstday.getDay() + 7));
        }
        if (p_value == DateRange.NextMonth) {
            currentDate.setDate(1);
            this.firstday = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
            this.lastday = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
        }
        if (p_value == DateRange.NextYear) {
            currentDate.setDate(1);
            currentDate.setMonth(0);
            currentDate.setFullYear(currentDate.getFullYear() + 1);
            var customDateObj_3 = new CustomDateTime_1.CustomDateTime(currentDate);
            this.firstday = customDateObj_3.getDateobj();
            currentDate.setFullYear(currentDate.getFullYear() + 1);
            customDateObj_3 = new CustomDateTime_1.CustomDateTime(currentDate);
            this.lastday = customDateObj_3.getDateobj();
        }
        if (p_value == DateRange.Last7days) {
            this.lastday = new Date(currentDate.setDate(currentDate.getDate() - 1));
            this.firstday = new Date(currentDate.setDate(currentDate.getDate() - 7));
        }
        if (p_value == DateRange.Last30Days) {
            this.lastday = new Date(currentDate.setDate(currentDate.getDate() - 1));
            this.firstday = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
        }
        if (p_value == DateRange.Custom) {
        }
        if (p_value == DateRange.All) {
        }
        var startValue = new CustomDateTime_1.CustomDateTime(this.firstday);
        var endValue = new CustomDateTime_1.CustomDateTime(this.lastday);
        this.startDate = startValue.getDateobj();
        this.startDate.setHours(0, 0, 0, 0);
        this.endDate = endValue.getDateobj();
        this.endDate.setHours(0, 0, 0, 0);
        return this.startDate, this.endDate;
    };
    DateCreator.DateFormatter = function (p_date) {
        var m_month = (p_date.month + 1).toString();
        var m_day = p_date.day.toString();
        if (m_month.length < 2)
            m_month = '0' + m_month;
        if (m_day.length < 2)
            m_day = '0' + p_date.day;
        return [p_date.year, m_month, m_day].join('-');
    };
    return DateCreator;
}());
exports.DateCreator = DateCreator;
var DateRange;
(function (DateRange) {
    DateRange[DateRange["Today"] = 1] = "Today";
    DateRange[DateRange["ThisWeek"] = 2] = "ThisWeek";
    DateRange[DateRange["ThisMonth"] = 3] = "ThisMonth";
    DateRange[DateRange["ThisYear"] = 4] = "ThisYear";
    DateRange[DateRange["Yesterday"] = 5] = "Yesterday";
    DateRange[DateRange["LastWeek"] = 6] = "LastWeek";
    DateRange[DateRange["LastMonth"] = 7] = "LastMonth";
    DateRange[DateRange["LastYear"] = 8] = "LastYear";
    DateRange[DateRange["NextWeek"] = 9] = "NextWeek";
    DateRange[DateRange["NextMonth"] = 10] = "NextMonth";
    DateRange[DateRange["NextYear"] = 11] = "NextYear";
    DateRange[DateRange["Last7days"] = 12] = "Last7days";
    DateRange[DateRange["Last30Days"] = 13] = "Last30Days";
    DateRange[DateRange["Custom"] = 14] = "Custom";
    DateRange[DateRange["All"] = 15] = "All";
})(DateRange = exports.DateRange || (exports.DateRange = {}));
//# sourceMappingURL=DateCreator.js.map