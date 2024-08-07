const btnOpenNote = document.querySelector('.btn-note');
const dialogNote = document.querySelector('.dialog-note');
const btnCloseNote = document.querySelector('.btn-close-note');

btnOpenNote.addEventListener('click', () => {
  dialogNote.showModal();
});

btnCloseNote.addEventListener('click', () => {
  dialogNote.close();
});
