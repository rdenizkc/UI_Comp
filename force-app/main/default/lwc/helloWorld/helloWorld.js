import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    /* The containers in Js are called as properties. There are two type of properties.
        1. Local Properties : They are the (variables)/containers that are available only in this component.
        2. Public Properties : They are the(variables)/containers that are available for external  components as well. We will focus on this concept in chapter-5: Component communications.
    */

        name = "Deniz";
        title= "Salesforce Developer";
        experience = 3;
        number = 2;
        fruits = ["Apple", "Pear", "Orange", "Kiwi"];
        location = {
            city : "Atlanta",
            state : "Georgia",
            postalCode:30028
        }




}