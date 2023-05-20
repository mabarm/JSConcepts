let person = {
  name: "Ram",
  age: 20,
  address: {
    city: "Ghy",
    country: "India",
    other: {
      continent: "Asia",
    },
  },
};

function flattenObj(arr, parent, res = {}) {
  for (let item in arr) {
    let propertyName = parent ? parent + "_" + item : item;

    if (typeof arr[item] == "object") {
      flattenObj(arr[item], propertyName, res);
    } else {
      res[propertyName] = arr[item];
    }
  }
  return res;
}
// console.log(flattenObj(person));

function flattenObectSecond(obj) {
  const newObj = {};
  function getNewObj(obj, parent) {
    for (let item in obj) {
      if (typeof obj[item] == "object") {
        getNewObj(obj[item], parent + "_" + item);
      } else {
        newObj[parent + "_" + item] = obj[item];
      }
    }
  }
  getNewObj(obj, "person");
  return newObj;
}

// console.log(flattenObectSecond(person));

function flattenObectThird(obj) {
  const newObj = {};
  function getNewObj(obj, parent) {
    Object.keys(obj).forEach((item) => {
      if (typeof obj[item] == "object") {
        getNewObj(obj[item], parent + "_" + item);
      } else {
        newObj[parent + "_" + item] = obj[item];
      }
    });
  }
  getNewObj(obj, "person");
  return newObj;
}

console.log(flattenObectThird(person));

function flattenObectWithoutParent(obj) {
  const newObj = {};
  function getNewObj(obj, parent) {
    Object.keys(obj).forEach((item) => {
      if (typeof obj[item] == "object") {
        getNewObj(obj[item], parent + "_" + item);
      } else {
        newObj[item] = obj[item];
      }
    });
  }
  getNewObj(obj, "person");
  return newObj;
}

console.log(flattenObectWithoutParent(person));
