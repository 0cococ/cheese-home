declare var OsApi: any
export default class os {
    constructor() {
    }

    public static readonly ROOT_DIRECTORY:File = OsApi._ROOT_DIRECTORY
    public static readonly WORKING_DIRECTORY:File = OsApi._WORKING_DIRECTORY
    public static readonly LOG_DIRECTORY:File = OsApi._LOG_DIRECTORY
    public static readonly MAIN_DIRECTORY:File = OsApi._MAIN_DIRECTORY
    public static readonly UI_DIRECTORY:File = OsApi._UI_DIRECTORY
    public static readonly ASSETS_DIRECTORY:File = OsApi._ASSETS_DIRECTORY
    public static readonly JS_DIRECTORY:File = OsApi._JS_DIRECTORY
    public static readonly JAVA_MODULE_DIRECTORY:File = OsApi._JAVA_MODULE_DIRECTORY
    public static readonly PYTHON_MODULE_DIRECTORY:File = OsApi._PYTHON_MODULE_DIRECTORY

}