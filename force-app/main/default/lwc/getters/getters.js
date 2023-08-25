import { LightningElement } from 'lwc';

export default class Getters extends LightningElement {
    
    num1 = 25;
    num2 = 75;
    sum = this.num1+this.num2;

    get sum() {
        var total= this.num1 +this.num2;
        return total;
    }

    //Lets work on the arrays now.
    names = ["Alex", "James", "Elizabeth", "Kathy"];

    get firstPerson(){
        return this.names[0];
    }

    //Use case : Grab the numbers as input from the user and multiply them and print the result on the LWC component in a div tag.

    number1 = 0;
    number2 = 0;

    changeHandlerNum1(event){
       this.number1 = event.target.value;  
    }
    changeHandlerNum2(event){
        this.number2 = event.target.value;
    }
    
 get product(){
       return this.number1 * this.number2;  
    }
}