


class ReservationOptionsHandler {
    constructor(){
        this.status = {
            quote:          'quote',
            open:           'open',
            rental:         'rental',
            completed:      'completed',
            cancelled:      'cancelled',
            cancelledPaid:  'cancelled-paid',
            noShow:         'no-show',
            noShowPaid:     'no-show-paid',
            pending:        'pending'
        };
    }

    reservationInactive(reservationStatus){
        return ( reservationStatus === this.status.cancelled ||
            reservationStatus === this.status.cancelledPaid ||
            reservationStatus === this.status.noShow ||
            reservationStatus === this.status.noShowPaid ||
            reservationStatus === this.status.pending ||
            reservationStatus === this.status.quote
        );
    }
    reservationCantMakePickup(reservationStatus){
        return this.reservationInactive(reservationStatus);
    }
    reservationCantMakeAgreement(reservationStatus){
        return this.reservationInactive(reservationStatus);
    }
    reservationCantMakeReturn(reservationStatus){
        return (
            (this.reservationInactive(reservationStatus)) ||
            (reservationStatus === this.status.open)
        );
    }
}
export default ReservationOptionsHandler;