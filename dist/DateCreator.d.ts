export declare class DateCreator {
    static firstday: Date;
    static lastday: Date;
    static startDate: Date;
    static endDate: Date;
    constructor();
    static getDate(p_value: string): Date;
    static DateFormatter(p_date: any): string;
}
export declare enum DateRange {
    Today = "Today",
    ThisWeek = "ThisWeek",
    ThisMonth = "ThisMonth",
    ThisYear = "ThisYear",
    Yesterday = "Yesterday",
    LastWeek = "LastWeek",
    LastMonth = "LastMonth",
    LastYear = "LastYear",
    NextWeek = "NextWeek",
    NextMonth = "NextMonth",
    NextYear = "NextYear",
    Last7days = "Last7days",
    Last30Days = "Last30Days",
    Custom = "Custom",
    All = "All"
}
