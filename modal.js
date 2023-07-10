const buttonOpenModal = document.getElementById('openModal');

const modalWrapper = document.querySelector('.modal-wrapper');

buttonOpenModal.onclick = function () {
  modalWrapper
  .classList
  .remove('invisible'); // Remove a class invisible da div modal-wrapper
}

document.addEventListener('keydown', function(event) {
  const isEscKey = event.key === 'Escape'; // Verifica se a tecla pressionada é a ESC
  if (isEscKey) {
    modalWrapper.classList.add('invisible'); // Adiciona a class invisible na div modal-wrapper
  }
})