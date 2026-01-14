window.addEventListener("load", () => {
  const heroText = document.querySelector(".hero-text");
  if(!heroText) return;

  heroText.style.opacity = "0";
  heroText.style.transform = "translateY(40px)";

  setTimeout(() => {
    heroText.style.transition = "all 1s ease";
    heroText.style.opacity = "1";
    heroText.style.transform = "translateY(0)";
  }, 300);
});
const text = "Designed & Developed by Ashu Chauhan";
let index = 0;

function typeEffect(){
  if(index < text.length){
    document.getElementById("type-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

window.addEventListener("load", typeEffect);