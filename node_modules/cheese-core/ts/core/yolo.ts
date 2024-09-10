declare var YoloApi: any
import {Bitmap, Yolov8Ncnn} from "types";
export default class yolo {
    constructor() {
    }

    public static loadYoloAsync(path: string, list: Array<String>, cpugpu: number): Promise<boolean> {
        return YoloApi.loadYoloAsync(path, list, cpugpu);
    }

    public static loadYolo(path: string, list: Array<String>, cpugpu: number): boolean {
        return YoloApi.loadYolo(path, list, cpugpu);
    }


    public static detectAsync(bitmap: Bitmap): Promise<Yolov8Ncnn["Obj"]> {
        return YoloApi.detectAsync(bitmap);
    }

    public static detect(bitmap: Bitmap): Array<Yolov8Ncnn["Obj"]> {
        return YoloApi.detect(bitmap);
    }

    public static getSpeedAsync(): Promise<number> {
        return YoloApi.getSpeedAsync();
    }

    public static getSpeed(): number {
        return YoloApi.getSpeed();
    }

    public static drawAsync(obj:Array<any>,bit:Bitmap): Promise<Bitmap> {
        return YoloApi.drawAsync(obj,bit);
    }

    public static draw(obj:Array<any>,bit:Bitmap): Bitmap {
        return YoloApi.draw(obj,bit);
    }

}