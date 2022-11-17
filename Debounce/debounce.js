let counter = 0;

function getData() {
  counter++;
  console.log("get data called", counter);
}

function debounce(func, delay) {
  let timer;
  return function betterOne() {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => getData.apply(context, arguments), [delay]);
  };
}
const betterData = debounce(getData, 3000);
