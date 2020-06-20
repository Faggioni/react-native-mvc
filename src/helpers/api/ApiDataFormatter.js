class ApiDataFormatter {
    constructor(){

    }
    getAuthData(email, password){
        return {
            email: email,
            password: password
        }
    }
    globalSearchFormat(globalSearchValue){
        return {
            global_filter: globalSearchValue
        }
    }
    reservationList( globalSearch, pagination, limit ){
        return {
            global_filter: globalSearch,
            page: pagination,
            limit: limit
        }
    }
}
export default ApiDataFormatter;