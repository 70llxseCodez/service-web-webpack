import Swiper from 'swiper';

let swiper;
function initSwiper() {
  if (window.innerWidth <= 768) {
    if (!swiper) {
      swiper = new Swiper('.mySwiper', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }

    return;
  }
  if (swiper) {
    for (let i = 0; i < swiper.length; i++) {
      swiper[i].destroy();
      swiper[i] = null;
    }
  }
}

window.addEventListener('resize', initSwiper);
initSwiper();
