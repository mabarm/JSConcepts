//Empty object and dot notation

const user = {};
user.name = "Ryan";
user.score = 10;
user.increase = function increasing() {
  user.score++;
};

console.log(user);
user.increase();

console.log(user.score);
