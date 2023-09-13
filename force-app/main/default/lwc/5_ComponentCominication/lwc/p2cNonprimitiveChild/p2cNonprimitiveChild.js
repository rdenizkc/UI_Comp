import { LightningElement, api } from 'lwc';

export default class P2cNonprimitiveChild extends LightningElement {

  /* This component offers to display the records in a beautiful data table. */

  @api records = []; //which is the data that will be displayed. It must be an array.
  @api field; //they will be the columns of the data table
}