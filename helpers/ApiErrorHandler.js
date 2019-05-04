const messages = {
    noResponseReceived: 'No Response was Received',
    configError: 'There was a problem getting the Information',
    problemWithTheRequest: 'Something went wrong',
    emptyTenantFieldError: 'Tenant Field Is Required',
    wrongTenantName: 'Incorrect tenant name',
    communicationErrorMessage: 'Communication Error'
};

class ApiErrorHandler{
    constructor(error){
        this.error = error;
        this.messages = messages;
    }
    getOnEmptyTenantFieldError(){
        return this.messages.emptyTenantFieldError;
    }
    getErrorFromWrongTenantName(){
        if(this.error.status_code === 500){
            return this.messages.wrongTenantName;
        }else{
            return this.messages.problemWithTheRequest
        }
    }
    getErrorFromWrongUserLogin(){
        if (this.error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx

            if(this.error.response.status === 500){
                return this.messages.wrongTenantName;
            }else{
                return this.messages.problemWithTheRequest;
            }
        } else if (this.error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            return this.messages.communicationErrorMessage;
        } else {
            // Something happened in setting up the request that triggered an Error
            return this.messages.configError;
        }
    }
    getError(){
        if (this.error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx

            if(this.error.response.status === 500){
                return this.messages.wrongTenantName;
            }else{
                return this.messages.problemWithTheRequest;
            }
        } else if (this.error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            return this.messages.communicationErrorMessage;
        } else {
            // Something happened in setting up the request that triggered an Error
            return this.messages.configError;
        }
    }
    getErrorMessagesOnAPiError(error) {

        if (this.error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            //console.log(error.response.data);
            return this.messages.communicationErrorMessage;
        } else if (this.error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            return this.messages.communicationErrorMessage;
        } else {
            // Something happened in setting up the request that triggered an Error
            return this.messages.configError;
        
        }
    }
    getErrorFromUnsuccessApiCall(response){
        return Object.entries(response.data.errors)[0][1][0];
    }
}
export default ApiErrorHandler;
