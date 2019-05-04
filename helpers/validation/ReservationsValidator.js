
/**
 * Validation Class
 */

import DataValidator from './DataValidator';

class ReservationsValidator{
    constructor(){
        this.dataValidator = new DataValidator();
    }
    getReservationId(reservation){
        if((! this.dataValidator.isEmpty(reservation.prefixed_id) )&& (reservation.id !== reservation.prefixed_id) ){
            return reservation.prefixed_id;
        }else{
            return '# ' + reservation.id;
        }
    }
    getReservationIdFromReservationList(reservation){
        if((! this.dataValidator.isEmpty(reservation.prefixed_id)) && (reservation.id !== reservation.prefixed_id) ){
            return reservation.prefixed_id;
        }else{
            return '# ' + reservation.id;
        }
    }
    isEmpty(data){
        return this.dataValidator.isEmpty(data);
    }
}
export default ReservationsValidator;

