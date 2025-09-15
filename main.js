const heroImage = document.getElementById("hero-image");
const logoWrapper = document.getElementById("logo-wrapper");
const mainLogo = document.getElementById("main-logo");
const carouselRightArrow = document.getElementById("right-arrow");
const carouselLeftArrow = document.getElementById("left-arrow");
const carouselBackground = document.getElementById("carusel-background");
const carouselContainer = document.getElementById("carousel-container");
const carousel = document.getElementById("carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
const carouselIndicator = document.getElementById("carousel-indicator");
const carouselIndicatorSlider = document.getElementById("carousel-indicator-slider");
const carouselItemSize = 650;
let itemsOnScreen = Math.ceil(window.innerWidth / carouselItemSize);
let calculatedSize;
let carouselPosition = 0;
const totalItems = 6;
let padding = window.innerWidth * 0.05;
carouselBackground.style.paddingLeft = `0 ${padding}px`;
carouselBackground.style.paddingRight = `0 ${padding}px`;
carouselIndicatorSlider.style.width = `${(itemsOnScreen / totalItems) * 100}%`;
const tabAlanWake = document.getElementById("tab-alan-wake");
const tabSagaAnderson = document.getElementById("tab-saga-anderson");
const characterPicture = document.getElementById("character-picture");
const descriptionAW = document.getElementById("description-alan-wake");
const descriptionSA = document.getElementById("description-saga-anderson");
let isTabAW = true;
let isTabSA = false;
const tabAlanStyle = tabAlanWake.style;
const tabSagaStyle = tabSagaAnderson.style;

const tabHandler = () => {
  isTabAW ? tabAlanStyle.color = "#97ac9f" : tabAlanStyle.color = "#515854";
  isTabSA ? tabSagaStyle.color = "#97ac9f" : tabSagaStyle.color = "#515854";

  if(isTabAW){
    characterPicture.classList.add("alan-wake-background")
    characterPicture.classList.remove("saga-anderson-background");
  } else if (isTabSA) {
    characterPicture.classList.add("saga-anderson-background")
    characterPicture.classList.remove("alan-wake-background");
  }
}
tabHandler()

tabSagaAnderson.addEventListener("click",()=>{
  console.log("click")
  isTabAW = false;
  isTabSA = true;
  tabHandler()
})
tabAlanWake.addEventListener("click",()=>{
  isTabAW = true;
  isTabSA = false;
  tabHandler()
})

const setArrowsColor = () => {
  if (carouselPosition + itemsOnScreen >= totalItems) {
    carouselRightArrow.style.color = "#515854";
    carouselLeftArrow.style.color = "#97ac9f";
  } else if (carouselPosition < 1) {
    carouselLeftArrow.style.color = "#515854";
    carouselRightArrow.style.color = "#97ac9f";
  } else {
    carouselRightArrow.style.color = "#97ac9f";
    carouselLeftArrow.style.color = "#97ac9f";
  }
};
setArrowsColor();

window.addEventListener("scroll", () => {
  heroImage.style.transform = `translateY(${window.scrollY * 0.9}px)`;
  logoWrapper.style.transform = `translateY(${window.scrollY * 0.5}px)`;
  mainLogo.style.scale = `${1 + window.scrollY * -0.0005}`;
});

const carouselHandler = () => {
  if (carouselPosition + itemsOnScreen > totalItems) {
    carouselPosition = totalItems - itemsOnScreen;
  } else if (carouselPosition < 0) {
    carouselPosition = 0;
  }
  carousel.style.left = -(calculatedSize + 20) * carouselPosition + "px";
  setArrowsColor();
  padding = window.innerWidth * 0.05;
  carouselBackground.style.paddingLeft = padding + "px";
  carouselBackground.style.paddingRight = padding + "px";
  carouselIndicatorSlider.style.marginLeft = `${(carouselPosition / totalItems) * 100}%`;
};
carouselHandler();

const resizeHandler = () => {
  const screenWidth = window.innerWidth;
  itemsOnScreen = Math.ceil(screenWidth / carouselItemSize);
  calculatedSize = (screenWidth - padding * 2) / itemsOnScreen - 20 + 20 / itemsOnScreen;
  carouselContainer.style.height = calculatedSize + "px";
  carouselItems.forEach((item) => {
    item.style.width = calculatedSize + "px";
  });
};
resizeHandler();

carouselRightArrow.addEventListener("click", () => {
  if (carouselPosition + itemsOnScreen < totalItems) {
    carouselPosition += itemsOnScreen;
    carouselHandler();
  }
});
carouselLeftArrow.addEventListener("click", () => {
  if (carouselPosition > 0) {
    carouselPosition -= itemsOnScreen;
    carouselHandler();
  }
});
carouselIndicator.addEventListener("click", (e) => {
  const rect = carouselIndicator.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const segmentClick = 1 - (rect.width - clickX) / rect.width; // 0 to 1
  carouselPosition = Math.floor((segmentClick * totalItems) / itemsOnScreen) * itemsOnScreen;
  carouselHandler();
});

window.addEventListener("resize", () => {
  resizeHandler();
  carouselHandler();
  carouselIndicatorSlider.style.width = `${(itemsOnScreen / totalItems) * 100}%`;
});
