/**
 * Data Transformation from Api
 *
 */

class ReservationsTransformer{
    getVehicleFromVehiclesObject(vehicleId, vehiclesObject){
        let vehicles = Object.entries(vehiclesObject);
        let valueToReturn = '';
        vehicles.forEach( (vehicle) => {
            if(vehicleId === parseInt(vehicle[0])){
                valueToReturn = vehicle[1];
                return false;
            }
        });
        return valueToReturn;
    }
    getVehicleFromVehiclesObjectSubmit(vehicleId, vehiclesObject){
        let vehicles = Object.entries(vehiclesObject);
        let valueToReturn = '';
        vehicles.forEach( (vehicle) => {
            if(parseInt(vehicleId) === parseInt(vehicle[0])){
                valueToReturn = vehicle[1];
                return false;
            }
        });
        return valueToReturn;
    }
    getVehicleListFromObject(vehicles){
        let newVehicles  = Object.entries(vehicles);
        let returnData = [];
        newVehicles.map( item => {
               if(item[0] !== ""){
                   returnData.push( item )
               }
        });
        return returnData;
    }
}
export default ReservationsTransformer;