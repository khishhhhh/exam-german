export const elements = {
  navToggle: document.querySelector(".navbar-toggle"),
  mainMenulinks: document.querySelector(".main-menu-links"),
  subMenuBtns: document.querySelectorAll(".submenu-button"),
  resultDiv: document.getElementById("result-div"),
  answerBtns: document.querySelectorAll(".answerbtn"),
  searchLevelInput: document.querySelector(".level-input"),
  searchTeilInput: document.querySelector(".teil-input"),
  searchButton: document.querySelector(".searchBtn"),
};
export const clearLoader = () => {
  const loader = document.querySelector(`.${elementStrings.loader}`);

  if (loader) loader.parentElement.removeChild(loader);
};
