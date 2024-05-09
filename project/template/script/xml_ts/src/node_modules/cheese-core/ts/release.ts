declare var ReleaseApi: any
export default class release {
    constructor() {
    }

    public static releaseAsync(obj: any): Promise<boolean> {
        return ReleaseApi.releaseAsync(obj);
    }
    public static release(obj:any): boolean {
        return ReleaseApi.release(obj);
    }

}