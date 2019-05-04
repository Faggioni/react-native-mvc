/*
 * Validator Field Class
 */

class Validator {
    getCleanField(field) {
        return (((field) === undefined || (field) === null) ? 'Invalid Field' : field);
    }
    
    getEmail(object) {
        return (((object) === undefined || (object) === null) ? 'Invalid Field' : object.email);
    }
    
    getLabel(object) {
        return (((object) === undefined || (object) === null) ? 'Invalid Field' : object.label);
    }
    
    getOdometerFieldPickup(object) {
        return (((object.fuel_level_pick_up) === undefined || (object.fuel_level_pick_up) === null) ? '' : String(object.fuel_level_pick_up));
    }
    getOdometerFieldReturn(object) {
        return (((object.fuel_level_return) === undefined || (object.fuel_level_return) === null) ? '' : String(object.fuel_level_return));
    }
    isNullList(list){
        return (list === null) || (list === undefined) || (list.length === 0);
    }
}

export default Validator;
