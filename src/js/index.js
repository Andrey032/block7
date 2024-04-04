import '../scss/style.scss';

const wrapper = document.querySelector('.wrapper');
const brandList = wrapper.querySelector('.brand__list');
const servicesList = wrapper.querySelector('.services__list');
const overlay = wrapper.querySelector('.overlay');
const modalFeedback = wrapper.querySelector('#feedback');
const modalCall = wrapper.querySelector('#call');

function toggleBtnBrand(btn) {
  if (btn.name === 'brand') {
    brandList.classList.toggle('show-brand');
    if (brandList.classList.contains('show-brand')) {
      btn.textContent = 'Скрыть';
      btn.classList.add('link-btn--revert');
    } else {
      btn.textContent = 'Показать все';
      btn.classList.remove('link-btn--revert');
    }
  } else {
    servicesList.classList.toggle('show-services');
    if (servicesList.classList.contains('show-services')) {
      btn.textContent = 'Скрыть';
      btn.classList.add('link-btn--revert');
    } else {
      btn.textContent = 'Показать все';
      btn.classList.remove('link-btn--revert');
    }
  }
}

function toggleBtnMenu() {
  overlay.classList.toggle('show');
}

function openWindowCall(obj) {
  if (obj.classList.contains('call')) {
    modalCall.classList.add('show');
  }
  if (obj.classList.contains('chat')) {
    modalFeedback.classList.add('show');
  }
}

function closeWindowCall() {
  modalCall.classList.remove('show');
  modalFeedback.classList.remove('show');
  overlay.classList.remove('show');
}

document.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('show') && !evt.target.closest('.modal__container')) {
    closeWindowCall();
  }
  if (
    evt.target.classList.contains('show') &&
    !evt.target.closest('.sidebar')
  ) {
    closeWindowCall();
  }
});

wrapper.addEventListener('click', function (evt) {
  if (evt.target.closest('.link-btn')) {
    toggleBtnBrand(evt.target);
  }
  if (evt.target.closest('.header-button')) {
    toggleBtnMenu();
  }
  if (evt.target.closest('.call')) {
    openWindowCall(evt.target);
  }
  if (evt.target.closest('.chat')) {
    openWindowCall(evt.target);
  }
  if (evt.target.closest('.close')) {
    closeWindowCall();
  }
});

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
