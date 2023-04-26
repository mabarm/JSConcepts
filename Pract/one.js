let user1 = {
  name: "Pjil",
  score: 10,
  increase: function inc() {
    user1.score++;
  },
};

user1.increase();
console.log("ss", user1);

/////////

const user2 = {};
user2.name = "TTT";
user2.increase = function () {
  user2.name = "ooo";
};

user2.increase();
console.log(user2);

////////////

const user3 = Object.create(null);
user3.name = "usss";
console.log(user3);

//////////

function userCreator(name) {
  const user = {};
  user.name = name;
  user.increase = function () {
    user.name = "red";
  };
  return user;
}

const user4 = userCreator("Tree");
const user5 = userCreator("sss");
console.log("user4", user4);

//////////////////////1 method

const functionStore = {
  increase: function () {
    this.value++;
  },
};

function userCreator1(name, value) {
  const obj = Object.create(functionStore);
  obj.name = name;
  obj.value = value;
  return obj;
}

const user6 = userCreator1("Sima", 20);
console.log("user6", user6);
user6.increase();
console.log("user6", user6);

console.log(
  "user6 pr",
  user6.prototype,
  userCreator.prototype,
  userCreator1.prototype
);

//object has proto property
//function in their object form has property prototype which have proto property

console.log(Object.prototype);

///////////////2 method using new and not using class
function ObjectCreator(name, score) {
  this.name = name;
  this.score = score;
}

ObjectCreator.prototype.increase = function () {
  this.score--;
};

const hello2 = new ObjectCreator("RRR", 100);
console.log("reee", hello2);
hello2.increase();
console.log("reee", hello2);

//////////////3 using new and class
class ObjectCreator1 {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increase() {
    this.score++;
  }
}

const hello3 = new ObjectCreator1("swksmw", 500);

console.log("rweee", hello3);
hello3.increase();
console.log("rweee", hello3);
