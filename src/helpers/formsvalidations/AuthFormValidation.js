/****
 * Form Validation
 */
const messages = {
    passwordError:  'Password field is required.',
    emailError:     'Email field is required.',
    regionError:    'Please select a region.',
    defaultError:   'There are some fields missing.'
};


class AuthFormValidation {
    constructor(){
        this.messages = messages;
    }
    getFormValidationError(email, password, region){
        if(region === ''){
            return this.messages.regionError;
        }else if(email === ''){
            return this.messages.emailError;
        }else if(password === ''){
            return this.messages.passwordError;
        }else{
            return this.messages.defaultError;
        }
    }
}
export default AuthFormValidation;