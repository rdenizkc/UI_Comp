import { LightningElement, track} from 'lwc';

export default class Password extends LightningElement {

@track password="12345";
@track win=false
@track lost=false
@track userinput;

pass(event){
this.userinput=event.target.value; 

if(this.userinput === ""){
    this.win=false;
    this.lost=false;
}else if (this.userinput === this.password) {
    this.win = true;
    this.lost = false; // Reset lost state
} else {
    this.win = false; // Reset win state
    this.lost = true;
}
}
}