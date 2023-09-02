import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
export default class GetPicklistValuesAccount extends LightningElement {
    //Create a component that shows the picklist values of the vendor field on Account Object.
    //What tools am I going to use for this story?
    //Since I am going to need the recordTypeId, I need to get if by using getObjectInfo adapter first, then I will use my getPicklistValues adapter to grab the picklist values of Vendor record type.
    //getObjectInfo Adapter
    vendorRtId;
    selectedValue;
    options = [];
    customerRtId;
    selectedValueCustomer;
    optionsCustomer = [];
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    accountInfo({data,error}){
        if(data){
            console.log(data);
            const rtIds = data.recordTypeInfos;
            this.vendorRtId = Object.keys(rtIds).find(w=>rtIds[w].name==='Vendor');
            console.log('The Vendor RtID is : '+this.vendorRtId);
            this.customerRtId = data.defaultRecordTypeId;
            console.log('The Customer RtID is : '+this.customerRtId);
        }
        if(error){
            console.log(error);
        }
    }
    //getPicklistValues Adapter for Vendor
    /* Whenever I need to pass my local property inside of Wire Services, I need to make my property reactive since wire services are reactive as well. 
    How Can I make a local property reactive?
    Put your local property inside of a single quotation mark, then put a dolar sign in front of your local property inside of your quotation mark 
    Syntax: '$localProperty'
    */
    @wire(getPicklistValues,{fieldApiName:INDUSTRY_FIELD, recordTypeId:'$vendorRtId'})
    industryPicklist({data,error}){
        if(data){
            console.log(data);
        this.options = this.picklistGenerator(data);
        }
        if(error){
            console.log(error);
        }
    }
    //getPicklistValues Adapter for Customer
    @wire(getPicklistValues,{fieldApiName:INDUSTRY_FIELD, recordTypeId:'$customerRtId'})
    industryPicklistCustomer({data,error}){
        if(data){
            console.log(data);
            this.optionsCustomer = this.picklistGenerator(data);
        }
        if(error){
            console.log(error);
        }
    }
    handleChange(event){
        this.selectedValue = event.target.value;
    }
    handleChangeCustomer(event){
        this.selectedValueCustomer = event.target.value;
    }
    /* 
    I will use a map method here which creates a new attar from calling a function for every array element. map() method does not change the original array.
    */
    picklistGenerator(data){
        return data.values.map(w=>({
            label : w.label,
            value : w.value
        }));
    }
}