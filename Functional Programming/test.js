// // console.log(mul(2)(3)(4)); // output : 24
// // console.log(mul(4)(3)(4)); // output : 48

// const multiple = (num1, product) => {
//   // if(index == 2)
//   //  return product;
//   product = product * num1;
//   return product;
// };

// const mul = (n1, n2, n3) => {
//   let array = [n1, n2, n3];
//   let prod = 1;
//   for (let i = 0; i < 2; i++) {
//     prod = multiple(array[i], prod);
//   }
//   return prod;
// };

// mul(2)(3)(4);

// const muls = (input1, input2) => {
//   return input1 * input2;
// };

// const checkMul = (n1, n2, n3) => {
//   for (let i = 0; i < 2; i++) {}
// };

var employee = {
  name: "Nishant",
  salary: 245678,
  address: {
    addressLine1: "BITS Pilani",
    addressLine2: "Vidya Vihar",
    phoneNumber: {
      workPhone: 7098889765,
      homePhone: 1234567898,
    },
  },
};

const deepClone = (obj) => {
  let newEmployee = {};

  for (let key in obj) {
    console.log("mamata1a", key);
    if (typeof obj[key] === "object") {
      let keyGot = deepClone(obj[key]);
      console.log("mamata2 keY", keyGot);
      newEmployee[key] = keyGot;
    } else {
      newEmployee[key] = obj[key];
    }
    return newEmployee;
  }
};

var newObject = deepClone(employee);
console.log(newObject);

/*

console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48
Yash Bothra3:33 PM
var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
delete trees[3];
console.log(trees.length);
Yash Bothra3:35 PM
var z = 1, y = z = typeof y;
console.log(y);
// NFE (Named Function Expression)
var foo = function bar() { return 12; };
typeof bar();
Yash Bothra3:37 PM
var foo = function() {
  // Some code
}
function bar () {
  // Some code
}
Yash Bothra3:40 PM
var employee = {
	name : 'Nishant',
	salary : 245678,
	address : {
		addressLine1 : 'BITS Pilani',
		addressLine2 : 'Vidya Vihar'.
		phoneNumber: {
		  workPhone: 7098889765,
		  homePhone: 1234567898
		}
	}
}
var newObject = deepClone(obj);
Yash Bothra4:00 PM
ypeof object[key] === 'object'

*/
