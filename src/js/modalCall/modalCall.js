const wrapper = document.querySelector('.wrapper');
const modalCall = wrapper.querySelector('.modal-call');
const headerCall = wrapper.querySelector('.header__call');
const sidebarCall = wrapper.querySelector('.sidebar__call');
const closeCall = wrapper.querySelector('.close__call');

//функция показать окно обратный звонок
function openWindowCall() {
  modalCall.classList.add('show');
}

//функция закрыть попап обратный звонок
function closeWindowCall() {
  modalCall.classList.remove('show');
}

//функция закрыть попап обратный звонок по области
function handleCheckCall(evt) {
  if (
  evt.target.classList.contains('show') &&
  !evt.target.closest('.modal__container')
) {
  closeWindowCall();
}
}

headerCall.addEventListener('click', openWindowCall);
sidebarCall.addEventListener('click', openWindowCall);
closeCall.addEventListener('click', closeWindowCall);
modalCall.addEventListener('click', handleCheckCall);
