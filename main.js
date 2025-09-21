const heroSection = document.getElementById("hero-section");
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
const tabPacificNW = document.getElementById("tab-pacific-nw");
const tabDarkPlace = document.getElementById("tab-dark-place");
let isTabPNW = true;
let isTabDP = false;
const descriptionPNW = document.getElementById("description-pacific-nw");
const descriptionDP = document.getElementById("description-dark-place");
const scenePicture = document.getElementById("scene-picture");
const header = document.getElementById("header-wrapper");
const headerBar = document.getElementById("header-bar");
const burgerBtn = document.getElementById("burger-btn");
const burgerMenu = document.getElementById("burger-menu");
let isBurgerBtnActive = false;
const logoHeader = document.getElementById("logo-header");
const buyElement = document.getElementById("buy-element");
const language = document.getElementById("language");
const video = document.getElementById("video");
const playBtn = document.getElementById("play-btn");
const videoWalpaper = document.getElementById("video-walpaper");
const videoSection = document.getElementById("video-section");
let isVideoEnabled = false;
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-img");
const modalExit = document.getElementById("modal-exit-btn");
const modalLeft = document.getElementById("modal-left-arrow");
const modalRight = document.getElementById("modal-right-arrow");
let ismodalEnabled = false;
const modalImageList = [
  "/images/AWII_Launch_054.png",
  "/images/AWII_Launch_049.png",
  "/images/AWII_Launch_020.png",
  "/images/AWII_Launch_16-10-23_036.png",
  "/images/AWII_Launch_16-10-23_013.png",
  "/images/AWII_Launch_009.png",
];
let modalImgIndex = 0;

// MARK: functions

const scrolling = (bool) => {
  if (typeof bool === "boolean") {
    document.body.style.overflow = bool ? "auto" : "hidden";
  } else {
    console.error("bad argument for scrolling()");
  }
};

const isElementVisible = (el) => {
  // returns bool if element Y is visible on screen
  const rect = el.getBoundingClientRect();
  // console.log(`top: ${rect.top},  bottom: ${rect.bottom}, window heitght: ${window.innerHeight}`);
  // console.log(rect.top < window.innerHeight && rect.bottom > 0);
  return rect.top < window.innerHeight && rect.bottom > 0;
};

// MARK: handlers

const modalHandler = (index) => {
  if (ismodalEnabled) {
    if (index >= modalImageList.length) return;
    if (index < 0) return;
    modalRight.style.display = index == modalImageList.length - 1 ? "none" : "block";
    modalLeft.style.display = index == 0 ? "none" : "block";
    modalImgIndex = index;
    modal.style.display = "flex";
    modalImage.src = modalImageList[index];
    scrolling(false);
  } else {
    modal.style.display = "none";
    scrolling(true);
  }
};
modalHandler();

const videoHandler = () => {
  if (isVideoEnabled) {
    videoSection.classList.add("hdtv-aspect-ratio");
    videoSection.classList.remove("cinematic-aspect-ratio");
    setTimeout(() => {
      video.style.display = "block";
      videoWalpaper.style.display = "none";
      video.play();
    }, 500);
  } else {
    if (document.fullscreenElement === video) document.exitFullscreen();
    videoWalpaper.style.display = "flex";
    video.style.display = "none";
    videoSection.classList.add("cinematic-aspect-ratio");
    videoSection.classList.remove("hdtv-aspect-ratio");
  }
};
videoHandler();

const burgerMenuHandler = () => {
  if (isBurgerBtnActive) {
    burgerBtn.classList.add("bbtn-active");
    burgerMenu.style.opacity = "1";
    scrolling(false);
    burgerMenu.style.top = "-0";
    logoHeader.style.filter = " brightness(0%)";
    document.documentElement.style.setProperty("--var-header-color", "#000000ff");
    buyElement.style.display = "none";
    language.style.display = "none";
  } else {
    burgerBtn.classList.remove("bbtn-active");
    scrolling(true);
    burgerMenu.style.top = "-100vh";
    logoHeader.style.filter = " brightness(100%)";
    document.documentElement.style.setProperty("--var-header-color", "#97ac9f");
    buyElement.style.display = "flex";
    language.style.display = "flex";

    setTimeout(() => {
      burgerMenu.style.opacity = "0";
    }, 300);
  }
};
burgerMenuHandler();

