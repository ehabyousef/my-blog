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
  document.documentElement.style.setProperty("--setion-color", "#02150A");
  document.documentElement.style.setProperty("--side-color", "#02150A");
  document.documentElement.style.setProperty("--dark-color", "#fdfaf6");
  document.documentElement.style.setProperty("--white-color", "#02150A");
  moon.style.color = "white";
});
moon.addEventListener("click", function () {
  this.classList.add("sleep");
  sun.classList.remove("sleep");
  document.documentElement.style.setProperty("--side-color", "#e4efe7");
  document.documentElement.style.setProperty("--white-color", "#fdfaf6");
  document.documentElement.style.setProperty("--dark-color", "#02150A");
  document.documentElement.style.setProperty("--setion-color", "#fdfaf6");
});
let title = document.querySelector("#title");
const autowrite = () => {
  let mytitle = "Ehab Y Lashhen";
  title.innerHTML = mytitle.slice(0, x);
  x++;
  
};
