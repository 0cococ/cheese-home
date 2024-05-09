declare var WorkerApi: any
import { WorkerUtils } from "types";
export default class worker {
    constructor() {
    }

    public static createAsync(path: string,paths:string): Promise<WorkerUtils> {
        return WorkerApi.createAsync(path, paths);
    }

    public static create(path: string,paths:string): WorkerUtils {
        return WorkerApi.create(path, paths);
    }

}