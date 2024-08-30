const emailAddress = 'alexbacirea@gmail.com';

const copyEmailBtn = document.querySelector('.btn-email');
const popup = document.querySelector('.email-popup');

copyEmailBtn.addEventListener('click', (event) => {
  navigator.clipboard.writeText(emailAddress);

  // Remove fade-out class before showing the popup
  popup.classList.remove('fade-out');
  popup.classList.remove('hidden');

  setTimeout(() => {
    popup.classList.add('fade-out');

    // Wait for the animation to finish before hiding the popup
    popup.addEventListener(
      'animationend',
      () => {
        popup.classList.add('hidden');
      },
      { once: true }
    );
  }, 2000);
});

// const btnsOpen = document.querySelectorAll('.card');
// const btnsClose = document.querySelectorAll('.btn-close');

// btnsOpen.forEach((btn) => {
//   btn.addEventListener('click', (event) => {
//     if (event.currentTarget.classList.contains('card')) {
//       const selector = event.currentTarget.dataset.dialog;
//       const dialog = document.getElementById(selector);
//       document.body.style.overflow = 'hidden';
//       dialog.showModal();
//     }
//   });
// });

// btnsClose.forEach((btn) => {
//   btn.addEventListener('click', (event) => {
//     if (event.currentTarget.classList.contains('btn-close')) {
//       const selector = event.currentTarget.dataset.close;
//       const dialog = document.getElementById(selector);
//       dialog.setAttribute('closing', '');
//       dialog.addEventListener(
//         'animationend',
//         () => {
//           dialog.removeAttribute('closing');
//           document.body.style.overflow = 'auto';
//           dialog.close();
//         },
//         { once: true }
//       );
//     }
//   });
// });
