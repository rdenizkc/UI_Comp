import { updateRecord } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class UpdateRecordFunctionCase extends LightningElement {
    /*Use-Case: Please prepare an LWc Component and update the following fields of the Case Object.
    Subject - Description - Origin
    */

    recordId = '500Hn00001bR6NxIAK';
    formData = {};

    //prepare your formData Object. 

    changeHandler(event){
       const {name,value} = event.target;
       this.formData['Id'] = this.recordId;
       this.formData[name] = value;
    }

    updateHandler(){

        const recordInput = {
            fields : this.formData
        }
        updateRecord(recordInput)
        .then(result=>{
            console.log(result);
            this.successMessage();
            this.template.querySelector('form.caseForm').reset();
            this.formData = {};
        })
        .catch(error=>{
            console.log(error);
            this.errorMessage();
        })
    }

    successMessage(){
        const showSuccessMsg = new ShowToastEvent({
            title : 'SUCCESS!!!',
            message : 'The Case record has been updated successfully!',
            variant : 'success',
            mode : 'sticky'
        });
        this.dispatchEvent(showSuccessMsg);
    }

    errorMessage(){
        const showErrorMsg = new ShowToastEvent({
            title : 'ERROR!!!',
            message : 'The Case record has NOT been updated. Please check your error!',
            variant : 'error',
            mode : 'sticky'
        });
        this.dispatchEvent(showErrorMsg);
    }

    infoMessage(){
        const showInfoMsg = new ShowToastEvent({
            title : 'INFORMATION!',
            message : 'The Case record updating process has been cancelled. The contact record has NOT been updated!',
            variant : 'info',
            mode : 'pester'
        });
        this.dispatchEvent(showInfoMsg);
    }

}