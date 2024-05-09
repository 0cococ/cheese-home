declare var UiNodeApi: any
import { Callback } from "types";
type uiObj = {
    text: (text:string) => uiObj;
    _text: string;

    _id: string;
    id: (text:string) => uiObj;

    desc: (text:string) => uiObj;
    _desc: string;

    clz: (text:string) => uiObj;
    _clz: string;

    pkg: (text:string) => uiObj;
    _pkg: string;

    bounds: (text:string) => uiObj;
    _bounds: string;

    isClickable: (text:string) => uiObj;
    _isClickable: boolean;

    and: boolean;
    or: boolean;
};
export default class uinode {
    uiobj: uiObj;
    public obj: any | null;
    public length: any | null;
    constructor() {
        this.obj = null; this.length = 0;
    }
    find(value: number = 0): boolean {
        return this.obj !== null && this.obj !== undefined && this.obj !== "null" && this.obj.length > 0 && this.obj.length >= value + 1;
    }
    get(value: number, name: string,...args:string[]):string {
        return UiNodeApi.get(this.obj[value],name,args);
    }
    getText(value: number=0): string {
        return this.get(value, "getText")[0].split("~")[1];
    }
    getId(value: number=0): string {
        return this.get(value, "getId")[0].split("~")[1];
    }

    getDesc(value: number=0): string {
        return this.get(value, "desc")[0].split("~")[1];
    }

    getPkg(value: number=0): string {
        return this.get(value, "getPackageName")[0].split("~")[1];
    }

    getClz(value: number=0): string {
        value =value|| 0
        return this.get(value, "getClassName")[0].split("~")[1];
    }

    getBounds(value: number=0): string {
        return this.get(value, "getBounds")[0].split("~")[1];
    }
    getParent(value: number=0): this {
        this.obj =this.get(value, "getParent");
        return this
    }
    getChildren(value: number=0): this {
        this.obj =this.get(value, "getChildren");
        return this
    }
    static clearNodeCacheAsync(): Promise<boolean> {
        return UiNodeApi.clearNodeCacheAsync();
    }

    static clearNodeCache(): boolean {
        return UiNodeApi.clearNodeCache();
    }

     forEachNodeAsync(callback:Callback): Promise<this> {
         return new Promise((resolve, reject) => {
             try {
                 UiNodeApi.forEachNodeAsync(callback)
                     .then(data => {
                         this.obj = data;
                         this.length=this.obj.length
                         resolve(this);
                     })
                     .catch(reject);
             } catch (error) {
                 reject(error);
             }
         });
    }

     forEachNode(callback:Callback): this {
         this.obj =UiNodeApi.forEachNode(callback)
         this.length=this.obj.length
         return this;
    }

     clickAsync(value: number=0): Promise<boolean> {
        return UiNodeApi.clickAsync(this.obj[value]);
    }

     click(value: number=0): boolean {
        return UiNodeApi.click(this.obj[value]);
    }

    globalLongClickAsync(value: number=0): Promise<boolean> {
        return UiNodeApi.globalLongClickAsync(this.obj[value]);
    }

    globalLongClick(value: number=0): boolean {
        return UiNodeApi.globalLongClick(this.obj[value]);
    }

    globalClickAsync(value: number=0): Promise<boolean> {
        return UiNodeApi.globalClickAsync(this.obj[value]);
    }

    globalClick(value: number=0): boolean {
        return UiNodeApi.globalClick(this.obj[value]);
    }
    longClickAsync(value: number=0): Promise<boolean> {
        return UiNodeApi.longClickAsync(this.obj[value]);
    }

    longClick(value: number=0): boolean {
        return UiNodeApi.longClick(this.obj[value]);
    }
    doubleClickAsync(value: number=0): Promise<boolean> {
        return UiNodeApi.doubleClickAsync(this.obj[value]);
    }

    doubleClick(value: number=0): boolean {
        return UiNodeApi.doubleClick(this.obj[value]);
    }

    tryLongClickAsync(value: number=0): Promise<boolean> {
        return UiNodeApi.tryLongClickAsync(this.obj[value]);
    }

    tryLongClick(value: number=0): boolean {
        return UiNodeApi.tryLongClick(this.obj[value]);
    }


    tryClickAsync(value: number=0): Promise<boolean> {
        return UiNodeApi.tryClickAsync(this.obj[value]);
    }

    tryClick(value: number=0): boolean {
        return UiNodeApi.tryClick(this.obj[value]);
    }

}