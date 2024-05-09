declare var ZipApi: any
export default class zip {
    constructor() {
    }

    public static compressAsync(srcFilePath: string, destFilePath: string, password: string=""): Promise<boolean> {
        return ZipApi.compressAsync(srcFilePath, destFilePath,password);
    }

    public static compress(srcFilePath: string, destFilePath: string, password: string=""): boolean {
        return ZipApi.compress(srcFilePath, destFilePath,password);
    }


    public static decompressAsync(zipFilePath: string, destFilePath: string, password: string=""): Promise<boolean> {
        return ZipApi.decompressAsync(zipFilePath, destFilePath,password);
    }

    public static decompress(zipFilePath: string, destFilePath: string, password: string=""): boolean {
        return ZipApi.decompress(zipFilePath, destFilePath,password);
    }
}