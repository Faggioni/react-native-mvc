import { Actions } from "react-native-router-flux";

class CameraHandler{

    takeAPicture = async function(camera){
        try{
            if (camera) {
                const options = { quality: 0.35, base64: true, width: 1280 };
                const data = await this.camera.takePictureAsync(options);
                let nameHandler = new FilesNameHandler(this.props.reservation.price.reservation.id);
                if(this.props.pickup === true){
                    var photoData = {
                        filename: nameHandler.getReservationCameraImagesName(),
                        file_content_base64: data.base64,
                        item_id: this.props.reservation.price.reservation.id,
                        item_type : 'car_rental.reservations_pickup'
                    };
                }else if(this.props.return === true){
                    var photoData = {
                        filename: nameHandler.getReservationCameraImagesName(),
                        file_content_base64: data.base64,
                        item_id: this.props.reservation.price.reservation.id,
                        item_type : 'car_rental.reservations_return',
                    };
                }
                this.props.reservationModuleSetActivePickupReturnImage(photoData);
                Actions.reservationPickupReturnPreviewImageScreen();
            }
        }catch(error){
        }
    };
}
export default CameraHandler;