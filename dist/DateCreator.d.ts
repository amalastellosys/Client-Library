export declare class DateCreator {
    static firstday: Date;
    static lastday: Date;
    static startDate: Date;
    static endDate: Date;
    constructor();
    static getDate(p_value: number): Date;
    static DateFormatter(p_date: any): string;
}
export declare enum DateRange {
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
