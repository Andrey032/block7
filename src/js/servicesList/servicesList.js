const wrapper = document.querySelector('.wrapper');
const servicesList = wrapper.querySelector('.services__list');
const buttonServices = wrapper.querySelector('.button-services');

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

buttonServices.addEventListener('click', showServices);
