const header = document.querySelector("header");
const burger = document.querySelector(".burger");
const close = document.querySelector(".close");
const mobileNav = document.querySelector(".mobile-nav");

close.addEventListener("click", () => {
  
  mobileNav.classList.toggle("hidden");
  burger.classList.toggle("hide");
});

burger.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
  burger.classList.toggle("hide");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
