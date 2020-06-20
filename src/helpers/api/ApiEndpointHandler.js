import { store } from "../../../stores/store";


class ApiEndpointHandler{
    constructor(){
        this.store = store;
    }
    getBaseUrl(){
        return this.store.getState().auth.authTenant.api_link;
    }
    getAuthUserEndpoint(){
        return 'https://api.caagcrm.com/api/auth';
    }
    getBrandsEndpoint(){
         return this.getBaseUrl() + 'fleets/brands';
    }
    getVehicleEndpoint(){
        return this.getBaseUrl() + 'fleets/vehicles/';
    }
    getReservationsEndpoint(){
        return this.getBaseUrl() + 'mobile-app/car-rental/reservations';
    }
    getReservationDetailsEndpoint(reservation){
        return this.getBaseUrl() + 'mobile-app/car-rental/reservations/' + reservation.id;
    }
    getRentalAgreementDetailsEndpoint(reservation){
        console.log(reservation);
        return this.getBaseUrl() + 'car-rental/reservations/' + reservation.id + '/rental-agreement';
    }

/*










OLD SHIT





 */
/*



    getReservationEndpoint(){
        return this.apiBaseUrl + 'mobile-app/car-rental/reservations/' + this.reservation.id;
    }
    getReservationPickupSubmitEndpoint(id){
        return this.apiBaseUrl + 'mobile-app/car-rental/reservations/'+ id + '/pickup';
    }
    getReservationReturnSubmitEndpoint(id){
        return this.apiBaseUrl + 'mobile-app/car-rental/reservations/'+ id + '/return';
    }
    getRentalAgreementScreenInitEndpoint(id){
        return this.apiBaseUrl + 'car-rental/reservations/'+ id +'/rental-agreement';
    }
    getSendContractByEmailEndpoint(id, ccEmail, clientEmail){
        if(ccEmail === '' || ccEmail === clientEmail){
            return this.apiBaseUrl + 'car-rental/reservations/'+ id +'/emails/contract';
        }else{
            return this.apiBaseUrl + 'car-rental/reservations/'+ id +'/emails/contract?email=' + ccEmail;
        }
    }
    getSendReceiptByEmailEndpoint(id){
        return this.apiBaseUrl + 'car-rental/reservations/'+ id +'/emails/contract?receipt=true';
    }
    getUploadsEndpoints(){
        return this.apiBaseUrl + 'files/upload';
    }
    getRentalAgreementSignEndpoint(id){
        return this.apiBaseUrl + 'car-rental/reservations/' + id + '/signed';
    }*/


}
export default ApiEndpointHandler;
