// Define the images
const images = [
  "../assets/img/bg1.jpg",
  "../assets/img/bg2.jpg",
  "../assets/img/bg3.jpg",
];

// App state
let index = 0;
const max = images.length;

// Get the DOM elements
const containerElement = document.querySelector(".main");
const prevSlideButton = document.querySelector(".prev-slide");
const nextSlideButton = document.querySelector(".next-slide");

// Listen for arrow click events
prevSlideButton.addEventListener("click", () => {
  index--;
  setImageIndex();
  changeBackgroundImage(images[index], containerElement);
});

nextSlideButton.addEventListener("click", () => {
  index++;
  setImageIndex();
  changeBackgroundImage(images[index], containerElement);
});

function setImageIndex() {
  if (index < 0) index = max - 1;
  if (index === max) index = 0;
}

function changeBackgroundImage(backgroundImage, element) {
  element.style.backgroundImage = `url(${backgroundImage})`;
}
