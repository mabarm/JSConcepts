function userCreator(name, score) {
  const obj = Object.create(functionCreator);
  //Object.create method overrides default __proto__ to Object.prototype to functionCreator's,
  //just intercedes the chain
  obj.name = name;
  obj.score = score;
  return obj;
}

const functionCreator = {
  increase: function increasing() {
    this.score++;
    return this.score;
  },
};

const user1 = userCreator("Eva", 1);
console.log("aaa", user1.__proto__ == functionCreator);

const user2 = userCreator("Rre", 10);
console.log(user1);
user1.increase();
console.log(user1);
