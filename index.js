const btnsOpen = document.querySelectorAll('.card');
const btnsClose = document.querySelectorAll('.btn-close');

btnsOpen.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    if (event.currentTarget.classList.contains('card')) {
      const selector = event.currentTarget.dataset.dialog;
      const dialog = document.getElementById(selector);
      document.body.style.overflow = 'hidden';
      dialog.showModal();
    }
  });
});

btnsClose.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    if (event.currentTarget.classList.contains('btn-close')) {
      const selector = event.currentTarget.dataset.close;
      const dialog = document.getElementById(selector);
      dialog.setAttribute('closing', '');
      dialog.addEventListener(
        'animationend',
        () => {
          dialog.removeAttribute('closing');
          document.body.style.overflow = 'auto';
          dialog.close();
        },
        { once: true }
      );
    }
  });
});
