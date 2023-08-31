import { LightningElement } from 'lwc';

export default class MyInfo extends LightningElement {
    value ;
    userName;
name(event){

this.userName= event.target.value;
}

    get options() {
        return [
            { label: 'Salesforce Admin', value: 'Salesforce Admin' },
            { label: 'Salesforce Developer', value: 'Salesforce Developer' },
            { label: 'Salesforce Architect', value: 'Salesforce Architect' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
}


