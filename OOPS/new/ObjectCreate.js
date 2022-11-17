function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increase = function () {
  this.score++;
  return this.score;
};

const user1 = new UserCreator("Eva", 20);
console.log("aaa", user1.__proto__ == UserCreator.prototype);

console.log("user1", user1);
console.log(user1.increase());
const user2 = new UserCreator("John", 10);
console.log("user2 before", user2);
user2.increase();
console.log("user2", user2);

console.log(
  "array",
  Array.__proto__ == Function.prototype,
  Function.__proto__ == Object,
  Object.prototype
);
