const user = {
  name: "Sam",
  age: 10,
};

function showUser() {
  console.log(`${this.name} has ${this.age} details`);
}

showUser.call(user);
