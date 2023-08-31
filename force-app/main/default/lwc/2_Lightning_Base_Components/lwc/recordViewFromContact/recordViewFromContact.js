import { LightningElement, api } from 'lwc';



import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELDS from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELDS from '@salesforce/schema/Contact.LastName';
import ACCOUNTID_FIELDS from '@salesforce/schema/Contact.AccountId';
import TITLE_FIELDS from '@salesforce/schema/Contact.Title';
import EMAIL_FIELDS from '@salesforce/schema/Contact.Email';
import PHONE_FIELDS from '@salesforce/schema/Contact.Phone';
import DEPARTMAN_FIELDS from '@salesforce/schema/Contact.Department';

export default class RecordViewFormAccount extends LightningElement {
showContents=false;
    objectName = CONTACT_OBJECT;
    recordId = '0018d00000jGRmYAAW';

   // @api recordId;
    fields = {
        name : NAME_FIELDS,
    
    

    }

}