import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELDS from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELDS from '@salesforce/schema/Contact.LastName';
import ACCOUNTID_FIELDS from '@salesforce/schema/Contact.AccountId';
import TITLE_FIELDS from '@salesforce/schema/Contact.Title';
import EMAIL_FIELDS from '@salesforce/schema/Contact.Email';
import PHONE_FIELDS from '@salesforce/schema/Contact.Phone';
import DEPARTMAN_FIELDS from '@salesforce/schema/Contact.Department';

export default class RecordFormContact extends LightningElement {


    objectName=CONTACT_OBJECT;
    fields=[NAME_FIELDS,LASTNAME_FIELDS,ACCOUNTID_FIELDS,

    TITLE_FIELDS,EMAIL_FIELDS,PHONE_FIELDS,DEPARTMAN_FIELDS];

    recordId="0038d00000icMeyAAE";

    successMessage(){
    
        const successToastMsg = new ShowToastEvent({
            title : 'SUCCESS!',
            message : 'The Contact record has been saved successfully!',
            variant : 'success',
            mode :'sticky'
        });
        this.dispatchEvent(successToastMsg);
    }
}