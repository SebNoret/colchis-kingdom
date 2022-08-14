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

      // setTimeout(() => {

      //   modal.style.display = "flex";
      // }, 600);
      email.value = "";
      userName.value = "";
      message.value = "";
      // setTimeout(() => {
      //   modal.style.display = "none";
      // }, 3500)
    });
}

document
  .getElementById("menu-button")
  .addEventListener("click", function (event) {
    const menu = document.getElementById("navlist");
    menu.classList.toggle("js-menu");
  });


// Get the modal
// var modal = document.getElementById("modal-message");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 