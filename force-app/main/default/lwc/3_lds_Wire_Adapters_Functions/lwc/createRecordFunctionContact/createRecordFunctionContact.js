import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class CreateRecordFunctionContact extends LightningElement {
    /*
    Use Case: By using createRecord Function, please prepare an LWC component to create a contact record with the following fields.
    
    FirstName - LastName - Title - Email - Department
        //What do I need to do first in JS?
        Step-1: I will use createREcord Function and I need to know what is the parameters to pass in this function. 
        recordInput: A recordInput object is used to create the record. This object takes objectApiName and fields as property input.  Note: Prepare a formData object from EventHandler and pass it to recordInput Object's fields property like below.)
​
        const recordInput = {
            apiName :,
            fields  : this.formData
        }
        1. import Object
        2. Prepare your formData object: This is the object that you need to pass to fields property in the recordInput object. 
        Then, go to HTML and prepare your user inout fields. 
    */ 

        formData = {};

        /* How can I prepare my formData?
            formData = {
                property1 : value1,
                property2 : value2,
                ...  
            }
            Since I need the fieldApiNames of the inputs, I store them in name attribute in their lightning input fields. 
            formData = {
                fieldApiName : the user's entry data,
                FirstName : Alex,
                LastName : Thomas,
                . 
                . 
                . 
                . 
            }
​
        */

        changeHandler(event){
            //const name = event.target;
           // const value = event.target; 
        const{name,value} = event.target;
        this.formData[name] = value;

        }
        /* Note: In JS, if the variable name and the target's final destination name is the same, JS property will drop the final destination notation and keep it as below
        */
       // const value = event.target;
        //const name = event.target;

        // My save button eventHandler is going to carry my createRecord Function

        /* Note:
        When your variable name and your recordInput name is the same, ignore one of them and Js will take care as below.
        */
        saveContactHandler(){
            const recordInput = {
                apiName : CONTACT_OBJECT.objectApiName,
                fields : this.formData
            }

            createRecord(recordInput)
                .then(result=>{
                    console.log(result);
                    //I will show a success message upon saving the data
                    this.successMessage();
                    this.template.querySelector('form.contactForm').reset();
                    this.formData = {};
                })
                .catch(error=>{
                    console.log(error);
                    //Show error success message
                    this.errorMessage();
                })
            
        }

        cancelContactHandler(){
            this.template.querySelector('form.contactForm').reset();
                    this.formData = {};
                    this.infoMessage();

        }

        successMessage(){
            const showSuccessMsg = new ShowToastEvent({
                title : 'SUCCESS!!!',
                message : 'The Contact record has been saved successfully!',
                variant : 'success',
                mode : 'sticky'
            });
            this.dispatchEvent(showSuccessMsg);
        }

        errorMessage(){
            const showErrorMsg = new ShowToastEvent({
                title : 'ERROR!!!',
                message : 'The Contact record has NOT been saved. Please check your error!',
                variant : 'error',
                mode : 'sticky'
            });
            this.dispatchEvent(showErrorMsg);
        }


        infoMessage(){
            const showinfoMsg = new ShowToastEvent({
                title : 'Information',
                message : 'The Contact record saving process has been cancelled. The contact record has not been created!',
                variant : 'info',
                mode : 'pester'
            });
            this.dispatchEvent(showinfoMsg);
        }
        
        
}