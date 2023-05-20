function hello(first, second) {
  let ans = first + second;
  let fourth = new Promise((resolve, reject) => {
    if (ans) {
      resolve(ans);
    } else {
      reject("Incorrect param");
    }
  });
  return fourth;
}
//overflow check

hello(-1, 1)
  .then((a) => {
    console.log("aa", a);
  })
  .catch((err) => {
    console.log("bb", err);
  });
