if (document.getElementById("message-form")) {
  const userName = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  document
    .getElementById("message-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Votre message a bien été envoyé.");
      email.value = "";
      userName.value = "";
      message.value = "";
    });
}

document
  .getElementById("menu-button")
  .addEventListener("click", function (event) {
    const menu = document.getElementById("navlist");
    menu.classList.toggle("js-menu");
  });
