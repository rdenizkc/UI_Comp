import { LightningElement, track } from 'lwc';

export default class Password extends LightningElement {

@track password="12345";
@track win=false
@track lost=false
@track enteredPas;



pass(event){

    this.enteredPas=event.target.value; 
    
 


    if(this.enteredPass==password){

    this.win=true;
        }
        if(this.enteredPass==password){

            this.lost=true;
        }
    
   
}

}
    








