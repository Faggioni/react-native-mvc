/*
 * Api Configuration Manager
 */

import ApiEndpointHandler from '../api/ApiEndpointHandler';
import ApiDataFormatter from "../api/ApiDataFormatter";
import { store } from '../../../stores/store';

class ApiConfigurationManager {
    constructor() {
        this.endpoints = new ApiEndpointHandler();
        this.formatter = new ApiDataFormatter();
        this.store = store;
    }

    /*
     * By Default All Calls are on get method -> Fix comment
     */
    getAuthHeader() {
        return { "Authorization": 'Basic ' + this.store.getState().auth.authTenant.encoded_token };
    }

    getAuthConfiguration( email, password ) {
        return {
            url: this.endpoints.getAuthUserEndpoint(),
            method: 'post',
            data: this.formatter.getAuthData( email, password )
        };
    }

    getBrandsConfiguration() {
        return {
            url: this.endpoints.getBrandsEndpoint(),
            headers: this.getAuthHeader(),
            method: 'get'
        };
    }

    getVehiclesConfig( globalSearchValue = null ) {
        if ( globalSearchValue ) {
            return {
                url: this.endpoints.getVehicleEndpoint(),
                headers: this.getAuthHeader(),
                method: 'get',
                params: this.formatter.globalSearchFormat( globalSearchValue )
            };
        } else {
            return {
                url: this.endpoints.getVehicleEndpoint(),
                headers: this.getAuthHeader(),
                method: 'get'
            };
        }
    }
    getReservationsListConfig( globalSearchValue = '', pagination = '1', limit = '25' ){
        return {
            url: this.endpoints.getReservationsEndpoint(),
            headers: this.getAuthHeader(),
            method: 'get',
            params: this.formatter.reservationList(globalSearchValue, pagination, limit )
        }
    }
    getReservationDetailsConfig( reservation ){
        return {
            url: this.endpoints.getReservationDetailsEndpoint( reservation ),
            headers: this.getAuthHeader(),
            method: 'get',
        }
    }
    getRentalAgreementConfig( reservation ){
        return {
            url: this.endpoints.getRentalAgreementDetailsEndpoint( reservation ),
            headers: this.getAuthHeader(),
            method: 'get'
        }
    }

}

export default ApiConfigurationManager;