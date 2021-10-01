
 var jsonaccount = './accounts.json';

 
 var fs = require('fs');
 
 var accountData = JSON.parse(fs.readFileSync('./accounts.json', 'utf8'));
 function mergeArrays(a1, a2) {
   var merged = a1;
 
   for (var i = 0; i < a2.length; i++) {
     if (merged.indexOf(a2[i]) == -1) {
       merged.push(a2[i]);
     }
   }
 
   return merged;
 }
 
 
 function personscreate(n, e, a) {
   var nperson = {};
   nperson.name = n;
   nperson.applications = [a];
   nperson.emails = e;
 
   return nperson;
 }
 


 function populatePeople(accounts) {
   var people = [];
   for (var i = 0; i < accounts.length; i++) {
     var account = accounts[i];
     people.push(personscreate(account.name, account.emails, account.application));
   }
   return people;
 }
 


 function mergePeople(people) {  
   for (var i = 0; i < people.length; i++) {
     for (var j = 0; j < people[i].emails.length; j++) {
       var email = people[i].emails[j];
       for (var k = 0; k < people.length; k++) {
         if (k !== i) {
           var emailscompare = people[k].emails;
 
           for (var l = 0; l < emailscompare.length; l++) {
             var emailToBeCompared = emailscompare[l];
             if (emailToBeCompared === email) {
               people[i].emails = mergeArrays(people[i].emails, emailscompare);
               people[i].applications = mergeArrays(people[i].applications, people[k].applications);
               mergePeople(people.splice(k, 1));
             }
           }
         }
       }
     }
   }
 

   
   return people;
 }
 
 console.log(mergePeople(populatePeople(accountData)));