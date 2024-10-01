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

// Carousel
const sliderCarousel = document.querySelector('.carousel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function updateButtons() {
  // Disable the prev button when the carousel is at the beginning
  if (sliderCarousel.scrollLeft === 0) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
  }

  // Disable next button if the carousel is at the end
  if (
    sliderCarousel.scrollLeft + sliderCarousel.clientWidth >=
    sliderCarousel.scrollWidth - 1
  ) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }
}

// Move the carousel to the right
function moveRight() {
  sliderCarousel.scrollBy({
    left: sliderCarousel.clientWidth / 4,
    behavior: 'smooth',
  });
}

// Move the carousel to the left
function moveLeft() {
  sliderCarousel.scrollBy({
    left: -sliderCarousel.clientWidth / 4,
    behavior: 'smooth',
  });
}

// Initial button state
updateButtons();

// Add event listeners to the buttons
next.addEventListener('click', moveRight);
prev.addEventListener('click', moveLeft);

// Add event listener to update the buttons when the carousel scrolls
sliderCarousel.addEventListener('scroll', updateButtons);
