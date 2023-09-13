public with sharing class OpportunityController {
    
    /*
    Get all Opportunities where their Stage name is Closed Won and display the following fields in data table. 
    Opportunity Name, Amount, Type, Stage Name,.
    */

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOppsByStage(String stage){
        return [SELECT Name, Amount, Type, StageName
                FROM Opportunity
                WHERE StageName =:stage
                WITH SECURITY_ENFORCED
                ORDER BY Amount DESC];
    }
}