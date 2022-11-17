const array = [2, 4, 6];

const copyDivideArrayBy2 = (inputArray) => {
  let outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    outputArray.push(inputArray[i] / 2);
  }
  return outputArray;
};

const result = copyDivideArrayBy2(array);
console.log(result);
