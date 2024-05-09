declare var KeysApi: any
export default class keys {
    constructor() {
    }

    public static homeAsync(): Promise<boolean> {
        return KeysApi.homeAsync();
    }

    public static home(): boolean {
        return KeysApi.home();
    }

    public static backAsync(): Promise<boolean> {
        return KeysApi.backAsync();
    }

    public static back(): boolean {
        return KeysApi.back();
    }

    public static quickSettingsAsync(): Promise<boolean> {
        return KeysApi.quickSettingsAsync();
    }

    public static quickSettings(): boolean {
        return KeysApi.quickSettings();
    }

    public static powerDialogAsync(): Promise<boolean> {
        return KeysApi.powerDialogAsync();
    }

    public static powerDialog(): boolean {
        return KeysApi.powerDialog();
    }


    public static pullNotificationBarAsync(): Promise<boolean> {
        return KeysApi.pullNotificationBarAsync();
    }

    public static pullNotificationBar(): boolean {
        return KeysApi.pullNotificationBar();
    }


    public static recentsAsync(): Promise<boolean> {
        return KeysApi.recentsAsync();
    }

    public static recents(): boolean {
        return KeysApi.recents();
    }


    public static lockScreenAsync(): Promise<boolean> {
        return KeysApi.lockScreenAsync();
    }

    public static lockScreen(): boolean {
        return KeysApi.lockScreen();
    }


    public static screenShotAsync(): Promise<boolean> {
        return KeysApi.screenShotAsync();
    }

    public static screenShot(): boolean {
        return KeysApi.screenShot();
    }

    public static splitScreenAsync(): Promise<boolean> {
        return KeysApi.splitScreenAsync();
    }

    public static splitScreen(): boolean {
        return KeysApi.splitScreen();
    }
}