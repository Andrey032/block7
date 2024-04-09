const services = document.querySelector('.services');
const servicesList = services.querySelector('.services__list');
const buttonServices = services.querySelector('.button-services');

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
