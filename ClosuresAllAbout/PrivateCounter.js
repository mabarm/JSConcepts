function makeCounter() {
  var _counter = 0; //convention for private
  function increase() {
    _counter++;
  }

  function decrease() {
    _counter--;
  }

  function reset() {
    _counter = 0;
  }

  function print() {
    console.log(_counter);
  }

  return { increase, decrease, reset, print };
}

const first = makeCounter();
first.increase();
first.increase();
// first.decrease();
first.print();

const second = makeCounter();
second.decrease();
second.print();
first.print();
