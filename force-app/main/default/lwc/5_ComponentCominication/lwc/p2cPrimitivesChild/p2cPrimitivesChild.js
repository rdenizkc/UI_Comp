import { LightningElement, api } from 'lwc';

export default class P2cPrimitivesChild extends LightningElement {
   @api fullName;
   @api age;
   @api title; //local propary, @api dan sonra public oldular
   @api experience

}