const slideInElements = document.querySelectorAll('.slide-in');
const slideNav = document.querySelector('.slide-nav');

slideInElements.forEach((slideInElement, index) => {
  setTimeout(() => {
    slideInElement.classList.add('active');
  }, index * 150);

  slideNav.classList.add('active');
});
