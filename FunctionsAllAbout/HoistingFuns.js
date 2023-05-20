/*
//Side note
functionName();

//num here is undefined ? why
function functionName(num) {
  console.log("nn", num);
}
*/

//1st example
functionName(10);

function functionName(num) {
  functionName2();
  function functionName2() {
    function functionName3() {
      console.log("nn", num);
    }
    functionName3();
  }
}

//2nd example o/p based

console.log("sssss", typeof a); //undefined
var a = 90;
var x = 15;

console.log("red ger");
// console.log("mmm", typeof y, typeof x);
y();

var y = function showX() {
  console.log("showX", x); //undefined, below function scope x is hoisted here and so its undefined
  var x = 25;
};

console.log("mmm", typeof y, typeof x);
// y();

// showX();
