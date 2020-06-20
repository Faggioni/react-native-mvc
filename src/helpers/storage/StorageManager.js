/***
 * Async Storage Handler
 */
import { AsyncStorage } from "react-native";
import { store } from '../../../stores/store';

const names = {
    authState : 'HQRentalsAuthState'
};



class StorageManager {
    constructor(){
        this.names = names;
        this.store = store;
    }

    /**
     * setAuthData
     * Add to Storage Auth State
     * @param data
     * @returns {Promise<*>}
     */
    setAuthState = async ( data = null ) => {
        try {
            return await AsyncStorage.setItem( this.names.authState  , JSON.stringify( this.store.getState().auth ) );
        } catch (error) {
            return error.message;
        }
    };

    getAuthState = async () => {
        try {
            const value = await AsyncStorage.getItem( this.names.authState );
            return value !== null ? (JSON.parse(value) ) : null;
        } catch (error) {
            return null;
        }
    };




    getBrandsData = async () => {
        try {
            const value = await AsyncStorage.getItem( this.names.authBrandsName );
            return value !== null ? (JSON.parse(value) ) : null;
        } catch (error) {
            return null;
        }
    };
    deleteBrandsData = async () => {
        try {
            return await AsyncStorage.removeItem( this.names.authBrandsName );
        } catch (error) {
            return null;
        }
    };



    deleteAuthData= async ( data ) => {
        try {
            return await AsyncStorage.removeItem( this.names.authUserName, JSON.stringify( data ) );
        } catch (error) {
            return error.message;
        }
    };
}
export default StorageManager;