import { speakingData } from "./data.js";
import { elements } from "./view/base.js";
import * as searchView from "./view/searchView";
import Search from "./model/search.js";
import "../styles.css";

const state = {};
// const writingdiv = document.getElementById("writing-div");
window.onload = function () {};
const controlSearch = async () => {
  //Webees hailtiin tulhuur ugiig gargaj avah
  const sinput = searchView.getInput();
  console.log("speaking from controlSearch", ...sinput);
  //input hooson bish bol daraahiig hiine
  if (sinput) {
    // hailtiing obiekt uusgeh
    var searching = new Search("speaking", ...sinput);
    console.log(searching);
    // Hailt hiihed zoriult delgetsiin ui iig beltgeh
    searchView.clearSearchResult();

    // hailtiig guitsetgeh
    await searching.doSearch(speakingData);
    console.log(
      "searching.dosearchiin ur dun",
      searching.doSearch(speakingData)
    );
    // hailtiin ur dung delgetsend uzuuleh
    searchView.renderResults(searching.doSearch(speakingData));
    // buh hariu haruulah tovciig ajluulah
    const answerbtns = document.querySelectorAll(".answerbtn");
    answerbtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        console.log("clicked");
        var clickedArticle = e.target.parentNode;
        var prg = clickedArticle.querySelector("p");
        prg.classList.toggle("hide");
      });
    });
  }
};
elements.searchButton.addEventListener("click", (e) => {
  controlSearch();
});
