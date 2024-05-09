declare var TimeApi: any
export default class time {
    constructor() {
    }

    public static timeFormatAsync(timestamp: number, pn: string): Promise<string> {
        return TimeApi.timeFormatAsync(timestamp,pn);
    }
    public static timeFormat(timestamp: number, pn: string): string {
        return TimeApi.timeFormat(timestamp,pn);
    }

    public static getTimeAsync(): Promise<number> {
        return TimeApi.getTimeAsync();
    }
    public static getTime(): number {
        return TimeApi.getTime();
    }

}