function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

// UserCreator.prototype.increase = function () {
//   function add() {
//     this.score++;
//   }
//   add(); //no left hand side object or call, apply , bind so this refers to window
// };
UserCreator.prototype.increase = function () {
  const add = () => {
    this.score++; //as arrow function to when add is defined that is in increase which has this user1 for user1.increase()
  };
  add();
};

const user1 = new UserCreator("Eva", 20);
console.log("user1", user1);
user1.increase(); //this refers to user1 //left handside of dot
console.log("user1", user1);
