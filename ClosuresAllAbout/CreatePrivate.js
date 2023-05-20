//q2 : Write a function that allows this

function createBase(base) {
  function add(num) {
    return num + base;
  }
  return add;
}

var addSix = createBase(6);

console.log(addSix(10)); //returns 16
console.log(addSix(21)); //return 27

//or

function createBase1(base) {
  return function (num) {
    return num + base;
  };
}

addSix1 = createBase(6); //so base is always 6
console.log(addSix1(10));
