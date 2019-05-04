/***
 * Types Manager
 */
import appTypes from '../../app/actions/types';
import authTypes from '../../auth/actions/types';
import vehiclesTypes from '../../vehicles/actions/types';
import reservationModuleTypes from '../../reservations/actions/types';


class TypeManager {
    constructor(){
        this.appTypes = appTypes;
        this.authTypes = authTypes;
        this.vehicleTypes = vehiclesTypes;
        this.reservationTypes = reservationModuleTypes;
    }
}
export default TypeManager;