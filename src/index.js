if (document.getElementById("message-form")) {
  const userName = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // Get the modal
  const modal = document.getElementById("modal-message");
  document
    .getElementById("message-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();

      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
      setTimeout(() => {}, 600);
      email.value = "";
      userName.value = "";
      message.value = "";
      setTimeout(() => {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }, 2000);
    });
}

document
  .getElementById("menu-button")
  .addEventListener("click", function (event) {
    const menu = document.getElementById("navlist");
    menu.classList.toggle("js-menu");
  });

// preloader

const preloader = document.getElementById("preloader");
const body = document.body;
window.addEventListener("load", function () {
  const timer = setTimeout(() => {
    if (body.classList.contains("js-loading")) {
      body.classList.remove("js-loading");
    }
    preloader.style.opacity = 0;
    //preloader.style.display = "none";

    clearTimeout(timer);
  }, 2000);
});
