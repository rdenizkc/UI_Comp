import { getObjectInfo} from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

import CONTARCT_OBJECT from '@salesforce/schema/Contract'

export default class GetInfowithComboboxContract extends LightningElement {
renevelRTId;


    @wire(getObjectInfo, {objectApiName: CONTARCT_OBJECT})
    contarctinfi({data,error}){
        if(data){
            console.log(data);
            const recordTMap= data.recordTypeInfos;

        this.renevelRTId=Object.keys(recordTMap).find(w=>(recordTMap[w].name==='Renewal Contract'))

        }
        if(error){
            console.log(error);
        }
    }


 //   @wire(getPicklistValues,{FieldsApiNAme: , recordTypeId:'$renevelRTId}')
}