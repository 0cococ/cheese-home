declare var ConsoleApi: any
export default class console {
    constructor() {
    }

    public static showAsync(): Promise<void> {
        return ConsoleApi.showAsync();
    }

    public static show(): void {
        return ConsoleApi.show();
    }

    public static logAsync(text: string): Promise<void> {
        return ConsoleApi.logAsync(text);
    }

    public static log(text: string): void {
        return ConsoleApi.log(text);
    }

    public static clearAsync(): Promise<void> {
        return ConsoleApi.clearAsync();
    }

    public static clear(): void {
        return ConsoleApi.clear();
    }

    public static hideAsync(): Promise<void> {
        return ConsoleApi.hideAsync();
    }

    public static hide(): void {
        return ConsoleApi.hide();
    }

    public static setTouchAsync(enabled: boolean): Promise<void> {
        return ConsoleApi.setTouch(enabled);
    }

    public static setTouch(enabled: boolean): void {
        return ConsoleApi.setTouch(enabled);
    }


}