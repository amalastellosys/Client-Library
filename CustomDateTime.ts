export class CustomDateTime {

    year: number;
    month: number;
    day: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliSecond: number;
    date1: any;
    date: string;
    time: string;

    constructor(p_dateInput?) {

        this.year = p_dateInput.getFullYear();
        this.month = p_dateInput.getMonth();
        this.day = p_dateInput.getDate();
        this.hours = p_dateInput.getHours();
        this.minutes = p_dateInput.getMinutes();
        this.seconds = p_dateInput.getSeconds();
        this.milliSecond = p_dateInput.getMilliseconds();

    }

    getDateobj() {

        let dtdate: Date = new Date(this.year, this.month, this.day, this.hours, this.minutes, this.seconds, this.milliSecond);
        return dtdate;

    }

}


