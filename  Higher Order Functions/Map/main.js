// Map Practice
let arr=[1,3,4,-5,-77,22];

let co=arr.map(function(el){
  return -el
})


let swap="MahMoUd".split("");

let swaping=swap.map(function(elment){
  return (elment===elment.toLocaleLowerCase()?elment.toUpperCase():elment.toLowerCase())
}).join("")
console.log(swaping);

let ignorenum="qqq11ww";
ans=ignorenum.split("").map(function(elment){
  if (isNaN(parseInt(elment))){
    return elment
  }

}).join("");
console.log(ans);

// arrow function
ans2=ignorenum.split("").map(elment=>isNaN(parseInt(elment))?elment:"").join("")
console.log(ans2);