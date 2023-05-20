"use strict";

function hello() {
  console.log("hel", this);
}

hello();

(function red() {
  "use strict";
  console.log("dance", this);
})();

const numbers = {
  num1: 10,
  num2: 10,
  sum: function () {
    console.log("in sum ", this == numbers);

    function calculate() {
      console.log("in calculate", this == numbers);
      return this.num1 + this.num2;
    }
    return calculate();
  },
};

numbers.sum();
