var a = 5;

console.log("red0", a);

// {
//   //   console.log(b); //Reference error, can't access b before initialized
//   let b = 10;
//   a = 99; //Global
//   var a = 101;
// }

function name() {
  //here again hoisting, cretaion pahse befoire execution phase
  let b = 10;
  a = 99;
  console.log("red", a);
  var a = 101;
  s;
  console.log("red2", a);
}
name();
console.log("red3", a);

// console.log(b); // b is not defined, refernce error
// console.log(b);
