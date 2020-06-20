import { Sentry } from "react-native-sentry";
import { SENTRY_ENDPOINT } from "../../../config";
import { store } from '../../../stores/store';

/***
 * Sentry Report Handler
 */
class SentryHandler {
    constructor(){
        this.endpoint = SENTRY_ENDPOINT;
        this.store = store;
        this.config = {
            deactivateStacktraceMerging: true
        };
    }
    install(){
        Sentry.config(this.endpoint).install(this.config).then().catch();
    }
    setExtraContent(){
        /*
         * User Context
         */
        Sentry.setExtraContext({
            "Tenant": this.store.getState().auth.authTenant,
            "User"  : this.store.getState().auth.authUser
        });
    }
}

export default SentryHandler;