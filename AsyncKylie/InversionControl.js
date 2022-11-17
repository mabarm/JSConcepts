//line 1
setTimeout(function () {
  //line3
}, 1000);
//line 2

var isCalled = false;
function trackCheckout(purchaseInfo) {
  function finish() {
    if (!isCalled) {
      purchaseInfo = checkCard(purchaseInfo);
      isCalled = true;
      showThankyouPage(purchaseInfo);
    }
  }
  return finish;
}

function checkCard(price) {
  return price + 10;
}

function showThankyouPage(price) {
  console.log("Thanks", price);
}
const track = trackCheckout(10);
track();
track();
track();

//what if checkCard called multiple times, by some third party we have given access to
//person credit card more debited than needed
//But what if never called?

//So lot of problem in callback, inversion of control
