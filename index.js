const slideElements = document.querySelectorAll('.slide-enter');

slideElements.forEach((element, index) => {
  setTimeout(() => {
    element.classList.add('slide-enter-active');
  }, index * 150);
});
