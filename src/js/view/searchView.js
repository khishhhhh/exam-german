import { elements } from "./base";

// ur dung neg negeer haruulah
const renderResult = (result) => {
  var htmldetail = ``;
  for (let j = 0; j < result.detail.length; j++) {
    htmldetail += `<li>${result.detail[j]}</li>`;
  }
  var html = `<article class="writing-article">
    <h3>${result.title}</h3>
    <ul>${htmldetail}</ul>
    <button class="answerbtn">Answer</button>
    <p class="hide">${result.answer}</p>
  </article>`;
  elements.resultDiv.insertAdjacentHTML("beforeend", html);
};
export const clearSearchResult = () => {
  elements.resultDiv.innerHTML = "";
};
export const getInput = () => {
  console.log(
    "searchviewees ",
    elements.searchLevelInput.value,
    elements.searchTeilInput.value
  );
  return [elements.searchLevelInput.value, elements.searchTeilInput.value];
};

// buh resultuudiig haruulah
export const renderResults = (results) => {
  // buh resultiig davtaltaar haruulah
  console.log(results);
  results.forEach(renderResult);
};
