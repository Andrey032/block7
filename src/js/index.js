import '../scss/style.scss';
import '../js/swiper/swiper';

const wrapper = document.querySelector('.wrapper');
const brandList = wrapper.querySelector('.brand__list');
const servicesList = wrapper.querySelector('.services__list');
const overlay = wrapper.querySelector('.overlay');
const modalFeedback = wrapper.querySelector('.modal-feedback');
const modalCall = wrapper.querySelector('.modal-call');
const buttonBrands = wrapper.querySelector('.button-brand');
const buttonServices = wrapper.querySelector('.button-services');
const burgerMenu = wrapper.querySelector('.burger');

//функция скрыть-показать элементы по кнопке(брэнды)
function showBrands() {
  brandList.classList.toggle('show-brand');
  if (brandList.classList.contains('show-brand')) {
    buttonBrands.textContent = 'Скрыть';
    buttonBrands.classList.add('link-btn--revert');
  } else {
    buttonBrands.textContent = 'Показать все';
    buttonBrands.classList.remove('link-btn--revert');
  }
}

//функция скрыть-показать элементы по кнопке(услуги)
function showServices() {
  servicesList.classList.toggle('show-services');
  if (servicesList.classList.contains('show-services')) {
    buttonServices.textContent = 'Скрыть';
    buttonServices.classList.add('link-btn--revert');
  } else {
    buttonServices.textContent = 'Показать все';
    buttonServices.classList.remove('link-btn--revert');
  }
}

//функция скрыть-показать бургер меню
function toggleBtnMenu() {
  overlay.classList.toggle('show');
}

//функция показать окно обратный звонок
function openWindowCall(obj) {
  if (obj.classList.contains('call')) {
    modalCall.classList.add('show');
  }
}

//функция показать окно обратная связь
function openWindowChat(obj) {
  if (obj.classList.contains('chat')) {
    modalFeedback.classList.add('show');
  }
}

//функция закрыть попап
function closeWindowCall() {
  modalCall.classList.remove('show');
  modalFeedback.classList.remove('show');
  overlay.classList.remove('show');
}

//функция закрыть бургер меню по области вне меню
function handleCheckSidebar(evt) {
  if (
    evt.target.classList.contains('show') &&
    !evt.target.closest('.sidebar')
  ) {
    closeWindowCall();
  }
}

//Слушатели
buttonBrands.addEventListener('click', showBrands);
buttonServices.addEventListener('click', showServices);
burgerMenu.addEventListener('click', toggleBtnMenu);
overlay.addEventListener('click', handleCheckSidebar);


wrapper.addEventListener('click', function (evt) {
  if (
    evt.target.classList.contains('show') &&
    !evt.target.closest('.modal__container')
  ) {
    closeWindowCall();
  }
});


wrapper.addEventListener('click', function (evt) {
  if (evt.target.closest('.call')) {
    openWindowCall(evt.target);
  }
  if (evt.target.closest('.chat')) {
    openWindowChat(evt.target);
  }
  if (evt.target.closest('.close')) {
    closeWindowCall();
  }
});
