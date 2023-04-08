const person = {
  firstName: "John",
  lastName: "Doe",
  address: {
    city: "GY",
  },
  phoneNo: {
    one: 10,
  },
};

// let secondPerson = { ...person };

console.log("person", person);
console.log("//////////////////");
// console.log("second person", secondPerson);

// let thirdPerson = { ...person, firstName: "Tom" };
// console.log("third person", thirdPerson);
// console.log("second person", secondPerson);
// console.log("person", person);

let fourthPerson = { ...person };
fourthPerson.firstName = "Fourth";
fourthPerson.address.city = "Delhi";
fourthPerson.phoneNo = 100;
console.log("fourth person", fourthPerson);
// console.log("second person", secondPerson);
console.log("person", person);
