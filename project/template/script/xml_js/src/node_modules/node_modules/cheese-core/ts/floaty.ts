declare var FloatyApi: any
import { EasyWindow } from "types";
export default class floaty {
    constructor() {
    }

    public static floatWithAsync(path: string): Promise<EasyWindow<any>> {
        return FloatyApi.floatWithAsync();
    }

    public static floatWith(): EasyWindow<any> {
        return FloatyApi.floatWith();
    }

    public static requestPermissionAsync(timeout: number): Promise<EasyWindow<any>> {
        return FloatyApi.requestPermissionAsync(timeout);
    }

    public static requestPermission(timeout: number): EasyWindow<any> {
        return FloatyApi.requestPermissionAsync(timeout);
    }

    public static checkPermissionAsync(): Promise<boolean> {
        return FloatyApi.checkPermissionAsync();
    }

    public static checkPermission(): boolean {
        return FloatyApi.checkPermission();
    }


}