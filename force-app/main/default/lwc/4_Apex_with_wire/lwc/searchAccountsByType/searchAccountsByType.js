import { LightningElement, wire } from 'lwc';
import getAccountsByType from '@salesforce/apex/AccountController.getAccountsByType';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import TYPE_FIELD from '@salesforce/schema/Account.Type';

import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
const COLUMNS = [
    { label:"Account Name", fieldName:"Name", type:"text" },
    { label:"Type", fieldName:"Type", type:"text" },
    { label:"Industry", fieldName:"Industry", type:"text" },
    { label:"Phone Number", fieldName:"Phone", type:"phone" },
    { label:"Rating", fieldName:"Rating", type:"text" }
]
export default class SearchAccountsByType extends LightningElement {

    selectedType;
    typeOptions = []; //Who is going to give me this options as dropdown? - getPicklistValues Adapter. I also need to know the recordType Id for this. Who is going to give me the recordType Id? - getObjectInfo Adapter.
    accounts;
    columns=COLUMNS;
    errorMsg; // html de ki error
    //Step-1: Use getObjectInfo Adapter
    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    accountInfo;

    //Step-2: Use getPicklistValues Adapter
    @wire(getPicklistValues,{fieldApiName:TYPE_FIELD, recordTypeId:'$accountInfo.data.defaultRecordTypeId'})
    typePicklistValues({data,error}){
        if(data){
            console.log(data);
            this.typeOptions = this.picklistGenerator(data);
        }
        if(error){
            console.log(error);
        }
    }
// step3: prepare your picklist generator to get your options array of types
    picklistGenerator(data){
        return data.values.map(w=>({
            label : w.label,
            value : w.value
        }));
    }

    // step4: use your changeHandlerType

    changeHandlerType(event){
        this.selectedType = event.target.value;
        getAccountsByType({type:this.selectedType})
        .then(result=>{
            console.log(result);
this.accounts=result;
        })
        .catch(error=>{
            console.log(error);
this.errorMsg=error;
        })
    } 

}