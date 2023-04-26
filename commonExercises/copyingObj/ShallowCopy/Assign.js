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

const secondPerson = Object.assign({}, person);
console.log("person", person);
console.log("/////////////");
// console.log("second person", secondPerson);

secondPerson.firstName = "Dani";
secondPerson.address.city = "DEll";
secondPerson.phoneNo = 100;
console.log("person", person);
console.log("second person", secondPerson);
