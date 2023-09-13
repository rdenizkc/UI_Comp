import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import ACCOUNT_NUMBER_FIELD from '@salesforce/schema/Account.AccountNumber';
import RATING_FIELD from '@salesforce/schema/Account.Rating';


export default class AccountDisplay_lightning_record_form extends LightningElement {

    objectApiName=ACCOUNT_OBJECT;
    recordId='0018d00000jGRmYAAW';
    fields=[
        NAME_FIELD,
        TYPE_FIELD,
        INDUSTRY_FIELD,
        ANNUALREVENUE_FIELD,
        ACCOUNT_NUMBER_FIELD,
        RATING_FIELD];
msg;
        successMsg(){
           const successToastMsg= new ShowToastEvent({
            title :'SUCCESS',
            message : 'The Account record has been saved successfully!!!',
            variant:'success',
            mode:'sticky'
           });

           this.dispatchEvent(successToastMsg);

        }
        errorMsg(){
            const errorToastMsg= new ShowToastEvent({
                title:'ERROR',
                message:'An error has occurred while saving the record.',
                variant:'error',
                mode:'pester',
            })
this.dispatchEvent(errorToastMsg);
        }

}