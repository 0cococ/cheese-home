declare var ImagesApi: any
import { Bitmap,IntArray } from "types";
export default class Images {
    constructor() {
    }

    public static findImgBySiftAsync(inputImage: Bitmap, targetImage: Bitmap, threshold: number): Promise<IntArray> {
        return ImagesApi.findImgBySiftAsync(inputImage,targetImage,threshold);
    }

    public static findImgBySift(inputImage: Bitmap, targetImage: number, threshold: number): IntArray {
        return ImagesApi.findImgBySift(inputImage,targetImage,threshold);
    }
    public static findImgByOBRAsync(inputImage: Bitmap, targetImage: Bitmap, threshold: number): Promise<IntArray> {
        return ImagesApi.findImgByOBRAsync(inputImage,targetImage,threshold);
    }

    public static findImgByOBR(inputImage: Bitmap, targetImage: number, threshold: number): IntArray {
        return ImagesApi.findImgByOBR(inputImage,targetImage,threshold);
    }
}