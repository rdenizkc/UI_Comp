import { LightningElement, api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import CASE_OBJECT from '@salesforce/schema/Case';

import ACCOUNT_FIELD from '@salesforce/schema/Case.AccountId';
import CONTACT_FIELD from '@salesforce/schema/Case.ContactId';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';
import STATUS_FIELD from '@salesforce/schema/Case.Status';
import DESCRIPTION_FIELD from '@salesforce/schema/Case.Description';
import ORIGIN_FIELD from '@salesforce/schema/Case.Origin';

export default class CaseReadOnly_EditFields extends LightningElement {
    objectName = CASE_OBJECT;
    recordId = '5008d00000XlqDpAAJ';

    account = ACCOUNT_FIELD;
    contact = CONTACT_FIELD;
    subject = SUBJECT_FIELD;
    priority = PRIORITY_FIELD;
    status = STATUS_FIELD;
    description = DESCRIPTION_FIELD;
    origin = ORIGIN_FIELD;


    successMsg(){
const showSuccess= new ShowToastEvent({
    title:'SUCCESS!!',
    message:'congrat!!',
    variant:'success',
    mode:'sticky'
})
this.dispatchEvent(showSuccess);
    } 

    errorMsg(){
const showerror= new ShowToastEvent({
    title:'ERROR!!',
    message:'ERROR!!',
    variant:'error',
    mode:'sticky'
})
this.dispatchEvent(showerror);
    } 
}
