const navToggle = document.querySelector(".navbar-toggle");
const links = document.querySelector(".main-menu-links");
const buttons = document.querySelectorAll(".submenu-button");

navToggle.addEventListener("click", function () {
  console.log(links.classList);
  links.classList.toggle("show-links");
});
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (
      e.target.matches(".submenu-up, .submenu-up *") ||
      e.target.matches(".submenu-down, .submenu-down *")
    ) {
      var clickedMainMenu = e.target.parentNode.parentNode.parentNode;
      console.log("doccccc", clickedMainMenu);
      var subMenu = clickedMainMenu.querySelector(".submenu-links");
      subMenu.classList.toggle("hide");
      var carets = clickedMainMenu.querySelectorAll("button");
      carets.forEach((caret) => {
        caret.classList.toggle("hide");
      });
    }
  });
});
