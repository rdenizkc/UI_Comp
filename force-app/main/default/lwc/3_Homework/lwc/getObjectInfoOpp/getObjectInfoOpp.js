import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import OPPORTUNITY_OBJECTS from '@salesforce/schema/Opportunity';
import STAGENAME_FIELDS from '@salesforce/schema/Opportunity.StageName';


export default class GetObjectInfoOpp extends LightningElement {
kRtId;
selectedValue;
options=[];

    @wire(getObjectInfo, {objectApiName: OPPORTUNITY_OBJECTS })
    oppinfo({data,error}){
if(data){
console.log(data);
// lets get the map first, creating with const inthe if part it is block level 
const recordTypesMap =data.recordTypeInfos;
console.log(recordTypesMap);
this.kRtId=Object.keys(recordTypesMap).find(w=>(recordTypesMap[w].name==='Kitchen Appliances'))

}
if(error){
console.log(error);
}
}

@wire(getPicklistValues,{fieldApiName:STAGENAME_FIELDS  , recordTypeId:'$kRtId'})
oppInfo({data,error}){
    if(data){
console.log(data);
this.options= this.picklistGenerator(data);
    }
}if(error){
    console.log(error);
}

handleChange(event){
this.selectedValue=event.target.value;
}

picklistGenerator(data){
    return data.values.map(w=>({
                        label : w.label,
                        value : w.value
    }));
}

}