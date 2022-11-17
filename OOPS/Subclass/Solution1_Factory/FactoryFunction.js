function UserCreator(name, score) {
  const obj = Object.create(userFunctionStore);
  obj.name = name;
  obj.score = score;
  return obj;
}

const userFunctionStore = {
  increase: function increasing() {
    this.score++;
  },
};

function paidUserCreator(name, score, amount) {
  const paidObj = UserCreator(name, score);
  paidObj.amount = amount;
  Object.setPrototypeOf(paidObj, paidUserFunctionStore);
  return paidObj;
}

const paidUserFunctionStore = {
  amountDecrease: function amountSetting() {
    this.amount--;
  },
};
Object.setPrototypeOf(paidUserFunctionStore, userFunctionStore); //child parent- sub, base
const paidUser = paidUserCreator("Eva", 20, 500);
console.log(paidUser);
paidUser.increase();
console.log("after increase", paidUser);

paidUser.amountDecrease();
console.log("after amount", paidUser);
