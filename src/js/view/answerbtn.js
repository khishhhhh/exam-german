export default letbtnwork = () => {
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
