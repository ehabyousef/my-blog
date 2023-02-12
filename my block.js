

let slides = document.querySelectorAll(".landing > div");
let i = 0;
function next() {
  slides[i].classList.remove("active");
  i = (i + 1) % slides.length;
  slides[i].classList.add("active");
}
function prev() {
  slides[i].classList.remove("active");
  i = (i - 1 + slides.length) % slides.length;
  slides[i].classList.add("active");
}
setInterval(next, 5000);
// **************         ********************         ***********

let sun = document.getElementById("sun");
let moon = document.getElementById("moon");

// console.log(sun, moon);

sun.addEventListener("click", function () {
  this.classList.add("sleep");
  moon.classList.remove("sleep");
  document.documentElement.style.setProperty("--setion-color", "#032010");
  document.documentElement.style.setProperty("--side-color", "#032010");
  document.documentElement.style.setProperty("--dark-color", "#fdfaf6");
  document.documentElement.style.setProperty("--white-color", "#032010");
  moon.style.color = "white";
});
moon.addEventListener("click", function () {
  this.classList.add("sleep");
  sun.classList.remove("sleep");
  document.documentElement.style.setProperty("--side-color", "#e4efe7");
  document.documentElement.style.setProperty("--white-color", "#fdfaf6");
  document.documentElement.style.setProperty("--dark-color", "#032010");
  document.documentElement.style.setProperty("--setion-color", "#fdfaf6");
});
