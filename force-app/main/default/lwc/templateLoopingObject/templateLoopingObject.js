import { LightningElement } from 'lwc';

export default class TemplateLoopingObject extends LightningElement {

    accounts=[
        {
            id :100,
            name :"Edu",
            type:"Sofware Education"
        },

        {
            id:200,
            name:"Universsal Studios",
            type:"Entertainment"
        },
        {
            id:300,
            name:"Pepsp Cola Inc",
            type:"Beverages"
        }
    ];
}