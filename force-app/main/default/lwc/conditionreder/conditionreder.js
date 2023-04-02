import { LightningElement } from 'lwc';

export default class Conditionreder extends LightningElement {

    areDetailVisible=false;
    handleChange(event)
    {
        this.areDetailVisible=event.target.checked;
    }
}