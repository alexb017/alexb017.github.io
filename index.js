// const emailAddress = 'alexbacirea@gmail.com';

// const copyEmailBtn = document.querySelector('.btn-email');
// const popup = document.querySelector('.email-popup');

// copyEmailBtn.addEventListener('click', (event) => {
//   navigator.clipboard.writeText(emailAddress);

//   // Remove fade-out class before showing the popup
//   popup.classList.remove('fade-out');
//   popup.classList.remove('hidden');

//   setTimeout(() => {
//     popup.classList.add('fade-out');

//     // Wait for the animation to finish before hiding the popup
//     popup.addEventListener(
//       'animationend',
//       () => {
//         popup.classList.add('hidden');
//       },
//       { once: true }
//     );
//   }, 2000);
// });

// const slideElements = document.querySelectorAll('.slide-enter');

// slideElements.forEach((element, index) => {
//   setTimeout(() => {
//     element.classList.add('slide-enter-active');
//   }, index * 200);
// });

const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    document.querySelector('.tab.active').classList.remove('active');

    event.currentTarget.classList.add('active');

    document
      .querySelector('.tab-content.tab-show')
      .classList.remove('tab-show');

    const selector = event.currentTarget.dataset.tab;
    document.querySelector(selector).classList.add('tab-show');
  });
});
