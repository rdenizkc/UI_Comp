import { LightningElement } from 'lwc';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import OPPORTUNITY_NAME_FIELD from '@salesforce/schema/Opportunity.Name';
//import ACCOUNT_NAME_FIELD from '@salesforce/schema/Opportunity.Account';
import TYPE_FIELD from '@salesforce/schema/Opportunity.Type';
import LEADSOURCE_FIELD from '@salesforce/schema/Opportunity.LeadSource';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';

export default class CustomRendering_Opp extends LightningElement {
    showtext = false;
    objectApiName = OPPORTUNITY_OBJECT;
    recordId = '0068d00000Hi8UKAAZ';

    fields = {
        opp: OPPORTUNITY_NAME_FIELD,
       // account: ACCOUNT_NAME_FIELD, 
        type: TYPE_FIELD,
        leadSource: LEADSOURCE_FIELD,
        stage: STAGE_FIELD,
        closeDate: CLOSEDATE_FIELD,
        amount: AMOUNT_FIELD
    }

    handleChange() {
        this.showtext = !this.showtext; 
}
}