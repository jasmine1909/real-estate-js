const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const close = document.querySelector(".close");

hamburer.addEventListener("click", () => {
  navList.classList.add("open");
});
close.addEventListener("click", () => {
  navList.classList.remove("open");
});

var swiper = new Swiper(".hero-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
