console.log("Hello, world!");

const heroImage = document.getElementById("hero-image");
const logoWrapper = document.getElementById("logo-wrapper");
const mainLogo = document.getElementById("main-logo");

window.addEventListener("scroll", () => {
  heroImage.style.transform = `translateY(${window.scrollY * 0.9}px)`;
  logoWrapper.style.transform = `translateY(${window.scrollY * 0.5}px)`;
  mainLogo.style.scale = `${1 + window.scrollY * -0.0005}`;
});
