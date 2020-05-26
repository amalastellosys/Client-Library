import { CustomDateTime } from "./CustomDateTime";

export class DateCreator {



    static firstday: Date;
    static lastday: Date;
    static startDate: Date;
    static endDate: Date;

    constructor() {

    }


    static getDate(p_value: number): Date {


        let currDate = new Date();
        let customDateObj = new CustomDateTime(currDate);
        let currentDate = customDateObj.getDateobj()


        if (p_value == DateRange.Today) {

            let customDateObj = new CustomDateTime(currentDate);
            this.firstday = customDateObj.getDateobj();
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

            let customDateObj = new CustomDateTime(currentDate);
            this.lastday = customDateObj.getDateobj();
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
            let customDateObj = new CustomDateTime(currentDate);
            this.firstday = customDateObj.getDateobj();
            currentDate.setFullYear(currentDate.getFullYear() + 1)
            customDateObj = new CustomDateTime(currentDate);
            this.lastday = customDateObj.getDateobj();
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

        let startValue = new CustomDateTime(this.firstday);
        let endValue = new CustomDateTime(this.lastday);
        this.startDate = startValue.getDateobj();
        this.startDate.setHours(0, 0, 0, 0);
        this.endDate = endValue.getDateobj();
        this.endDate.setHours(0, 0, 0, 0);
        return this.startDate, this.endDate;
    }


    static DateFormatter(p_date): string {

        let m_month = (p_date.month + 1).toString();
        let m_day = p_date.day.toString();

        if (m_month.length < 2)
            m_month = '0' + m_month;
        if (m_day.length < 2)
            m_day = '0' + p_date.day;

        return [p_date.year, m_month, m_day].join('-');
    }

}

export enum DateRange {

    Today = 1,
    ThisWeek = 2,
    ThisMonth = 3,
    ThisYear = 4,
    Yesterday = 5,
    LastWeek = 6,
    LastMonth = 7,
    LastYear = 8,
    NextWeek = 9,
    NextMonth = 10,
    NextYear = 11,
    Last7days = 12,
    Last30Days = 13,
    Custom = 14,
    All = 15

}