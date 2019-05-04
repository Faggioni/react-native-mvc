/**
 * Vehicle Screen Data Validator
 */
import DataValidator from './DataValidator';

const defaultLabels = {
    label: 'No Label Available',
    model: 'No Model Available',
    vin: 'No Vin Available'
};


class VehiclesValidator {
    constructor(){
        this.labels = defaultLabels;
        this.validator = new DataValidator();
    }
    getLabelLabel(label){
        return (this.validator.isEmpty(label)) ? this.labels.label : label;
    }
    getModelLabel(model){
        return (this.validator.isEmpty(model)) ? this.labels.model : model.name;
    }
    getVinLabel(vin){
        return (this.validator.isEmpty(vin)) ? this.labels.vin : vin;
    }
}
export default VehiclesValidator;
