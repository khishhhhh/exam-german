import { elements } from "./view/base";
import "../styles.css";

elements.navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  elements.mainMenulinks.classList.toggle("show-links");
});
elements.subMenuBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (
      e.target.matches(".submenu-up, .submenu-up *") ||
      e.target.matches(".submenu-down, .submenu-down *") ||
      e.target.matches(".submenu-button", ".submenu-button *")
    ) {
      var clickedMainMenu = e.target.parentNode.parentNode.parentNode;
      var subMenu = clickedMainMenu.querySelector(".submenu-links");
      subMenu.classList.toggle("hide");
      var carets = clickedMainMenu.querySelectorAll("button");
      carets.forEach((caret) => {
        caret.classList.toggle("hide");
      });
    }
  });
});
