import { LightningElement, track} from 'lwc';

export default class boatSearchLwc extends LightningElement {
    @track filterName = '';
    filterChanged(event){
        this.filterName = event.detail;
    }
}