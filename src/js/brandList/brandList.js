const wrapper = document.querySelector('.wrapper');
const brandList = wrapper.querySelector('.brand__list');
const buttonBrands = wrapper.querySelector('.button-brand');

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

buttonBrands.addEventListener('click', showBrands);
