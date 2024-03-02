import { writingData } from "./writing-data.js";
import { elements } from "./view/base.js";
import * as searchView from "./view/searchView";
import Search from "./model/search.js";

const state = {};
// const writingdiv = document.getElementById("writing-div");
window.onload = function () {};
const controlSearch = async () => {
  //Webees hailtiin tulhuur ugiig gargaj avah
  const sinput = searchView.getInput();
  console.log("writing", ...sinput);
  //input hooson bish bol daraahiig hiine
  if (sinput) {
    // hailtiing obiekt uusgeh
    var searching = new Search("writing", ...sinput);
    console.log(searching);
    // Hailt hiihed zoriult delgetsiin ui iig beltgeh
    searchView.clearSearchResult();

    // hailtiig guitsetgeh
    await searching.doSearch(writingData);
    console.log(
      "searching.dosearchiin ur dun",
      searching.doSearch(writingData)
    );
    // hailtiin ur dung delgetsend uzuuleh
    searchView.renderResults(searching.doSearch(writingData));
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
