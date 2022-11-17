const copyAndManipulate = (array, instructions) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(instructions(array[i])); // evaluate instructions and push it in result
  }
  return result;
};

const multiplyBy2 = (input) => input * 2;
const divideBy2 = (input) => input / 2;

const array = [1, 2, 3];
const mulOutput = copyAndManipulate(array, multiplyBy2);
const divOutput = copyAndManipulate(array, divideBy2);

console.log(mulOutput, divOutput);
//--Compose code above--//
