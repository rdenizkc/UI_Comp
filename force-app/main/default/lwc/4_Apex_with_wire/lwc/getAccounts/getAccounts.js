import { LightningElement, wire } from 'lwc';
import getAccounts from'@salesforce/apex/AccountController.getAccounts';
// my colums  will be an array of objects with threee properties(label, fieldName,type)
const COLUMNS = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Account Type', fieldName: 'Type', type: 'text' },
    { label: 'Industry', fieldName: 'Industry', type: 'text' },
    { label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency' }
    
];

// getAccount is my apex class, i used it like adapter
export default class GetAccounts extends LightningElement {
    columns = COLUMNS; 

@wire(getAccounts)
accounts;

}