const modalFeedback = document.querySelector('.modal-feedback');
const headerChat = document.querySelector('.header__chat');
const sidebarChat = document.querySelector('.sidebar__chat');
const closeFeedback = modalFeedback.querySelector('.close__feedback');

//функция показать окно обратная связь
function openWindowChat() {
  modalFeedback.classList.add('show');
}

//функция закрыть попап обратная связь
function closeWindowFeedback() {
  modalFeedback.classList.remove('show');
}

//функция закрыть попап обратная связь по области
function handleCheckFeedback(evt) {
  if (
  evt.target.classList.contains('show') &&
  !evt.target.closest('.modal__container')
) {
  closeWindowFeedback();
}
}

headerChat.addEventListener('click', openWindowChat);
sidebarChat.addEventListener('click', openWindowChat);
closeFeedback.addEventListener('click', closeWindowFeedback);
modalFeedback.addEventListener('click', handleCheckFeedback);
