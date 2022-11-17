const user3 = Object.create(null); //always return an empty object + some extra if not null given

user3.name = "Tree";
user3.score = 10;
user3.increase = function increasing() {
  user3.score++;
};

// user3.increase();
console.log(user3, user3.score);
