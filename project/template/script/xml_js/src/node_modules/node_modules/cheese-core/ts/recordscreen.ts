declare var RecordScreenApi: any
import { Bitmap } from "types";
export default class recordscreen {
    constructor() {
    }

    public static requestPermissionAsync(timeout:number): Promise<boolean> {
        return RecordScreenApi.requestPermissionAsync(timeout);
    }

    public static requestPermission(timeout:number): boolean {
        return RecordScreenApi.requestPermission(timeout);
    }


    public static checkPermissionAsync(tag: number): Promise<boolean> {
        return RecordScreenApi.checkPermissionAsync(tag);
    }

    public static checkPermission(tag: number): boolean {
        return RecordScreenApi.checkPermission(tag);
    }

    public static captureScreenAsync(timeout: number, x: number, y: number, ex: number, ey: number): Promise<Bitmap> {
        return RecordScreenApi.captureScreenAsync(timeout, x, y, ex,ey);
    }

    public static captureScreen(timeout: number, x: number, y: number, ex: number, ey: number): Bitmap {
        return RecordScreenApi.captureScreen(timeout, x, y, ex,ey);
    }
}