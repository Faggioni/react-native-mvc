

/**
 * Data Validator
 */


class DataValidator {

    isEmpty(data){
        return (data === null)
            || (data === undefined)
            || (data.length === 0)
            || (data === '');
    }
    isEmptyVehicle(vehicle){
        return (vehicle === null) && (vehicle === undefined) ? '' : vehicle.id;
    }
}
export default DataValidator;