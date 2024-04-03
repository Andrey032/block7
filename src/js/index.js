import '../scss/style.scss';

const showBtn = document.querySelectorAll('.link-btn');
const brandList = document.querySelector('.brand__list');
const servicesList = document.querySelector('.services__list');

function toggleBtn(btn) {
    if (brandList.classList.contains('show')) {
      btn.textContent = 'Показать все';
      btn.classList.remove('link-btn--revert');
      brandList.classList.remove('show');
    } else {
      btn.textContent = 'Скрыть';
      btn.classList.add('link-btn--revert');
      brandList.classList.add('show');
    }
}
showBtn.addEventListener('click', function() {

})
// for (let i = 0; i < showBtn.length; i++) {
//   toggleBtn(showBtn[i]);
// }

var init = false;
var swiper;
function swiperCard() {
  if (window.innerWidth <= 767) {
    if (!init) {
      init = true;
      swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 32,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener('resize', swiperCard);

console.log('Works!');
