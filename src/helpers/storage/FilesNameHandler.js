/*
 * Files Naming
 */

import moment from 'moment';

class FilesNameHandler {
    constructor(id){
        this.timeStamp = moment();
        this.reservationNumber = id;
    }
    getReservationCameraImagesName(){
        return 'reservation_' + this.reservationNumber + '_' + this.timeStamp.format() + '.jpg';
    }
    getReservationSignatureName(){
        return 'reservation_' + this.reservationNumber + '_' + this.timeStamp.format() + '.png';
    }
}
export default FilesNameHandler;
