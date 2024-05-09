declare var XmlApi: any
import {View, Callback} from "types";
export default class Xml {
    constructor() {
    }

    public static parseXmlAsync(path:string): Promise<View> {
        return XmlApi.parseXmlAsync(path);
    }

    public static parseXml(path:string): View {
        return XmlApi.parseXml(path);
    }

    public static startActivityAsync(activityId:string,iActivity: Callback): Promise<void> {
        return XmlApi.startActivityAsync(activityId,iActivity);
    }

    public static startActivity(activityId:string,iActivity: Callback): void {
       return  XmlApi.startActivity(activityId,iActivity);
    }

    public static getIDAsync(id:string): Promise<number> {
        return XmlApi.getIDAsync(id);
    }

    public static getID(id:string): number {
        return  XmlApi.getID(id);
    }

}