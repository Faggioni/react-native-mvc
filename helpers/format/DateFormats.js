import moment from 'moment';
import { store } from '../../../stores/store';

class DateFormats{
    constructor(){
        this.store = store;
    }
    getSystemDateFormat(){
        return this.store.getState().auth.authSettings.date_format;
    }
    getMomentFormat(){
        return this.store.getState().auth.authSettings.date_format_moment; 
    }
    getFullDateOnReservationsScreens(date){
        return moment(date, 'YYYY-MM-DD HH:mm:ss').format(this.getMomentFormat());
    }
    getHourFormat(){
        return this.getMomentFormat().split(" ")[1];
    }
    getDateFormat(){
        return this.getMomentFormat().split(" ")[0];
    }
    getTimeFromReservationDate(date){
        return moment(date, 'YYYY-MM-DD HH:mm:ss').format(this.getMomentFormat()).split(" ")[1];
    }
    getDateFromReservationDate(date){
        return moment(date, 'YYYY-MM-DD HH:mm:ss').format(this.getMomentFormat()).split(" ")[0];
    }
    getDateTimeToSubmit(date){
        return moment(date, this.getMomentFormat()).format("YYYY-MM-DD HH:mm");
    }
    getDateToSubmit(date){
        return moment(date, this.getMomentFormat()).format("YYYY-MM-DD");
    }
    getTimeToSubmit(date){
        return moment(date, this.getMomentFormat()).format("HH:mm");
    }
    getMeridianFormat(date){
        return date.replace("AM", "am").replace("PM","pm");
    }

}
export default DateFormats;
