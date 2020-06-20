/**
 * External Links Triggers
 */
import { Linking } from 'react-native';

const links = {
    hqWebsite:  'https://hqrentalsoftware.com/#free-trial'
};

class ExternalLinkerHandler {
    constructor(){
        this.links = links;
    }
    openHQWebsite(){
        Linking.openURL(this.links.hqWebsite);
    }
}
export default ExternalLinkerHandler;
