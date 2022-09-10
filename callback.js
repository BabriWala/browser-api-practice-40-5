function greet(name){
    return `Dear ${name}`;
}

function greetNight(callback, name){
    console.log(`Good Night ${callback(name)}`)
}

greetNight(greet, 'Hanzala');


// function hear(){
//     console.log('I am Hearing You');
// }
// function sayName(name){
//     console.log(`Mr. ${name}`);
// }
// setTimeout(hear, 2000);
// sayName('Hanzala');

function hear(myFunc, name){
    console.log('I am Hearing You');
    myFunc(name);
}
function sayName(name){
    console.log(`Mr. ${name}`);
}
setTimeout(hear, 2000, sayName, 'Hanzala');
