(function hello() {
  console.log("I am iife");
})();

(() => {
  console.log("I am arrow iife");
})();

(async () => {
  console.log("I am async iife");
})();

let arr = [10, 20, 30];
for (var i = 0; i <= 2; i++) {
  console.log(arr[i]);
}

(function () {
  let a = 10;
  let b = 20;
})();

function getBalance(amount) {
  ((bal) => {
    if (amount < bal) {
      amount += 10;
      return "Wrong";
    } else return "Right";
  })(amount);
  return {
    checkBalance() {
      console.log("ss");
    },
  };
}

let a = getBalance(100);
console.log(a);
a.checkBalance();
