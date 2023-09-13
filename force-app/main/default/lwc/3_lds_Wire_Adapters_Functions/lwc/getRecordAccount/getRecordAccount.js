import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';



import Name_FILDS from '@salesforce/schema/Account.Name';
import TYPE_FIELDS from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELDS from '@salesforce/schema/Account.Industry';
import ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue';
import ACCOUNT_NUMBER_FIELDS from '@salesforce/schema/Account.AccountNumber';
import RATING_FIELDS from '@salesforce/schema/Account.Rating';

/* Use-Case: Display the following Account Fields by using getRecord Wire Adapter. 
        Name - Type - Industry - Annual Revenue -Account Number - Rating
    */


        const FIELDS = [ Name_FILDS , TYPE_FIELDS, INDUSTRY_FIELDS, ANNUAL_REVENUE, ACCOUNT_NUMBER_FIELDS,RATING_FIELDS];

export default class GetRecordAccount extends LightningElement {

    recordId='0018d00000jGRmiAAG';
   // @api recordId;
accName;
accType;
accIndustry;
accAnnualRevenue;
accNumber;
accRating;
@wire(getRecord , {recordId: '$recordId'  ,fields:FIELDS})
accountInfo({data,error}){
    if(data){
        console.log(data);
        this.accName = data.fields.Name.value;
        this.accType = data.fields.Type.value;
        this.accIndustry = data.fields.Industry.value;
        this.accAnnualRevenue = data.fields.AnnualRevenue.displayValue;
        this.accNumber = data.fields.AccountNumber.value;
        this.accRating = data.fields.Rating.value;
    }
    if(error){
        console.log(error);
    }
}
}