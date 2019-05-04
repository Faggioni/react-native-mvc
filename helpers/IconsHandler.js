/*
 * Icons Name Handler
 */
const exceptions = [
    'power-off'
];

class IconsHandler{
    constructor(){
        this.icon = '';
        this.exceptions = exceptions;
    }
    isException(icon){
        return this.exceptions.includes(icon);
    }
    getIconName(icon){
        if(this.isException(icon)){
            return icon;
        }else{
            return icon.split('-').pop();
        }

    }
}
export default IconsHandler;