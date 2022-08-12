if (document.getElementById("message-form")) {
    const userName = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const flash= document.getElementById("flash-message")
    document
      .getElementById("message-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        event.stopPropagation();
        
        alert("Votre message a bien été envoyé.");
//  flash.classList.toggle("js-display");
//  setTimeout(()=>flash.classList.toggle("js-display"),5000)
//         email.value = "";
//         userName.value = "";
//         message.value = "";
      });
  }
  
  document
    .getElementById("menu-button")
    .addEventListener("click", function (event) {
      const menu = document.getElementById("navlist");
      menu.classList.toggle("js-menu");
    });
  