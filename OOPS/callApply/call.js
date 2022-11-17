const obj1 = {
  num: 10,
  increase: function () {
    this.num++;
  },
  add: function (a, b) {
    return a + b;
  },
};

const obj2 = {
  name: "Ryan",
  num: 100,
};

obj1.increase();
console.log(obj1);

obj1.increase.call(obj2);
console.log(obj2);

console.log("add", obj1.add(10, 20));

console.log("add", obj1.add.call(obj2, 100, 200));
console.log("add2", obj1.add.apply(obj2, [100, 2000]));
obj1.increase.apply(obj2);
console.log(obj2);

//call changes the this in the execution context of the funcion
//apply needs argumnets in array
//Acts as function borrowing from some other obj
//call is in Function.prototype
