const map1 = (array, howToCombine) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(howToCombine(array[i]));
  }
  return output;
};

const add = (input) => input * 2;

let result = map1([1, 2, 3], add);
console.log(result);

let result2 = [1, 2, 3].map(add);
//In built function stored in Array.prototype object accessed via array's hidden object's property proto having link to Array.prototype object
console.log("result2", result2);
