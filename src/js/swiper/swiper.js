import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

let init = false;
let swiper;
function swiperCard() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener('resize', swiperCard);
