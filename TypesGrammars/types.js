var doesnotexist;
console.log(typeof doesnotexist); //"undefined"

console.log(typeof abc); //"undefined"

var v = undefined;
console.log(typeof v); //"undefined"

v = null;
console.log(typeof v); //"object"

v = true;
console.log(typeof v); //"boolean"

v = 1;
console.log(typeof v); //"number"

v = "Hello";
console.log(typeof v); //"string"

v = function () {};
console.log(typeof v); //"function"

v = [1, 2];
console.log(typeof v); //"object"

v = {};
console.log(typeof v); //"object"

v = Symbol();
console.log(typeof v); //"symbol"

var m = 42n; //Big int, can grow from 42 to essentially infinitely large upto the memory system
console.log(typeof m);

//undefined vs undeclared vs uninitialized

//NaN

var myAge = 20;
var sonAge = 20 / "a";
var yourAge = Number("20");

console.log(myAge, sonAge, yourAge);
console.log(myAge - "hello");

console.log(sonAge === sonAge);
console.log(sonAge == sonAge);

console.log("typeof myAge", typeof myAge);
console.log("typeof sonAge", typeof sonAge);
console.log("typeof yourAge", typeof yourAge);

console.log("isNaN(myAge)", isNaN(myAge));
console.log(isNaN(sonAge));
console.log(isNaN("her age"));
console.log(isNaN(yourAge));

console.log("Number.isNaN(sonAge)", Number.isNaN(sonAge));
console.log(Number.isNaN("her age"));
console.log(Number.isNaN(yourAge));
