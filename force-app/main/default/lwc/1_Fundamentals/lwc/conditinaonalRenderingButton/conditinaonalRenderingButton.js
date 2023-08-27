import { LightningElement } from 'lwc';

export default class ConditinaonalRenderingButton extends LightningElement {

    showContent = false;
    labelName;
    hide;
    hideContent=false;
    showmessage=true;
    
    handleClick(event){

        this.showContent=true;

        this.labelName= event.target.label;
        this.showmessage=false;
    }

    hideClick(){
        this.showContent=false;
        this.hideContent=true;
        this.showmessage=true;
    }

    handleChange(){

        this.showContent= !this.showContent;
    }

    showhide(){

        this.showContent= !this.showContent; 
    }
}