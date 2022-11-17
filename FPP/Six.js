//Chaining output not array

const add = (num) => num + 2;
const mul = (num) => num * 10;
const divide = (num) => num / 5;

let added = add(8);
let multiplied = mul(added);
let divided = divide(multiplied);

console.log(divided);

//Referential transparent functions :
// we can replace the function call with its functions with no side effect

const result2 = divide(mul(add(8)));
console.log("result2", result2);

//----------------------------------------------------------//

const reducer = (array, howToCombine, accumulator) => {
  for (let i = 0; i < array.length; i++) {
    accumulator = howToCombine(accumulator, array[i]);
  }
  return accumulator;
};

const runFunctionOnInput = (num, inputFun) => {
  return inputFun(num);
};

const result3 = reducer([add, mul, divide], checkRun, 8);
console.log("result3", result3);

// const result4 = [add, mul, divide].reduce(runFunctionOnInput, 8);
// console.log("result4", result4);
