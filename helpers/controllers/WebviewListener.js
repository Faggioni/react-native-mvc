/*
 *
 */
const patters = {
    signature: "signature_completed=true"
};

class WebviewListener{
    constructor(){
        this.patters = patters;
    }
    shouldCloseSignatureWebview(event){
        return event.url.indexOf( this.patters.signature ) > -1;
    }
}
export default WebviewListener;