const copyAndMultiplyBy2 = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * 2);
  }
  return result;
};

const copyAndDivideBy2 = (array) => {
  //array parameter will be assigned to argument coming i.e [1,2,3]
  const result = []; //result label assigned to empty array
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] / 2);
  }
  return result; // return result's value which is array [0.5, 1, 1.5]
};

const array = [1, 2, 3]; //arrray assigned value [1,2,3]
const multiplyBy2 = copyAndMultiplyBy2(array); //array replaced by [1,2,3] // multiply will call command f, that is invoing the function
// execution context of copyAndMultiplyBy2([1,2,3]) will be created
//and have the value returned by the function assigned to it.
const divideBy2 = copyAndDivideBy2(array);
console.log(multiplyBy2, divideBy2);

// --- But this broke's dry principle//
//So composing examle compose.js //
