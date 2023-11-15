
var swiper = new Swiper(".SwiperTestimonios", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  
  slidesPerView:"auto",
  coverflowEffect: {
    rotate:50,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  
});




var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    
  },
  
   clickable: true,
    keyboard: true,
});
