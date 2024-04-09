const brand = document.querySelector('.brand');
const brandList = brand.querySelector('.brand__list');
const buttonBrands = brand.querySelector('.button-brand');

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
