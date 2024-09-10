declare var AppApi: any
export default class app {
    constructor() {
    }

    public static openUrlAsync(url: string): Promise<void> {
        return AppApi.openUrlAsync(url);
    }

    public static openUrl(url: string): void {
        return AppApi.openUrl(url);
    }

    public static uninstallAsync(pkg: string): Promise<void> {
        return AppApi.uninstallAsync(pkg);
    }

    public static uninstall(pkg: string): void {
        return AppApi.uninstall(pkg);
    }

    public static getPackageNameAsync(appName:string): Promise<string> {
        return AppApi.getPackageNameAsync(appName);
    }

    public static getPackageName(appName:string): string {
        return AppApi.getPackageName(appName);
    }

    public static getAppNameAsync(packageName:string): Promise<string> {
        return AppApi.getAppNameAsync(packageName);
    }

    public static getAppName(packageName:string): string {
        return AppApi.getAppName(packageName);
    }

    public static openAppSettingsAsync(packageName: string): Promise<boolean> {
        return AppApi.openAppSettingsAsync(packageName);
    }

    public static openAppSettings(packageName: string): boolean {
        return AppApi.openAppSettings(packageName);
    }

    public static openAppAsync(pkg: string): Promise<boolean> {
        return AppApi.openAppAsync(pkg);
    }

    public static openApp(pkg: string): boolean {
        return AppApi.openApp(pkg);
    }

    public static openSchemeAsync(schemeUri: string): Promise<boolean> {
        return AppApi.openSchemeAsync(schemeUri);
    }


    public static openScheme(schemeUri: string): boolean {
        return AppApi.openScheme(schemeUri);
    }


}
