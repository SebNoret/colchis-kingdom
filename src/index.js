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

      setTimeout(() => {

        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
      }, 600);
      email.value = "";
      userName.value = "";
      message.value = "";
      setTimeout(() => {
        modal.style.display = "none";
        document.body.style.overflow = "";

      }, 3500)
    });
}

document
  .getElementById("menu-button")
  .addEventListener("click", function (event) {
    const menu = document.getElementById("navlist");
    menu.classList.toggle("js-menu");
  });


