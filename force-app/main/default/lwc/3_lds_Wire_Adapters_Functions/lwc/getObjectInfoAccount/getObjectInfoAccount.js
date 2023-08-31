import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetObjectInfoAccount extends LightningElement {

    //Step-1: start with your wire services. Type wire ans select the wire from the given options to import the wire decorator.
    //Step-2: Go ahead and write your adapter that  you are going to use inside of wire's parentheses.
    //Step-3: Check out the configurations of this adapter. 
    
    rtId;
    name;
    vendorRtId;
    customerRtId;
    masterRtId;
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    accountInfo({data,error}){
        if(data){
            console.log(data);
            this.rtId = data.defaultRecordTypeId;
            this.name = data.apiName;

            //lets ge the map first
            const recordTypesMap = data.recordTypeInfos; 

            console.log(recordTypesMap);

            this.vendorRtId = Object.keys(recordTypesMap).find(w=>recordTypesMap[w].name==='Vendor');

            this. customerRtId = Object.keys(recordTypesMap).find(w=>recordTypesMap[w].name==='Customer');

            this.masterRtId= Object.keys(recordTypesMap).find(w=>recordTypesMap[w].name==='Master');


            
        }
        if(error){
            console.log(error);
        }
    }

}