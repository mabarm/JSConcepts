//Object creation using function

const userCreator = function (name, score) {
  const obj = {};
  obj.name = name;
  obj.score = score;
  obj.increase = function increasing() {
    obj.score++;
  };
  return obj;
};

const user1 = userCreator("eva", 10);
const user2 = userCreator("Ryan", 22);

console.log("user1", user1);
// user1.increase();
console.log("user1", user1, user1.score);

console.log("user2", user2);
user2.increase();
console.log("user1", user1.score, "user2", user2.score);

//duplication of functions which is a problem
