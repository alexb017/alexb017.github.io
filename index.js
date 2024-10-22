// Dental dialog
const dialogDental = document.querySelector('.dialog-dental');
const dialogDentalButton = document.querySelector('.dialog-dental-button');

dialogDentalButton.addEventListener('click', () => {
  dialogDental.showModal();
  document
    .querySelector('.dialog-dental .fade-in')
    .classList.add('fade-in-active');
});

// Note dialog
const dialogNote = document.querySelector('.dialog-note');
const dialogNoteButton = document.querySelector('.dialog-note-button');

dialogNoteButton.addEventListener('click', () => {
  dialogNote.showModal();
  document
    .querySelector('.dialog-note .fade-in')
    .classList.add('fade-in-active');
});

// Retro dialog
const dialogRetro = document.querySelector('.dialog-retro');
const dialogRetroButton = document.querySelector('.dialog-retro-button');

dialogRetroButton.addEventListener('click', () => {
  dialogRetro.showModal();
  document
    .querySelector('.dialog-retro .fade-in')
    .classList.add('fade-in-active');
});

// Grocery dialog
const dialogGrocery = document.querySelector('.dialog-grocery');
const dialogGroceryButton = document.querySelector('.dialog-grocery-button');

dialogGroceryButton.addEventListener('click', () => {
  dialogGrocery.showModal();
  document
    .querySelector('.dialog-grocery .fade-in')
    .classList.add('fade-in-active');
});

// Close the dialog
document.querySelectorAll('.dialog-close-button').forEach((item) => {
  item.addEventListener('click', (e) => {
    e.target.closest('dialog').close();
  });
});
