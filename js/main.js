const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");
const slides = document.querySelectorAll('.slider img');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
let currentSlide = 0;


navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "img/icons/close.svg";
  } else {
    navBtnImg.src = "img/icons/open.svg";
  }
};

//Sticky header & goToTop button
window.addEventListener("scroll", function () {
  const header = document.querySelector("#header");
  const hero = document.querySelector("#home");
  let triggerHeight = hero.offsetHeight - 170;

  if (window.scrollY > triggerHeight) {
    header.classList.add("header-sticky");
    goToTop.classList.add("reveal");
  } else {
    header.classList.remove("header-sticky");
    goToTop.classList.remove("reveal");
  }
});

//AOS animations settings
AOS.init({
  once: true,
});



document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 0;
  showSlides(slideIndex);

  function showSlides(n) {
    let slides = document.querySelectorAll('.hero-slider .slide');
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
    slides[slideIndex].classList.add('active');
  }

  document.querySelector('.hero-img .next').addEventListener('click', function() {
    slideIndex++;
    showSlides(slideIndex);
  });

  document.querySelector('.hero-img .prev').addEventListener('click', function() {
    slideIndex--;
    showSlides(slideIndex);
  });
});
