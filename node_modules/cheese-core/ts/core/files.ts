declare var FilesApi: any
export default class files {
    constructor() {
    }

    public static readAsync(path: string): Promise<Array<string>> {
        return FilesApi.readAsync(path);
    }

    public static read(path: string): Array<string> {
        return FilesApi.read(path);
    }

    public static rmAsync(path: string): Promise<boolean> {
        return FilesApi.rm(path);
    }

    public static rm(path: string): boolean {
        return FilesApi.rm(path);
    }

    public static createAsync(path: string): Promise<boolean> {
        return FilesApi.createAsync(path);
    }

    public static create(path: string): boolean {
        return FilesApi.create(path);
    }

    public static copyAsync(sourceDirPath: string, destinationDirPath: string): Promise<boolean> {
        return FilesApi.copyAsync(sourceDirPath, destinationDirPath);
    }

    public static copy(sourceDirPath: string, destinationDirPath: string): boolean {
        return FilesApi.copy(sourceDirPath, destinationDirPath);
    }

    public static readJsonAsync(filePath: string, keys: string): Promise<boolean> {
        return FilesApi.readJsonAsync(filePath, keys);
    }

    public static readJson(filePath: string, keys: string): boolean {
        return FilesApi.readJson(filePath, keys);
    }

    public static isFileAsync(path: string): Promise<boolean> {
        return FilesApi.isFileAsync(path);
    }

    public static isFile(path: string): boolean {
        return FilesApi.isFile(path);
    }

    public static isFolderAsync(path: string): Promise<boolean> {
        return FilesApi.isFolderAsync(path);
    }

    public static isFolder(path: string): boolean {
        return FilesApi.isFolder(path);
    }

    public static appendAsync(filePath: string, content: string): Promise<boolean> {
        return FilesApi.append(filePath, content);
    }

    public static append(filePath: string, content: string): boolean {
        return FilesApi.append(filePath, content);
    }

    public static writeAsync(filePath: string, content: string): Promise<boolean> {
        return FilesApi.writeAsync(filePath, content);
    }

    public static write(filePath: string, content: string): boolean {
        return FilesApi.write(filePath, content);
    }

    public static saveAsync(obj: any, path: string): Promise<boolean> {
        return FilesApi.saveAsync(obj, path);
    }

    public static save(obj: any, path: string): boolean {
        return FilesApi.save(obj, path);
    }
}