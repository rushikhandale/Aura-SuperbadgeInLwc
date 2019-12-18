import { LightningElement, api, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class boatDetailLwc extends NavigationMixin(LightningElement) {
    @api boatId;
    @api imgSrc;
    @api contactName;
    get boatowner(){
        return this.contactName+"'s Boat";
    }
    renderedCallback(){
        console.log('Name');
    }
    showDetails(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.boatId,
                objectApiName: 'Boat__c', // objectApiName is optional
                actionName: 'view'
            }
        });
    }

}