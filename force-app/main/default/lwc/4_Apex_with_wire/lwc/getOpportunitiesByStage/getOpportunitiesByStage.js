import { LightningElement, wire } from 'lwc';
import getOppsByStage from '@salesforce/apex/OpportunityController.getOppsByStage';

const COLUMNS = [
    { label : "Opportunity Name", fieldName : "Name", type : "text" },
    { label : "Amount", fieldName : "Amount", type : "currency" },
    { label : "Type", fieldName : "Type", type : "text" },
    { label : "Stage Name", fieldName : "StageName", type : "text" }
];
export default class GetOpportunitiesByStage extends LightningElement {

    /*
    Get all Opportunities where their Stage name is Closed Won and display the following fields in data table. 
    Opportunity Name, Amount, Type, Stage Name,.
    */
    columns = COLUMNS;
    stageName = 'Closed Won';
    changeHandler(event){
        this.stageName = event.target.value;
    }

    @wire(getOppsByStage, {stage:'$stageName'})  //make your variable reactive since wire services are reactive.
    opportunities;

}