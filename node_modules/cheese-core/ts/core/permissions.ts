declare var PermissionsApi: any
export default class permissions {
    constructor() {
    }
    public static readonly ACCESSIBILITY:number = PermissionsApi._ACCESSIBILITY
    public static readonly FLOAT:number = PermissionsApi._FLOAT
    public static readonly RECORDSCREEN:number = PermissionsApi._RECORDSCREEN
    public static requestPermissionAsync(tag: number,timeout:number): Promise<boolean> {
        return PermissionsApi.requestPermissionAsync(tag,timeout);
    }

    public static requestPermission(tag: number,timeout:number): boolean {
        return PermissionsApi.requestPermission(tag,timeout);
    }


    public static checkPermissionAsync(tag: number): Promise<boolean> {
        return PermissionsApi.checkPermissionAsync(tag);
    }

    public static checkPermission(tag: number): boolean {
        return PermissionsApi.checkPermission(tag);
    }
}