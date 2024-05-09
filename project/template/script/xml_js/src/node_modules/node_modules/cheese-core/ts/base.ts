declare var BaseApi: any
import { Callback } from "types";
export default class base {
    constructor() {
    }

    public static sleepAsync(tim: number): Promise<void> {
        return BaseApi.sleepAsync(tim);
    }

    public static sleep(tim: number): void {
        return BaseApi.sleep(tim);
    }

    public static toastAsync(message: string): Promise<void> {
        return BaseApi.toastAsync(message);
    }

    public static toast(message: string): void {
        return BaseApi.toast(message);
    }

    public static exitAsync(): Promise<void> {
        return BaseApi.exitAsync();
    }

    public static exit(): void {
        return BaseApi.exit();
    }

    public static runJSAsync(nodeName: string, js: string): Promise<any> {
        return BaseApi.runJSAsync(nodeName, js);
    }

    public static runJS(nodeName: string, js: string): any {
        return BaseApi.runJS(nodeName, js);
    }

    public static runOnUiAsync(callback: Callback): Promise<void> {
        return BaseApi.runOnUiAsync(callback);
    }

    public static runOnUi(callback: Callback): void {
        return BaseApi.runOnUi(callback);
    }
}