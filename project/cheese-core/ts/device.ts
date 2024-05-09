declare var DeviceApi: any
export default class device {
    constructor() {
    }

    public static getIMEIAsync(): Promise<string> {
        return DeviceApi.getIMEIAsync();
    }

    public static getIMEI(): string {
        return DeviceApi.getIMEI();
    }

    public static supportedOAIDAsync(): Promise<boolean> {
        return DeviceApi.supportedOAIDAsync();
    }

    public static supportedOAID(): boolean {
        return DeviceApi.supportedOAID();
    }

    public static getOAIDAsync(): Promise<string> {
        return DeviceApi.getOAIDAsync();
    }

    public static getOAID(): string {
        return DeviceApi.getOAID();
    }

    public static getPositionAsync(): Promise<string> {
        return DeviceApi.getPositionAsync();
    }

    public static getPosition(): string {
        return DeviceApi.getPosition();
    }

    public static getPublicIPAsync(url: string = "https://api.ipify.org"): Promise<string> {
        return DeviceApi.getPublicIPAsync(url);
    }

    public static getPublicIP(url: string = "https://api.ipify.org"): string {
        return DeviceApi.getPublicIP(url);
    }

    public static getWifiIPAsync(): Promise<string> {
        return DeviceApi.getWifiIPAsync();
    }

    public static getWifiIP(): string {
        return DeviceApi.getWifiIP();
    }


    public static getAndroidVersionAsync(): Promise<string> {
        return DeviceApi.getAndroidVersionAsync();
    }

    public static getAndroidVersion(): string {
        return DeviceApi.getAndroidVersion();
    }


    public static getStatusBarHeightAsync(): Promise<number> {
        return DeviceApi.getStatusBarHeightAsync();
    }

    public static getStatusBarHeight(): number {
        return DeviceApi.getStatusBarHeight();
    }


    public static getNavigationBarHeightAsync(): Promise<number> {
        return DeviceApi.getNavigationBarHeightAsync();
    }

    public static getNavigationBarHeight(): number {
        return DeviceApi.getNavigationBarHeight();
    }


    public static getScreenHeightAsync(): Promise<number> {
        return DeviceApi.getScreenHeightAsync();
    }

    public static getScreenHeight(): number {
        return DeviceApi.getScreenHeight();
    }

    public static getScreenWidthAsync(): Promise<number> {
        return DeviceApi.getScreenWidthAsync();
    }

    public static getScreenWidth(): number {
        return DeviceApi.getScreenWidth();
    }

    public static getScreenDpiAsync(): Promise<number> {
        return DeviceApi.getScreenDpiAsync();
    }

    public static getScreenDpi(): number {
        return DeviceApi.getScreenDpi();
    }

    public static getTimeAsync(): Promise<number> {
        return DeviceApi.getTimeAsync();
    }

    public static getTime(): number {
        return DeviceApi.getTime();
    }

    public static getClipboardAsync(): Promise<string> {
        return DeviceApi.getClipboardAsync();
    }

    public static getClipboard(): string {
        return DeviceApi.getClipboard();
    }

    public static setClipboardAsync(text: string): Promise<boolean> {
        return DeviceApi.setClipboardAsync(text);
    }

    public static setClipboard(text: string): boolean {
        return DeviceApi.setClipboard(text);
    }
}