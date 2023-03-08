var faq = document.getElementsByClassName("faq-item");
var i;

for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    this.classList.toggle("text-active");
  });
}
