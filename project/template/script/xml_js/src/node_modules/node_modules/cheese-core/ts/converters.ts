declare var ConvertersApi: any
import {Pair,InputStream,Bitmap } from "types";
export default class converters {
    constructor() {
    }

    public static pairArrayAsync(...data: number[]): Promise<Array<Pair<number,number>>> {
        return ConvertersApi.pairArrayAsync(...data);
    }

    public static pairArray(...data: number[]): Array<Pair<number,number>> {
        return ConvertersApi.pairArray(...data);
    }

    public static pairArraysAsync(...data: any[]): Promise<Array<Array<Pair<number,number>>>> {
        return ConvertersApi.pairArraysAsync(...data);
    }

    public static pairArrays(...data: any[]): Array<Array<Pair<number,number>>> {
        return ConvertersApi.pairArrays(...data);
    }

    public static sdToStreamAsync(filePath: string): Promise<InputStream> {
        return ConvertersApi.sdToStreamAsync(filePath);
    }

    public static sdToStream(filePath: string): InputStream {
        return ConvertersApi.sdToStream(filePath);
    }

    public static assetsToStreamAsync(filePath: string): Promise<InputStream> {
        return ConvertersApi.assetsToStreamAsync(filePath);
    }

    public static assetsToStream(filePath: string): InputStream {
        return ConvertersApi.assetsToStream(filePath);
    }


    public static streamToBitmapAsync(inputStream: InputStream): Promise<Bitmap> {
        return ConvertersApi.streamToBitmapAsync(inputStream);
    }

    public static streamToBitmap(inputStream: InputStream): Bitmap {
        return ConvertersApi.streamToBitmap(inputStream);
    }


    public static bitmapToStreamAsync(bitmap: Bitmap): Promise<InputStream> {
        return ConvertersApi.bitmapToStreamAsync(bitmap);
    }

    public static bitmapToStream(bitmap: Bitmap): InputStream {
        return ConvertersApi.bitmapToStream(bitmap);
    }

}