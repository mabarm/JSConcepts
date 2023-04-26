function rev(left, right, st) {
  console.log("reee", left, right);
  let rev = "";
  for (let j = st.length - 1; j >= 0; j--) {
    rev += st[j];
  }
  //   while (left < right) {
  //     let temp = st[left];
  //     console.log("mm", temp);
  //     console.log("qqq1", st[left], st[right]);
  //     st[left] = st[right];
  //     st[right] = temp;
  //     console.log("qqq2", st[left], st[right]);
  //     right--;
  //     left++;
  //   }
  console.log("returned", st);
  //   }

  return rev;
}
function reverse(str) {
  // your code goes here
  let ans = [];
  let res = str.split(" ");
  console.log("ee", res, res.length, res[0], res[1]);
  for (let i = 0; i < res.length; i++) {
    console.log("ss", res[i]);
    let temp = rev(0, res[i].length - 1, res[i]);
    console.log("teee", temp);
    ans.push(temp);
  }
  //array to string
  let hello = ans.join(" ");
  return hello;
}

let ans = reverse("JavaScript is awesome");
console.log("anss", ans);

let s = "";
s[0] = "v";
console.log("opop", s);
