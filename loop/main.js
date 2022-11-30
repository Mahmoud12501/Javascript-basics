/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/
function showDetails(...args){
    let fname,age,status;
    fname=(typeof args[0]==="string")?args[0]:(typeof args[1]==="string")?args[1]:args[2];
    age=(typeof args[0]==="number")?args[0]:(typeof args[1]==="number")?args[1]:args[2];
    status=(typeof args[0]==="boolean")?args[0]:(typeof args[1]==="boolean")?args[1]:args[2];
    console.log(`Hellow ${fname}, Your Age Is ${age}, You Are ${(status===true)?"":"Not"} Available For Hire`);
    
    
   
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"