import { LightningElement } from 'lwc';

export default class TwoWayDataBinding extends LightningElement {
    studentName;
    fullName;
    title;


getName(){
    this.studentName = "Local Property",
    stdName="Alex TH";
    console.log(this.studentName+" looks like this");
    console.log("this is the stdName "+ stdNAme);
return stdName;
}

handleChangeName(event){

this.fullName = event.target.value;
}

handleChangeTitle(event){
this.title = event.target.value;

}



}