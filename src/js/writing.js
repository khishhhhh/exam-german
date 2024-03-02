import { data } from "./writing-data";

const writingdiv = document.getElementById("writing-div");
window.onload = function () {
  for (let i = 0; i < data.length; i++) {
    var htmldetail = ``;
    for (let j = 0; j < data[i].detail.length; j++) {
      htmldetail += `<li>${data[i].detail[j]}</li>`;
    }
    var html = `<article class="writing-article">
  <h3>${data[i].title}</h3>
  <ul>${htmldetail}</ul>
  <button class="answerbtn">Answer</button>
  <p class="hide">${data[i].answer}</p>
</article>`;
    writingdiv.insertAdjacentHTML("beforeend", html);
  }
  const answerbtns = document.querySelectorAll(".answerbtn");
  answerbtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      console.log("clicked");
      var clickedArticle = e.target.parentNode;
      var prg = clickedArticle.querySelector("p");
      prg.classList.toggle("hide");
    });
  });
};
