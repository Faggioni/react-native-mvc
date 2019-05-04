class ReservationModuleLinks{
    getBrandUrl(brand){
        return 'https://miguel-cars-services.caagcrm.com/public/car-rental/reservations/step1?new=1&brand=' + brand.uuid;
    }
}
export default ReservationModuleLinks;