// preloader

const preloader = document.getElementById("preloader");
const body = document.body;

window.addEventListener("load", function () {
  // const timer = setTimeout(() => {
  if (body.classList.contains("js-loading")) {
    body.classList.remove("js-loading");
  }
  preloader.style.opacity = 0;
  preloader.style.pointerEvents = "none";

  // clearTimeout(timer);
  // }, 2000);
});
