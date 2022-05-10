let sliderImages = document.querySelectorAll(".slide");

// let sliderImages = [
//   "images/cameron.jpg",
//   "images/ducks.jpg",
//   "images / pool.jpg",
// ];

// let arrowLeft = document.querySelector("#arrow-left");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
let current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}
console.log(arrowRight);
// Left arrow click
arrowLeft.addEventListener("click", () => {
  console.log("left");
  if (current == 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", () => {
  console.log("right");
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

function slideAuto() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
  if (current === sliderImages.length - 1) {
    current = -1;
  }
}

setInterval(slideAuto, 5000);
