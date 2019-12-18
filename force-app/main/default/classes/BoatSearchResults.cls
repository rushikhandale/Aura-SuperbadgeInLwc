/**
 * @File Name          : BoatSearchResults.cls
 * @Description        : 
 * @Author             : Rushikesh Khandale
 * @Group              : 
 * @Last Modified By   : Rushikesh Khandale
 * @Last Modified On   : 9/5/2019, 3:37:31 PM
 * @Modification Log   : 
 * Ver       Date            Author      		    Modification
 * 1.0    9/3/2019   Rushikesh Khandale     Initial Version
**/
public with sharing class BoatSearchResults {
    @AuraEnabled(cacheable=true)
    public static List<Boat__c> getBoats(String boatTypeId){
        List <Boat__c> boatList = new List <Boat__c>();
        system.debug('In the apex class :'+ boatTypeId);
        if(String.isBlank(boatTypeId)){
            boatList = [
                        SELECT  Id,
                                Name,
                                Contact__r.Name,
                                Picture__c,
                                Geolocation__Latitude__s,
                                Geolocation__Longitude__s
                        FROM    Boat__c
                        ];
        }else{
            boatList = [
                        SELECT  Id,
                                Name,
                                Contact__r.Name,
                                Picture__c,
                                Geolocation__Latitude__s,
                                Geolocation__Longitude__s
                        FROM    Boat__c
                        WHERE   BoatType__c = :boatTypeId
                        ];
        }
        return boatList;
    }
}