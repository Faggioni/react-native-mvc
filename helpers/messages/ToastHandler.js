/***
 *
 */
const messages = {
    errorOnStorageLogin: 'There was an issue with for request. Please try again.'
};
import ApiErrorHandler from '../api/ApiErrorHandler';

class ToastHandler {
    constructor(){
        this.apiError = new ApiErrorHandler();
        this.messages = messages;
        this.config = {
            duration: 5000,
            position: 'bottom',
            text: 'Close',
            type: 'success',
            buttonStyles: { },
            buttonTextStyle:{ },
            textStyle: { },
            style:{  },
            buttonText: 'Close'
        };
    }
    getMessageFromApiError( errors ){
        return {
            ...this.config,
            text: this.apiError.getErrorMessage(errors),
            type: 'danger'
        }
    }
    getErrorOnSuccessfullRequest(errors, type = 'warning'){
        return {
            ...this.config,
            text: this.apiError.getErrorMessageOnSuccessfullCall(errors),
            type: type
        }
    }
    getErrorMessageOnFailedStorageOnLogin(){
        return {
            ...this.config,
            text: this.messages.errorOnStorageLogin,
            type: 'danger'
        }
    }
}

export default ToastHandler;