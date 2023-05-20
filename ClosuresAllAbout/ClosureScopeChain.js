function sum(a) {
  return function red(b) {
    return function dance(c) {
      return a + b + c;
    };
  };
}

console.log(sum(10)(20)(30));

let num = sum(10)(20);
console.log(num(30));
