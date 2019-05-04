const filters = {
    todaysPickups: 'filter-from-mine-dashboard=today_pickups',
    todaysReturns: 'filter-from-mine-dashboard=today_returns',
    overdues: 'filter-from-mine-dashboard=overdues',
    tomorrowPickups: 'filter-from-mine-dashboard=tomorrow_pickups',
    tomorrowReturns: 'filter-from-mine-dashboard=tomorrows_returns',
    openedAgreements: 'filter-from-mine-dashboard=opened_agreements',
    pendingPayments: 'filter-from-mine-dashboard=pending_payments',
    maintenance: 'mine_filter=pending',
    carsUnderMaintenance: 'status=in_progress'
};

class ReservationFilterHandler{
    constructor(){
        this.filter = filters
    }
}
export default ReservationFilterHandler;