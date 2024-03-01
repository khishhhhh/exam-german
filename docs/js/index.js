"use strict";

require("core-js/modules/es.object.to-string.js");
require("core-js/modules/web.dom-collections.for-each.js");
var navToggle = document.querySelector(".navbar-toggle");
var links = document.querySelector(".main-menu-links");
var buttons = document.querySelectorAll(".submenu-button");
navToggle.addEventListener("click", function () {
  console.log(links.classList);
  links.classList.toggle("show-links");
});
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.matches(".submenu-up, .submenu-up *") || e.target.matches(".submenu-down, .submenu-down *")) {
      var clickedMainMenu = e.target.parentNode.parentNode.parentNode;
      console.log("doccccc", clickedMainMenu);
      var subMenu = clickedMainMenu.querySelector(".submenu-links");
      subMenu.classList.toggle("hide");
      var carets = clickedMainMenu.querySelectorAll("button");
      carets.forEach(function (caret) {
        caret.classList.toggle("hide");
      });
    }
  });
});