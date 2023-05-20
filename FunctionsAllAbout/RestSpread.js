function multiply(num1, num2, num3) {
  console.log("ty", typeof num1);
  let a = num1 * num2;
  console.log("aaa", typeof a, a);

  console.log(num1 * num2 * num3);
}
let obj = { a: 1, b: 1 }; //error , spread only works with iteratable see
let numbers = [1, 2, 3];
let string = "123";
multiply(...numbers);
multiply(...string);

//Rest

function sum(...nums) {
  console.log(nums[0] + nums[1]);
}

var a = [2, 3];
sum(...a);

/*
//Syntax error, rest parametres must be the last formal parameter
const red = function check(a, ...rest, x, y){
  console.log(a, x,y)
}

red()
*/

function why(a, b, ...rest) {
  console.log(a, b, rest);
}

var zer = [10, 20];
why(1, 2, ...zer, 90);
