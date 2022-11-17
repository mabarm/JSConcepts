const array = [1, 2, 3];
const copyArrayMulBy2 = (inputArray) => {
  let outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    outputArray.push(inputArray[i] * 2);
  }
  return outputArray;
};

const result = copyArrayMulBy2(array);
console.log(result);
