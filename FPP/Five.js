const reduce1 = (array, howToCombine, accumulator) => {
  for (let i = 0; i < array.length; i++) {
    accumulator.push(howToCombine(array[i]));
  }
  return accumulator;
};

const divide = (input) => input / 2;

const result = reduce1([1, 2, 3], divide, []);
console.log(result);

const add = (num1) => num1 + 10;
// 110
// 200 + 110 = 310
// 310 + 300 = 610

// const result2 = [10, 2, 3].reduce(add, []);
// console.log("result2", result2);

const greaterThan10 = (input) => input > 20;

let filterToArray = [11, 1, 20];
const result3 = filterToArray.filter(greaterThan10);
console.log(result3, filterToArray);

// [21,11,30]
const result4 = filterToArray.map(add, 10).filter(greaterThan10);
console.log("result4", result4);

//reduce see more
//all inbuilt HOF see more


/*
Array.prototype.myReduce = function(callback, initialValue){
  
  let acc = initialValue ? initialValue : this[0];
  for( let index = initialValue ? 0 : 1 ; index<this.length;index++){
     acc = callback(acc, this[index], index, this)
  }
  return acc;
}

let ans = arr.myReduce(callback,0)
console.log("ans", ans);



*/