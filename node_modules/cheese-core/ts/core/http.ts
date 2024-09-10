declare var HttpApi: any
export default class http {
    constructor() {
    }

    public static getDownloadAsync(url: String, savePath: String): Promise<boolean> {
        return HttpApi.getDownloadAsync(url, savePath);
    }

    public static getDownload(url: String, savePath: String): boolean {
        return HttpApi.getDownload(url, savePath);
    }

    public static getAsync(url: String): Promise<string> {
        return HttpApi.getAsync(url);
    }

    public static get(url: String): string {
        return HttpApi.get(url);
    }
}