export const elements = {
  navToggle: document.querySelector(".navbar-toggle"),
  mainMenulinks: document.querySelector(".main-menu-links"),
  subMenuBtns: document.querySelectorAll(".submenu-button"),
  writingDiv: document.getElementById("writing-div"),
  answerBtns: document.querySelectorAll(".answerbtn"),
};
export const clearLoader = () => {
  const loader = document.querySelector(`.${elementStrings.loader}`);

  if (loader) loader.parentElement.removeChild(loader);
};
