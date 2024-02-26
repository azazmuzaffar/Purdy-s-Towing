var swiper = new Swiper(".testimonials .swiper", {
  slidesPerView: 1,
  spaceBetween: 16,
  clickable: true,
  loop: true,
  autoplay: {
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
