import { LightningElement } from 'lwc';

import searchAccounts from '@salesforce/apex/AccountController.searchAccounts';


   /* get all the accounts whose name contains the given search key: Note: This is going to be an imperative apex approach */

export default class SearchAccounts extends LightningElement {

searchWord;
accounts;



seacrhHandler(event){
    this.searchWord= event.target.value;
 searchAccounts({searchKey:this.searchWord})
 .then(result=>{
    console.log(result);
    this.accounts= result;
 })
 .catch(error=>{

console.log(error);

 })

}



}