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
// console.log("person", person);
// console.log("/////////////");

// let copiedPerson = person;
// copiedPerson.firstName = "WHy";
// // copiedPerson.address.city = "Delhi";
// console.log("person", person);
// console.log('----->')
// console.log("copied person", copiedPerson);


const myFirstObj = {
  name: "Mamata",
  age : "Red",
  addrees: {
    city: "Bamgalore",
    state: Infinity
  }
}

const mySecondObj = structuredClone(myFirstObj)




// console.log("myObj", myFirstObj);
// console.log("myObj",  mySecondObj);

// console.log('Secondobj', mySecondObj)

// const obj = {}
// obj.self = obj;
// console.log('SELF', JSON.parse(JSON.stringify(obj)))
console.log('SELF', structuredClone(obj))


const obj = {}
const obj2 = {ref: obj}
obj.self = obj2

// myFirstObj.age = 20
// myFirstObj.addrees.city = "DElhi"

// console.log('after--->');
// //after
// console.log("myObj", myFirstObj);
// console.log("myObj",  mySecondObj);
// console.log("type", myFirstObj === mySecondObj);

