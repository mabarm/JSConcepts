const numbers = {
  num1: 10,
  num2: 10,
  sum: function () {
    console.log("in sum ", this == numbers, this);

    function calculate() {
      console.log("in calculate", this == numbers, this);
      console.log("numbers sum", this.num1 + this.num2);
    }
    return calculate();
  },
};

//understand it more
///One solution is to change manually the context of calculate() to the desired one by calling calculate.call(this) (an indirect invocation of a function, see section 5.):

numbers.sum();

//1 solution
const numbers1 = {
  num1: 10,
  num2: 10,
  sum: function () {
    console.log("in sum ", this == numbers, this);

    function calculate() {
      console.log("in calculate", this == numbers, this);
      console.log("numbers sum", this.num1 + this.num2);
    }
    return calculate.call(this);
  },
};
numbers1.sum();

//2nd solution
const numbers2 = {
  num1: 10,
  num2: 10,
  sum: function () {
    console.log("in sum 2", this == numbers, this);

    const calculate = () => {
      console.log("in calculate", this == numbers, this);
      console.log("numbers sum", this.num1 + this.num2);
    };
    return calculate();
  },
};
//The arrow function resolves this lexically, or, in other words, uses this value of numbers.sum() method.
numbers2.sum();
