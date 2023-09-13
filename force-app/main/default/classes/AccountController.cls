public with sharing class AccountController {
    /*
    Create an LWC Component and display the top 10 accounts based on their Annual Revenue by using Apex in LWC. Display the following fields: 
    Name, Type, Industry, Annual Revenue.
    */
    @AuraEnabled(cacheable=true)
    
    public static List<Account> getAccounts(){
        return [SELECT Name, Type, Industry, AnnualRevenue
                FROM Account
                WHERE AnnualRevenue != null
                ORDER BY AnnualRevenue DESC
                LIMIT 10];
    }

/* get all the accounts whose name contains the given search key: NOte: This is going to be an imperative apex approach */

@AuraEnabled
public static List<Account> searchAccounts(String searchKey){
    searchKey = '%'+searchKey + '%';   //use wildcard
    return [SELECT Id, Name,Type, Industry,AnnualRevenue
            FROM Account
            WHERE Name LIKE :searchKey
            WITH SECURITY_ENFORCED
            ORDER BY Name ASC
            LIMIT 20];
}

//Use-Case: Get all the accounts by theur Type given in dropdown list(Combobox)

@AuraEnabled(cacheable=true)
public static List<Account> getAccountsByType(String type){
    return [SELECT Id, Name, Type, Industry, Phone, Rating
            FROM Account 
            WHERE Type =: type
            WITH SECURITY_ENFORCED
            ORDER BY Name ASC
            LIMIT 20];
}

//Get the most recent accounts
@AuraEnabled(cacheable=true)
public static List<Account> getRecentAccounts(){
    return [SELECT Id, Name,Type, Industry, Phone, AnnualRevenue
            FROM Account
            WITH SECURITY_ENFORCED
            ORDER BY CreatedDate DESC
            LIMIT 10];
}
}