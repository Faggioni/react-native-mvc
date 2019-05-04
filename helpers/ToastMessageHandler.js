/*
    Toast Properties
    text	-	string	Text content to be shown in the toast
    textStyle	-	-	Style text content for toast
    buttonText	-	string, blank	Text to be displayed inside the button
    buttonTextStyle	-	-	Style button text for toast
    buttonStyle	-	-	Style button for toast
    position	bottom	top, bottom	Sets position for the toast
    type	-	danger, success, warning - Sets context to the Toast
    duration	1500	user defined (integer)	Milliseconds after which Toast disappers
    onClose	-	function	Called just before the toast hides
 */





/*
 * Constant Messages
 */

const messages = {
    returnOnOpenStatus: 'Please. Complete Pickup First',
    successPickupSubmitMessage: 'The Reservation was Properly Saved',
    communicationErrorMessage: 'Communication Error. Please Try Again',
    successPickupReturnPhotoSubmitMessage: 'The Image was properly Saved!',
    successRentalAgreementSignatureSubmitMessage: 'The Signature of the Client was properly Saved! ',
    reservationInactive: 'This Reservation Seems to be Inactive',
    reservationCantMakePickup: 'The Reservation Has to be on Open Status to Make Pickup',
    reservationCantMakeAgreement: 'Reservation has to be on Rental status to register a Return',
    reservationCantMakeReturn: 'Reservation has to be on Rental status to register a Return',
    successSendRentalAgreementMessage: 'The Rental Agreement was Sent',
    failedSendRentalAgreementMessage: 'The Rental Agreement was not Sent, please try again',
    successSendRentalAgreementReceiptMessage: 'The Rental Agreement receipt was Sent',
    failedSendRentalAgreementReceiptMessage: 'The Rental Agreement receipt was not Sent, please try again',
    failedLogoutMessage: 'There was a problem login out from the app. Please try again'
};
const buttonText = {
    success: 'Okay!',
    danger: 'Got it!'
};
import ReservationOptionsHandler from './ReservationOptionsHandler';

class ToastMessageHandler{
    constructor(){
        this.messages = messages;
        this.messageConfigObject = {
            position: 'bottom',
            duration: 3000
        };
        this.reservationOptions = new ReservationOptionsHandler();
    }
    getReservationPickupAttemptMessage(status){
        if(this.reservationOptions.reservationInactive(status)){
            this.messageConfigObject.text = this.messages.reservationInactive;
            this.messageConfigObject.type = 'warning';
            return this.messageConfigObject;
        }else if(this.reservationOptions.reservationCantMakePickup(status)){
            this.messageConfigObject.text = this.messages.reservationCantMakePickup;
            this.messageConfigObject.type = 'warning';
            return this.messageConfigObject;
        }
    }
    getReservationAgreementAttemptMessage(status){
        if(this.reservationOptions.reservationInactive(status)){
            this.messageConfigObject.text = this.messages.reservationInactive;
            this.messageConfigObject.type = 'warning';
            return this.messageConfigObject;
        }else if(this.reservationOptions.reservationCantMakeAgreement(status)){
            this.messageConfigObject.text = this.messages.reservationCantMakeAgreement;
            this.messageConfigObject.type = 'warning';
            return this.messageConfigObject;
        }
    }
    getReservationReturnAttemptMessage(status){
        if(this.reservationOptions.reservationInactive(status)){
            this.messageConfigObject.text = this.messages.reservationInactive;
            this.messageConfigObject.type = 'warning';
            return this.messageConfigObject;
        }else if(this.reservationOptions.reservationCantMakeReturn(status)){
            this.messageConfigObject.text = this.messages.reservationCantMakeReturn;
            this.messageConfigObject.type = 'warning';
            return this.messageConfigObject;
        }
    }
    getReturnOnOpenStatusMessage(){
        this.messageConfigObject.text = this.messages.returnOnOpenStatus;
        this.messageConfigObject.type = 'warning';
        return this.messageConfigObject;
    }
    getPickupSubmitSuccessMessage(){
        this.messageConfigObject.type = 'success';
        this.messageConfigObject.text = this.messages.successPickupSubmitMessage;
        return this.messageConfigObject;
    }
    getReturnSubmitSuccessMessage(){
        this.messageConfigObject.type = 'success';
        this.messageConfigObject.text = this.messages.successPickupSubmitMessage;
        return this.messageConfigObject;
    }
    getErrorCustomMessage(message){
        this.messageConfigObject.type = 'danger';
        this.messageConfigObject.text = message;
        return this.messageConfigObject;
    }
    getSuccessCustomMessage(message){
        this.messageConfigObject.type = 'success';
        this.messageConfigObject.description = message;
        return this.messageConfigObject;
    }
    getCommunicationErrorMessage(){
        this.messageConfigObject.type = 'danger';
        this.messageConfigObject.text = this.messages.communicationErrorMessage;
        return this.messageConfigObject;
    }
    getPickupSubmitSuccessMessageOnSaveImage(){
        this.messageConfigObject.type = 'success';
        this.messageConfigObject.text = this.messages.successPickupReturnPhotoSubmitMessage;
        return this.messageConfigObject;
    }
    getPickupSubmitSuccessMessageOnSaveSignature(){
        this.messageConfigObject.type = 'success';
        this.messageConfigObject.text = this.messages.successRentalAgreementSignatureSubmitMessage;
        return this.messageConfigObject;
    }
    getSendRentalAgreementByEmailSuccessMessage(){
        this.messageConfigObject.type = 'success';
        this.messageConfigObject.text = this.messages.successSendRentalAgreementMessage;
        return this.messageConfigObject;
    }
    getSendRentalAgreementByEmailFailedMessage(){
        this.messageConfigObject.type = 'danger';
        this.messageConfigObject.text = this.messages.failedSendRentalAgreementMessage;
        return this.messageConfigObject;
    }
    getSendRentalAgreementReceiptByEmailSuccessMessage(){
        this.messageConfigObject.type = 'success';
        this.messageConfigObject.text = this.messages.successSendRentalAgreementReceiptMessage;
        return this.messageConfigObject;
    }
    getSendRentalAgreementReceiptByEmailFailedMessage(){
        this.messageConfigObject.type = 'danger';
        this.messageConfigObject.text = this.messages.failedSendRentalAgreementReceiptMessage;
        return this.messageConfigObject;
    }
    getErrorOnLogoutMessage(){
        this.messageConfigObject.type = 'danger';
        this.messageConfigObject.text = this.messages.failedLogoutMessage;
        return this.messageConfigObject;
    }
}
export default ToastMessageHandler;
