const array = [1, 2, 3];

const copyArrayManipulate = (inputArray, operatorFunction) => {
  let outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    outputArray.push(operatorFunction(inputArray[i]));
  }
  return outputArray;
};

const multiplyBy2 = (inputNum) => {
  return inputNum * 2;
};

const result = copyArrayManipulate(array, multiplyBy2);
console.log(result);

const divideBy2 = (inputNum) => {
  return inputNum / 2;
};

const result2 = copyArrayManipulate(array, divideBy2);
console.log(result2);
