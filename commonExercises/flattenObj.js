// Declare an object

// Declare an object
let obj = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: +91 - 999999999,
  mentor: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: "GFG",
  },
  why: {
    1: "dde",
    w: {
      oo: "dwe",
      dsdc: {
        abc: 10,
      },
    },
  },
};

let secondObj = {
  user: {
    key_value_map: {
      CreatedDate: "123424",
      Department: {
        Name: "XYZ",
      },
      Hello: [1, 2, 3],
      REd: {
        10: "10",
        s: {},
      },
      dance: [],
    },
  },
};

const flattenObj = (obj) => {
  let ans = {};
  for (let key in obj) {
    let value = obj[key];
    if (typeof value !== "object" || Array.isArray(value)) {
      //if array typeof is objecta ans we want its value as it is not flattening
      ans[key] = value;
    } else {
      const temp = flattenObj(value);
      for (let tempkeys in temp) {
        let tempValue = temp[tempkeys];
        ans[key + "." + tempkeys] = tempValue;
      }
    }
  }
  return ans;
};

// console.log(flattenObj(obj));
console.log(flattenObj(secondObj));
// console.log(typeof []);