const tabHandler = () => {
  isTabAW ? tabAlanWake.classList.remove("tab-disabled") : tabAlanWake.classList.add("tab-disabled");
  isTabSA ? tabSagaAnderson.classList.remove("tab-disabled") : tabSagaAnderson.classList.add("tab-disabled");
  isTabPNW ? tabPacificNW.classList.remove("tab-disabled") : tabPacificNW.classList.add("tab-disabled");
  isTabDP ? tabDarkPlace.classList.remove("tab-disabled") : tabDarkPlace.classList.add("tab-disabled");

  if (isTabAW) {
    characterPicture.classList.add("alan-wake-background");
    characterPicture.classList.remove("saga-anderson-background");
    descriptionSA.style.display = "none";
    descriptionAW.style.display = "flex";
  } else if (isTabSA) {
    characterPicture.classList.add("saga-anderson-background");
    characterPicture.classList.remove("alan-wake-background");
    descriptionAW.style.display = "none";
    descriptionSA.style.display = "flex";
  }

  if (isTabPNW) {
    scenePicture.classList.add("pacific-nw-background");
    scenePicture.classList.remove("dark-place-background");
    descriptionPNW.style.display = "flex";
    descriptionDP.style.display = "none";
  } else if (isTabDP) {
    scenePicture.classList.add("dark-place-background");
    scenePicture.classList.remove("pacific-nw-background");
    descriptionDP.style.display = "flex";
    descriptionPNW.style.display = "none";
  }
};
tabHandler();

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

const heroSectionHandler = () => {
  if (isElementVisible(heroSection)) {
    heroImage.style.transform = `translateY(${window.scrollY * 0.9}px)`;
    logoWrapper.style.transform = `translateY(${window.scrollY * 0.5}px)`;
    mainLogo.style.scale = `${1 + window.scrollY * -0.0005}`;
  }
};

let prevScrollYvalue = 0.0;
const headerBarHandler = () => {
  const deltaScrollY = window.scrollY - prevScrollYvalue;
  prevScrollYvalue = window.scrollY;
  const isScrollingUp = deltaScrollY < 0;
  const isHeader = isScrollingUp || window.scrollY < 200;
  if (!isBurgerBtnActive) {
    header.style.transform = `translateY(${isHeader ? 0 : -67}px)`;
    headerBar.style.transform = `translateY(${isHeader ? 0 : -67}px)`;
  }
  if (window.scrollY < 200) {
    headerBar.style.backgroundColor = "var(--var-transparent)";
  } else {
    headerBar.style.backgroundColor = "var(--var-col-dark-grey)";
  }
};

const scrollHandler = () => {
  heroSectionHandler();
  headerBarHandler();
};

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

// MARK:Events

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

window.addEventListener("scroll", () => {
  scrollHandler();
});
modalExit.addEventListener("click", () => {
  ismodalEnabled = false;
  modalHandler();
});
modalLeft.addEventListener("click", () => {
  modalHandler(modalImgIndex - 1);
});
modalRight.addEventListener("click", () => {
  modalHandler(modalImgIndex + 1);
});

carouselItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    ismodalEnabled = true;
    modalImgIndex = index;
    modalHandler(index);
  });
});
playBtn.addEventListener("click", () => {
  isVideoEnabled = true;
  videoHandler();
});
video.addEventListener("ended", () => {
  isVideoEnabled = false;
  videoHandler();
});
tabSagaAnderson.addEventListener("click", () => {
  console.log("click");
  isTabSA = true;
  isTabAW = false;
  tabHandler();
});
tabAlanWake.addEventListener("click", () => {
  isTabAW = true;
  isTabSA = false;
  tabHandler();
});
tabPacificNW.addEventListener("click", () => {
  isTabPNW = true;
  isTabDP = false;
  tabHandler();
});
tabDarkPlace.addEventListener("click", () => {
  isTabDP = true;
  isTabPNW = false;
  tabHandler();
});
burgerBtn.addEventListener("click", () => {
  isBurgerBtnActive = !isBurgerBtnActive;
  burgerMenuHandler();
});
