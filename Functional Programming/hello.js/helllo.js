/* 
Write a function called sameFrequency. Given two positive integers, find out if
two numbers have the same frequency of digits.

sameFrequency(281,182) //true
    sameFrequency(34,14) // false
    sameFrequency(3589578, 5879385) // true
    sameFrequency(22,222) // false
*/

const sameFrequency = (input1, input2) => {
  let countOfDigits1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let countOfDigits2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  while (input1 > 0) {
    let num = input1 % 10; // 4;
    countOfDigits1[num]++;
    input1 = Math.floor(input1 / 10); //3
  }

  while (input2 > 0) {
    let num = input2 % 10; // 4;
    countOfDigits2[num]++;
    input2 = Math.floor(input2 / 10); //1
  }

  let isEqual = true;

  for (let i = 0; i <= 9; i++) {
    if (countOfDigits1[i] != countOfDigits2[i]) {
      isEqual = false;
      break;
    }
  }
  if (isEqual) {
    return true;
  }
  return false;
};

console.log(sameFrequency(281, 182)); //true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
