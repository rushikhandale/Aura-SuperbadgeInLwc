import { LightningElement, track } from 'lwc';

export default class boatSearchFormLwc extends LightningElement {
    @track value = '';
    get options() {
        return [
            { label: 'All Types', value: '' },
            { label: 'Sailboat', value: 'a012v00002F87pbAAB' },
            { label: 'Fishing Boat', value: 'a012v00002F87pcAABoat' },
            { label: 'High Performance', value: 'a012v00002F87peAAB' },
            { label: 'Pleasure Boat', value: 'a012v00002F87pfAAB' },
            { label: 'Ski Boat', value: 'a012v00002F87pgAAB' },
            { label: 'Yacht', value: 'a012v00002F87phAAB' },
            { label: 'House Boat', value: 'a012v00002F87piAAB' }
        ];
    }
    handleChange(event){
        console.log('Picklist changed' + event.target.value);
        this.value = event.target.value;
        const selectEvent = new CustomEvent('boatfilterchanged', {
            detail: this.value
        });
        this.dispatchEvent(selectEvent);
    }
}