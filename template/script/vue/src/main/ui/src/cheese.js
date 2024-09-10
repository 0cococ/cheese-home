export default class cheese {
    static toAndroid(id, ...args) {
        const paramsString = args.map(arg => String(arg)).join(", ");
        return `id=${String(id)}, params={${paramsString}}`;
    }

    static number(id, ...args) {
        if (window.Android) {
          return   window.Android.number(toAndroid("id",...args))
        }
    }

    static string(id, ...args) {
        if (window.Android) {
          return  window.Android.string(toAndroid("id",...args))
        }
    }
}
