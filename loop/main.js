/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let admin_num=5
document.write(`<div>We Have X Admins</div>`);
document.write(`<div>We Have ${admin_num} Admins</div>`);
document.write(`<hr>`);
let index
for(let i=0;i < admin_num;i++){
  if (myAdmins[i]=="Stop"){
    break;
  }
  document.write(`<div>`);
  document.write(`The Admin For Team ${i+1} is ${myAdmins[i]}`);
  document.write(`<h3>Team Member:</h3>`);
  index=0
  for(let j=0;j< myEmployees.length;j++){
    console.log(myAdmins[i][0])
    if (myEmployees[j][0]===myAdmins[i][0]){
      document.write(`<p>${++index}-${myEmployees[j]}</p>`)
    }

  }
  document.write(`<hr>`);
   
  document.write(`</div>`)

}
