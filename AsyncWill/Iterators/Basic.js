//Basic example of function returning another function

function createNewFunction() {
  function add(num) {
    return num + 2;
  }
  return add;
}

const newFunction = createNewFunction();
const result = newFunction(10);

console.log(result);

const result1 = newFunction(3);
console.log("result1", result1);
