export class CustomDateTime {

    Year: number;
    Month: number;
    Day: number;
    Hour: number;
    Minute: number;
    Second: number;
    MilliSecond: number;
    date1: any;
    date: string;
    time: string;

    constructor(p_dateInput?) {
        this.Year = p_dateInput.getFullYear();
        this.Month = p_dateInput.getMonth();
        this.Day = p_dateInput.getDate();
        this.Hour = p_dateInput.getHours();
        this.Minute = p_dateInput.getMinutes();
        this.Second = p_dateInput.getSeconds();
    }

    getDateobj() {
        let dtdate: Date = new Date(this.Year, this.Month, this.Day, this.Hour, this.Minute, this.Second);
        return dtdate;
    }
}


