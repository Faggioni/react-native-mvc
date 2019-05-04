/**
 * PDF Url Helper
 */


class PdfUrlHelper{
    constructor(){
        this.basrUrl = 'https://docs.google.com/gview?embedded=true&url=';
    }
    getGoogleViewerUrl(url){
        return this.basrUrl + url;
    }
}
export default PdfUrlHelper;