import { LightningElement, api, track, wire } from 'lwc';
import { fireEvent } from 'c/pubsub' ; 
import { NavigationMixin, CurrentPageReference } from 'lightning/navigation';

export default class boatTileLwc extends LightningElement {
    @api boatName;
    @track selected;
    @track tileClassName = 'tile';
    @wire(CurrentPageReference) pageRef;
    get pictureUrl(){
        return "background-image:url("+ this.boatName.Picture__c+");";
    }    
    boatClicked(){
        const Id = this.boatName.Id;
        this.tileClassName = 'tile selected';
        const selectEvent = new CustomEvent('boatselectedevent', {
            detail: Id
        });
       this.dispatchEvent(selectEvent);

       fireEvent(this.pageRef,'displayBoatDetails',this.boatName);
    }
    @api
    get selectedBoatId(){
        console.log();
        return this.selected;
    }
    set selectedBoatId(value){
        if(value !== undefined){
            this.selected = value;
            this.tileClassName =(value === this.boatName.Id) ? 'selected tile' : 'tile';
        }
    }
    
}