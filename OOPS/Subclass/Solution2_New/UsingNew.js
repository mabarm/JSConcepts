function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increase = function increasing() {
  this.score++;
};

function PaidUserCreator(name, score, amount) {
  UserCreator.call(this, name, score);
  this.amount = amount;
}

PaidUserCreator.prototype = Object.create(UserCreator.prototype);
//Before needed see
PaidUserCreator.prototype.amountDecrease = function decreasing() {
  this.amount--;
};

const paidUser = new PaidUserCreator("Ryan", 10, 500);
console.log("paidUser", paidUser);
paidUser.increase();
console.log("after increase", paidUser);
paidUser.amountDecrease();
console.log("after decrease", paidUser);

const objA = {
  hello: 10,
};

console.log("checking", objA.__proto__ == Object.prototype);
console.log("checking", objA.__proto__ == Object.prototype);
