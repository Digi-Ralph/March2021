// select the container
const section = document.querySelector('.container');
//select windows scroll event horizontal value.(value is 0)
let currentValue = window.scrollX;
// creat a function that checks constently the horizontal scrollbar
const update = () => {
  // check the horizontal scrollbar
  const newPos = window.scrollX;
  //substract the current scrollbar place from it's new position
  const diff = newPos - currentValue;
  // multipli the small value by 0.35
  const speed = diff * 0.35;
  //set it in the section style
  section.style.transform = 'skewX(' + speed + 'deg)';

  //update the scrollbar value to 0
  currentValue = newPos;
  //start animation again
  requestAnimationFrame(update);
};
//call the animation function
window.requestAnimationFrame(update);
// update();
