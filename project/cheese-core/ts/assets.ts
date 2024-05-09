declare var AssetsApi: any
export default class assets {
    constructor() {
    }

    public static readAsync(path: string): Promise<string> {
        return AssetsApi.readAsync(path);
    }

    public static read(path: string): string {
        return AssetsApi.read(path);
    }

    public static copyAsync(path: string, destPath: string): Promise<boolean> {
        return AssetsApi.copyAsync(path, destPath);
    }

    public static copy(path: string, destPath: string): boolean {
        return AssetsApi.copy(path, destPath);
    }

    public static isFolderAsync(path: string): Promise<boolean> {
        return AssetsApi.isFolderAsync(path);
    }

    public static isFolder(path: string): boolean {
        return AssetsApi.isFolder(path);
    }

    public static isFileAsync(path: string): Promise<boolean> {
        return AssetsApi.isFileAsync(path);
    }

    public static isFile(path: string): boolean {
        return AssetsApi.isFile(path);
    }


}