import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

import CONTARCT_OBJECT from '@salesforce/schema/Contract';
import CONTRACT_TYPES from '@salesforce/schema/Contract.Contract_Types__c';
import STATUS_FIELD from '@salesforce/schema/Contract.Status';

export default class GetInfowithComboboxContract extends LightningElement {
    renevelRTId;
    selectedValue;
    options = [];

    selectedSTATUS;
    optionsS = [];

    @wire(getObjectInfo, { objectApiName: CONTARCT_OBJECT })
    contractInfo({ data, error }) {
        if (data) {
            console.log(data);
            const rtIds = data.recordTypeInfos;
            this.renevelRTId = Object.keys(rtIds).find(
                (key) => rtIds[key].name === 'Renewal Contract'
            );
            console.log('The RenevelRtId is : ' + this.renevelRTId);
        }
        if (error) {
            console.log(error);
        }
    }

    @wire(getPicklistValues, { fieldApiName: CONTRACT_TYPES, recordTypeId: '$renevelRTId' })
    contractTypesInfo({ data, error }) {
        if (data) {
            console.log(data);
            this.options = this.picklistGenerator(data.values);
        }
        if (error) {
            console.log(error);
        }
    }

    handleChange(event) {
        this.selectedValue = event.target.value;
    }

    picklistGenerator(data) {
        return data.map((value) => ({
            label: value.label,
            value: value.value,
        }));
    }

    @wire(getPicklistValues, { fieldApiName: STATUS_FIELD, recordTypeId: '$renevelRTId' })
    contractStatusInfo({ data, error }) {
        if (data) {
            console.log(data);
            this.optionsS = this.picklistGenerator(data.values);
        }
        if (error) {
            console.log(error);
        }
    }

    handleChangeStatus(event) {
        this.selectedSTATUS = event.target.value;
    }
}