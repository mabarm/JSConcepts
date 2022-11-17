class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increase() {
    this.score++;
  }
  login() {
    return this.name;
  }
}

const user1 = new UserCreator("Eva", 20);
console.log("user1", user1);
user1.increase();
console.log("user1", user1);
console.log("user1", user1.login());

const user2 = new UserCreator("John", 6);
console.log("user2", user2);
user2.increase();
console.log("user2", user2);
console.log("user2", user2.login());

//class syntactic sugar over function object combo  prototype proto
