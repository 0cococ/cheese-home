declare var ColorsApi: any
import { Bitmap,IntArray } from "types";
export default class Colors {
    constructor() {
    }

    public static getRgbAsync(bitmap: Bitmap, x: number, y: number): Promise<IntArray> {
        return ColorsApi.getRgbAsync(bitmap, x,y);
    }

    public static getRgb(bitmap: Bitmap, x: number, y: number): IntArray {
        return ColorsApi.getRgb(bitmap, x,y);
    }

}