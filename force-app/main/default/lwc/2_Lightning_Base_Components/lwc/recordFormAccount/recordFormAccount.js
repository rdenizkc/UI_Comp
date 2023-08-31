import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import RATING_FIELD from '@salesforce/schema/Account.Rating';

export default class RecordFormAccount extends LightningElement {

    /* Display the following Account Object fields in Record Form
        Name,
        Type,
        Industry,
        Annual Revenue
        Rating
    */

    testMessage;
    objectName = ACCOUNT_OBJECT;
    recordId='0018d00000jGRmYAAW';
    /* @api recordId; 
    In order to grab the record id from each account's record page. We need to decorate our recordId property with @api decorator. Remember to import this once you use it.
    */
    fields = [NAME_FIELD,TYPE_FIELD,INDUSTRY_FIELD,ANNUAL_REVENUE_FIELD,RATING_FIELD];
    

    showSuccessMessage(){
        this.testMessage="This is a sample text message to show the affect of onSuccess attribute in Lightning Record Form."
        //Lets add our showToast MEssage here so when the record is being saved this will be fired up and the message will be displayed on op of my page.
        const successToastMsg = new ShowToastEvent({
            title : 'SUCCESS!!!',
            message : 'The Account record has been saved successfully!!!',
            variant : 'success',
            mode :'sticky'
        });
        this.dispatchEvent(successToastMsg);
    }

    showErrorMessage(){
        const errorToastMsg = new ShowToastEvent({
            title : 'ERROR!!!',
            message : 'An error has occurred while saving the record. Please check your validation rules',
            variant : 'error',
            mode : 'sticky'
        });
        this.dispatchEvent(errorToastMsg);
    }

    showLoadMessage(){
        const loadToastMsg = new ShowToastEvent({
            title : 'PAGE IS LOADING!!!',
            message : 'Please wait! The page is being loading....',
            variant : 'warning',
            mode :'pester'
        });
        this.dispatchEvent(loadToastMsg);
    }

    showSubmitMessage(){

        const submitToastMsg = new ShowToastEvent({
            title : 'SUBMITTED!!!',
            message : 'Your page records have been submitted!',
            variant : 'info',
            mode : 'sticky'
        });
        this.dispatchEvent(submitToastMsg);
    }
}