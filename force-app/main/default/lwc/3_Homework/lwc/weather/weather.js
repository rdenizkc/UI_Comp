import { LightningElement } from 'lwc';

export default class Weather extends LightningElement {

    getWeather(){
   try{
        fetch("https://api.weatherstack.com/", {method:"GET" , mode:"cors"} ) 
        .then( response => response.json() ) 
        .then( data => {
            console.log(data); 
           } ) ; 
     
     

        }catch(err){

            console.log(err);
        }

          
        
     }

    }


