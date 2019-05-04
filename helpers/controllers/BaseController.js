/***
 * Base Controller Class
 * Should be take as a MVC Controller
 */
import { store } from '../../../stores/store';
import ApiConnector from '../api/ApiConnector';
import TypeManage from './TypeManager';
import StorageManager from '../storage/StorageManager';
import ApiConfigurationManager from "./ApiConfigurationManager";
import ToastHandler from "../messages/ToastHandler";
import { Toast } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Linking } from 'react-native';
import WebviewListener from "./WebviewListener";

class BaseController{
    constructor(){
        this.store = store;
        this.connector = new ApiConnector();
        this.types = new TypeManage();
        this.storage = new StorageManager();
        this.apiConfig = new ApiConfigurationManager();
        this.toaster = new ToastHandler();
        this.toast = Toast;
        this.router = Actions;
        this.linker = Linking;
        this.webviewListener = new WebviewListener();
    }
    openURL(url){
        if(this.linker.canOpenURL(url)){
            this.linker.openURL(url);
        }
    }
}
export default BaseController;