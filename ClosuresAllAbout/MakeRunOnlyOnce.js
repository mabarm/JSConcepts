//make function like the video run only once
let view;
function add() {
  var count = 0;

  return function () {
    if (count == 0) {
      view = "Sunday";
      console.log("Day:", view);
      count++;
    }
  };
}

likeTheVideo = add();
likeTheVideo();
likeTheVideo();
likeTheVideo();
