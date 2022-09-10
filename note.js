// Not Not Operator or Double Bang

let myName = "Hanzala";
// Eigulo Holo Truthy value ba falsy value but not exactly boolean 
// If we want to convert it into exact boolean we need ! this sign but problem is It will reverse the truthy value into falsy value or falsy value int truthy value
// thats why we reverse double time so that we can get the exact value;

console.log(Boolean(myName));
console.log(Boolean(!myName));
console.log(Boolean(!!myName));
console.log('Done')

// Truthy or Falsy Value
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
// Truthy Value
console.log('Truthy Value');
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(-1));
console.log(Boolean(1));
console.log(Boolean(" "));