class ReservationModuleReducerParser {
    formatReservationDetail( reservation ) {
        return {
            ...reservation,
            locations: this.formatObjectToArray( reservation.locations ),
            vehicles: this.formatObjectToArray( reservation.vehicles ),
            appFormatData: this.formatAppDataProperty( reservation )
        }
    }

    //complete to implement when passing second param
    formatObjectToArray( apiObject, newObjectProperties = null ) {
        let properties = Object.entries( apiObject );
        return properties.map( item => {
            return {
                id: item[ 0 ],
                label: item[ 1 ]
            }
        } );
    }
    formatAppDataProperty( reservation ){
        return {
            pickUpInformation: this.formatPickupInformation(reservation)
        }

    }
    formatPickupInformation( reservation ){
        return {
            ...reservation.pickUpInformation,
            pickUpLocationLabel: this.getLocationLabelFromPickupInformation( reservation.pickUpInformation.pick_up_location_id, reservation.locations ),
            returnLocationLabel: this.getLocationLabelFromPickupInformation( reservation.pickUpInformation.return_location_id, reservation.locations )
        }
    }
    getLocationLabelFromPickupInformation(id, locationsObject){
        let locations = Object.entries(locationsObject);
        let valueToReturn = '';
        locations.forEach( (location) => {
            if(id === parseInt(location[0])){
                valueToReturn = location[1];
                return false;
            }
        });
        return valueToReturn;
    };
}

export default ReservationModuleReducerParser;