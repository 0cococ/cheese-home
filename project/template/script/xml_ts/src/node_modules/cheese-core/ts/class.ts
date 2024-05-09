declare var ClassApi: any
import { List } from "types";
declare type ClassUtils = {
    clz: string;
    new: (...args:any[]) => any;
    set:(nodeName: string,name?: string)=>string
}
export default class class_ {
    constructor() {
    }

    public static getClassListAsync(packageName: string): Promise<List<string>> {
        return ClassApi.getClassListAsync(packageName);
    }

    public static getClassList(packageName: string): List<string> {
        return ClassApi.getClassList(packageName);
    }

    public static loadDexAsync(path: string): Promise<void> {
        return ClassApi.copyAsync(path);
    }

    public static loadDex(path: string): void {
        return ClassApi.copy(path);
    }

    public static hasClassAsync(className: string): Promise<boolean> {
        return ClassApi.hasClass(className);
    }

    public static hasClass(className: string): boolean {
        return ClassApi.hasClass(className);
    }

    public static findClassAsync(className: string): Promise<ClassUtils> {
        return ClassApi.findClassAsync(className);
    }

    public static findClass(className: string): ClassUtils {
        return ClassApi.findClass(className);
    }


}