import { LightningElement } from 'lwc';

export default class RevComp extends LightningElement {

  word="";
  res;
text(event){

this.word = event.target.value;

}
reverse(){
let s1= this.word.split('');
let s2= s1.reverse();
let s3=s2.join('');


if(s3==this.word){
 this.res="True";
} else{
  this.res="false";
}
}






}