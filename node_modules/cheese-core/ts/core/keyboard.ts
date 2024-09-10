declare var KeyboardApi: any
export default class keyboard {
    constructor() {
    }

    public static inputAsync(text: String): Promise<void> {
        return KeyboardApi.inputAsync(text);
    }

    public static input(text: String): void {
        return KeyboardApi.input(text);
    }

    public static deleteAsync(): Promise<void> {
        return KeyboardApi.deleteAsync();
    }

    public static delete(): void {
        return KeyboardApi.delete();
    }


    public static enterAsync(): Promise<void> {
        return KeyboardApi.enterAsync();
    }

    public static enter(): void {
        return KeyboardApi.enter();
    }

}