const btnsOpen = document.querySelectorAll('.btn-project');
const btnsClose = document.querySelectorAll('.btn-close');

btnsOpen.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    if (event.currentTarget.classList.contains('btn-project')) {
      const selector = event.currentTarget.dataset.dialog;
      const dialog = document.getElementById(selector);
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
          dialog.close();
        },
        { once: true }
      );
    }
  });
});
