JS Concepts:

1. Null Vs Undefined

Undefined = You have declared a value but not assigned a value or initialized
Null = it is an assignment value. It can be assgin in a value to represent that it has no value

let name;
console.log(typeof name);  // undefined
name = 'Hanzala';
console.log(typeof name); // String

// Null Looks Like an Bug
let player = null;
console.log(typeof player);

console.log(typeof undefined); // Undefined
console.log(typeof null); // Object

// undefined mane kisuina abr null maneo kisuina tai eita true but
// undefined is undefined but null is Object so they are not same bro 
console.log(undefined == null);
console.log(undefined === null);

2. == Vs ===

//  == || just value check kore
// === || value + data type o check kore 

// == jokhon use kori tokhon js string k number e convert kore then check kore
// == string number main convert hoye jai 

console.log(1 == '1')
console.log(1 === '1')

3. Scope: block, function, global
4. Closure
5. Hoisting
6. callBack Function
7. Arguments. What is array like objects
8. Array Vs array like object
9. Truthy and falsy Value
   
Six Falsy Value in JS

// Truthy or Falsy Value
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
Document.all is Falsy

// Truthy Value
console.log('Truthy Value');
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(-1));
console.log(Boolean(1));
console.log(Boolean(" "));

10. ! vs !!

! = not Operator
!! = Not Not Operator or Double Bang Operator
Boolean Constructor
Dobule Negative

let myName = "Hanzala";

// Eigulo Holo Truthy value ba falsy value but not exactly boolean
// If we want to convert it into exact boolean we need ! this sign but problem is It will reverse the truthy value into falsy value or falsy value int truthy value
// thats why we reverse double time so that we can get the exact value;

console.log(Boolean(myName)); //True
console.log(Boolean(!myName)); //False
console.log(Boolean(!!myName)); //True

Dev Tool

1. Elements Tab
2. Console Tab
3. Source Tab
4. Network
5. Application
6. Check Responsive
7. Shortcut Keys

ব্রাউজার এবং জাভাস্ক্রিপ্ট রিলেটেড জিনিসগুলা প্রাকটিস করে ফেলো।

১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। ,

২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও

৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও

৪. Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা ইংরেজিতে ৫ থেকে ৭ লাইনের মধ্যে লিখে ফেলো।

৫. local storage আর session storage এর মধ্যে তিনটা পার্থক্য লিখে ফেলো। ইংরেজিতে। (নিজের মতো করে লিখবে )

[হোম ওয়ার্ক]

৬. জাভাস্ক্রিপ্ট এর কোড কিভাবে ব্রাউজারের মধ্যে রান করে। দরকার হলে গুগল বা ইউটিউবে সার্চ দিয়ে একটু ভালো করে দেখে রাখো।

৭. জাভাস্ক্রিপ্ট এর কোন কোন জিনিস asynchronous সেটার একটা লিষ্ট গুগলে সার্চ দিয়ে বের করে ফেলো। এবং এই asynchronous বলতে কি বুঝায় সেটাও দেখে রাখো।

৮. event loop লুপ কি জিনিস। এই রিলেটেড পুরা জিনিসটা আজকে অনেকেই বুঝবে না। তাও আরেকবার দেখে রাখবে।

[ চ্যালেঞ্জ ]

৯. ভিডিওতে চারটা লেভেল এর লোকাল স্টোরেজ রিলেটেড কাজ দেয়া হয়েছে। সেগুলা একটু ভালো করে করো।

[মাস্ট করতেই হবে]

১০. stackoverflow নামে একটা ওয়েবসাইট আছে। সেখানে গিয়ে একাউণ্ট খুলবে। এবং মিনিমাম ৩০ মিনিট সেখানে স্পেন্ড করবে। দেখবে কিভাবে কি উত্তর দেয়।

1. What is a call stack?
2. Tell us about Try-catch?
3. Name some console APIs.
4. What is syntax error?
5. When do we get reference error?
6. a) what is wrong with the code below:
   var foo;
   console.log(foo.bar);
   b) What type of error will the code generate?
   c) What is the correct way to write the code?
