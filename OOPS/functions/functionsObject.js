//Functions are both object and functions
//have hidden property prototype which is again an object

function multiply() {
  let name = "Hello";
  let score = 10;

  console.log(score);
}

multiply.prop = "ObjProp";
multiply();
console.log(multiply);

function add(num) {
  return num + 2;
}
console.log(add(100));
add.summed = { Sum: 10 };
console.log(add.summed);
