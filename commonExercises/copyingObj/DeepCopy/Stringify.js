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
const secondPerson = JSON.parse(JSON.stringify(person));

console.log("person", person);
// console.log("second person", secondPerson);
console.log("/////////////");

secondPerson.firstName = "tomm";
secondPerson.address.city = "DEll";
secondPerson.phoneNo = 100;
console.log("person", person);
console.log("second person", secondPerson);
