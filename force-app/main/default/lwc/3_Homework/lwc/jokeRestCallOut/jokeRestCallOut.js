import { LightningElement } from 'lwc';

export default class JokeRestCallOut extends LightningElement {

    id; 
    setup; 
    puchline; 
    type; 



    JokeRest(){

   console.log('Are you ready?') ;
   
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