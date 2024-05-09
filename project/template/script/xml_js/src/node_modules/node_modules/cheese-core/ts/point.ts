declare var PointApi: any
export default class point {
    constructor() {
    }

    public static swipeToPointAsync(sx: number, sy: number, ex: number, ey: number, dur: number): Promise<boolean> {
        return PointApi.swipeToPointAsync(sx, sy, ex, ey, dur);
    }

    public static swipeToPoint(sx: number, sy: number, ex: number, ey: number, dur: number): boolean {
        return PointApi.swipeToPoint(sx, sy, ex, ey, dur);
    }
    public static clickPointAsync(x: number, y: number): Promise<boolean> {
        return PointApi.clickPointAsync(x,y);
    }

    public static clickPoint(x: number, y: number): boolean {
        return PointApi.clickPoint(x,y);
    }

    public static longClickPointAsync(x: number, y: number): Promise<boolean> {
        return PointApi.longClickPointAsync(x,y);
    }

    public static longClickPoint(x: number, y: number): boolean {
        return PointApi.longClickPoint(x,y);
    }

    public static touchDownAsync(x: number, y: number): Promise<boolean> {
        return PointApi.touchDown(x,y);
    }

    public static touchDown(x: number, y: number): boolean {
        return PointApi.touchDown(x,y);
    }
    public static touchMoveAsync(x: number, y: number): Promise<boolean> {
        return PointApi.touchMove(x,y);
    }

    public static touchMove(x: number, y: number): boolean {
        return PointApi.touchMove(x,y);
    }

    public static touchUpAsync(): Promise<boolean> {
        return PointApi.touchUpAsync();
    }

    public static touchUp(): boolean {
        return PointApi.touchUp();
    }

}