function multiplyBy2(num) {
  return num * 2;
}

multiplyBy2(10);

console.log(multiplyBy2.toString());
console.log(multiplyBy2.hasOwnProperty("num"));
console.log(Function.prototype.__proto__ == Object.prototype);

//prototype's proto obj linked to Object not the function's object's proto (see though verify)
