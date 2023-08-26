import { LightningElement, track } from 'lwc';

export default class TotalNumber extends LightningElement {
    @track number1 ;
    @track number2 ;
    @track sum ;

    num1(event){
this.number1 = parseInt(event.target.value);
        
    }

    num2(event){
        this.number2 = parseInt(event.target.value);
        
            }

get result(){

 this.sum= this.number1 + this.number2;

  return this.sum;
}



}
