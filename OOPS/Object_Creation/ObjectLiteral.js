//Object literal

const user = {
  name: "Name1",
  score: 10,
  increase: function increasing() {
    this.score++;
  },
};

console.log("Before", user.score);

user.increase();
console.log("After", user.score);
