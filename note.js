let myName = "Hanzala";
// Eigulo Holo Truthy value ba falsy value but not exactly boolean 
// If we want to convert it into exact boolean we need ! this sign but problem is It will reverse the truthy value into falsy value or falsy value int truthy value
// thats why we reverse double time so that we can get the exact value;

console.log(Boolean(myName));
console.log(Boolean(!myName));
console.log(Boolean(!!myName));