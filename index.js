if (document.getElementById("message-form")) {
  const userName = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const modalContent = document.getElementById("modal-content");
  // Get the modal
  const modal = document.getElementById("modal-message");
  document
    .getElementById("message-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();

      modal.style.display = "flex";

      document.body.style.overflow = "hidden";

      setTimeout(() => {
        modalContent.classList.add("animation-bottom");
        email.value = "";
        userName.value = "";
        message.value = "";

        document.body.style.overflow = "";
      }, 2000);
      setTimeout(() => {
        modal.style.display = "none";
        modalContent.classList.remove("animation-bottom");
      }, 2500);
    });
}

document
  .getElementById("menu-button")
  .addEventListener("click", function (event) {
    const menu = document.getElementById("navlist");
    menu.classList.toggle("js-menu");
  });
