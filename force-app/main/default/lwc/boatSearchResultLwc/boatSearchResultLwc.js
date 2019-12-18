import { LightningElement, wire, track, api } from 'lwc';
import getBoats from '@salesforce/apex/BoatSearchResults.getBoats';
export default class boatSearchResultLwc extends LightningElement {
    @api boatName;
    @track selectedBoat;
    @track boatList;
    @track displayMessage = false;

    @wire(getBoats, {boatTypeId : '$boatName'})
    wiredBoats(value) {
        console.log(JSON.stringify(value));
        this.boatList = value;
        const { data, error } = value;
        if(data){
            console.log('Data Recieved')
            if(data.length == 0){
                this.displayMessage = true;
            }else{
                this.displayMessage = false;
            }
        }
    }
    
    handleCustomEvent(event){
        this.selectedBoat = event.detail;
    }
}