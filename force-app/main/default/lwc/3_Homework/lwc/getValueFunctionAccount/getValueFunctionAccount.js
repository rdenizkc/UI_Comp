import { LightningElement, wire } from 'lwc';
import { getFieldDisplayValue, getFieldValue, getRecord } from 'lightning/uiRecordApi';





import NAME_FILED from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUAL_REVENUE_FILED from '@salesforce/schema/Account.AnnualRevenue';
import RATING_FIELD from '@salesforce/schema/Account.Rating';

const FIELDS = [NAME_FILED , TYPE_FIELD , INDUSTRY_FIELD, ANNUAL_REVENUE_FILED, RATING_FIELD];

export default class GetValueFunctionAccount extends LightningElement {


    name;
    type;
    industry;
    annualRev;
    rating;


    recordId='0018d00000jGRmYAAW';

   @wire(getRecord ,{recordId:'$recordId', fields:FIELDS}) 
   accountInfo({data,error}){
    if(data){
console.log(data);
this.name=getFieldValue(data,NAME_FILED),
this.type=getFieldValue(data,TYPE_FIELD),
this.industry=getFieldValue(data,INDUSTRY_FIELD),
this.annualRev=getFieldDisplayValue(data,ANNUAL_REVENUE_FILED),
this.rating=getFieldValue(data,RATING_FIELD)

    }
    if(error){
console.log(error);
    }
   }
}