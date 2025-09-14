const heroImage = document.getElementById("hero-image");
const logoWrapper = document.getElementById("logo-wrapper");
const mainLogo = document.getElementById("main-logo");
const carouselRightArrow = document.getElementById("right-arrow");
const carouselLeftArrow = document.getElementById("left-arrow");
const carouselContainer = document.querySelector(".carousel-container");
const carousel = document.getElementById("carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
const carouselItemSize = 600;
let itemsOnScreen = Math.ceil(window.innerWidth / carouselItemSize);
let calculatedSize;
let carouselPosition = 0;

window.addEventListener("scroll", () => {
  heroImage.style.transform = `translateY(${window.scrollY * 0.9}px)`;
  logoWrapper.style.transform = `translateY(${window.scrollY * 0.5}px)`;
  mainLogo.style.scale = `${1 + window.scrollY * -0.0005}`;
});

const carouselHandler = () => {
  const screenWidth = window.innerWidth;
  itemsOnScreen = Math.ceil(screenWidth / carouselItemSize);
  calculatedSize = (screenWidth - 200) / itemsOnScreen - 20 + 20 / itemsOnScreen;

  carouselContainer.style.height = calculatedSize + "px";

  carousel.style.left = -(calculatedSize + 20) * carouselPosition + "px";

  carouselItems.forEach((item) => {
    item.style.width = calculatedSize + "px";
  });
};

carouselHandler();

const carouselPositionHandler = () => {};

carouselRightArrow.addEventListener("click", () => {
  if (carouselPosition + itemsOnScreen < 6) {
    carouselPosition += 1;
    carouselHandler();
  }
});
carouselLeftArrow.addEventListener("click", () => {
  if (carouselPosition > 0) {
    carouselPosition -= 1;
    carouselHandler();
  }
});

window.addEventListener("resize", () => {
  carouselHandler();
});
