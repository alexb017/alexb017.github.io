const slideInElements = document.querySelectorAll('.slide-in');

slideInElements.forEach((slideInElement, index) => {
  setTimeout(() => {
    slideInElement.classList.add('active');
  }, index * 50);
});
