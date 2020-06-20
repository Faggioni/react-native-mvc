

class ReservationPickupParser{
    formatPickupFormData(){
        return {
            vehicle_id: '',
            pick_up_location_id: '',
            fuel_level_pick_up: '',
            odometer_pick_up: '',
            pick_up_date_date: '',
            pick_up_date_time: '',
            recalculate_rates: '0'
        }
    }
    formatDateToForm(date){
        const dateArray = date.split(' ');
        return {
            date: date,
            date_date: dateArray[0],
            date_time: dateArray[1]
        }
    }
    formatRecalculate(newRecalculate){
        if(newRecalculate === '0'){
            return {
                recalculateRateChecked: true,
                recalculate_rates: '1'
            }
        }else if(newRecalculate === '1'){
            return {
                recalculateRateChecked: false,
                recalculate_rates: '0'
            };
        }
    }
}
export default ReservationPickupParser;