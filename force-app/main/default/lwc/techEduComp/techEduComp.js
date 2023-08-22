import { LightningElement } from 'lwc';

export default class TechProEdComp extends LightningElement {

    name = "Deniz";   //variable in JS ; properties in JS
    age = 29; 
    city ="London"; 
    country = "UK"; 

    id; 
    setup; 
    puchline; 
    type; 


    valChange(event){
        console.log('valChange method invoked');
        console.log(event); 
        console.log(event.target.value); 
        this.name = event.target.value; 
    }

    callREST(){
        console.log('callREST method invokded'); 
        fetch("https://official-joke-api.appspot.com/random_joke", {method:"GET"} ) 
        .then( response => response.json() ) 
        .then( data => {
            console.log(data); 
            console.log(data.id); 
            console.log(data.setup); 
            console.log(data.punchline); 
            console.log(data.type); 
            this.id = data.id; 
            this.setup = data.setup; 
            this.puchline = data.punchline; 
            this.type = data.type; 
            
         } ) ; 

    }


}