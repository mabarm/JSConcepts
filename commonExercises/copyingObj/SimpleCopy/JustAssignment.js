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
console.log("person", person);
console.log("/////////////");

let copiedPerson = person;
copiedPerson.firstName = "WHy";
copiedPerson.address.city = "Delhi";
console.log("person", person);
console.log("copied person", copiedPerson);
