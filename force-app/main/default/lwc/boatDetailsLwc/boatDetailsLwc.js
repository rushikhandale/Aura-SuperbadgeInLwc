import { LightningElement, wire, track} from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { NavigationMixin } from 'lightning/navigation';

export default class boatDetailsLwc extends NavigationMixin(LightningElement) {
    @track boatId;
    @track boat;
    @wire(CurrentPageReference) pageRef; // Required by pubsub
    connectedCallback() {
        console.log("in connected callback method");
		// subscribe to SearchAccount event
		registerListener('displayBoatDetails', this.handleDisplayAccount, this);
	}
	disconnectedCallback() {
		// unsubscribe from SearchAccount event
		unregisterAllListeners(this);
    }
    handleDisplayAccount(boat){
        console.log('In the handle Display method');
        console.log(JSON.stringify(boat));
        this.boatId = boat.Id;
        this.boat = boat; 
        console.log('CONTACT'+boat.Contact__r.Name);
    }
    
}