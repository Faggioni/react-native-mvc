/**
 *
 */


class VehicleReducerParser {
    formatVehicleList( vehicles ){
        return vehicles.map( (vehicle) => {
            const {
                id,
                vehicle_key,
                vehicle_class_id,
                vehicle_model,
                vin,
                label,
                status
            } = vehicle;
            return {
                id,
                vehicle_key,
                vehicle_class_id,
                vehicle_model,
                vin,
                label,
                status
            }
        });
    }
}
export default VehicleReducerParser;