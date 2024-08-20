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

// Carousel
const sliderCarousel = document.querySelector('.carousel');
let mousePressedDown = false;
let mouseStartX, scrollLeftPosition;

let startDraggingOther = (event) => {
  mousePressedDown = true;
  mouseStartX = event.pageX - sliderCarousel.offsetLeft;
  scrollLeftPosition = sliderCarousel.scrollLeft;
};

let stopDraggingOther = (event) => {
  mousePressedDown = false;
};

sliderCarousel.addEventListener('mousemove', (event) => {
  event.preventDefault();

  if (!mousePressedDown) {
    return;
  }

  const x = event.pageX - sliderCarousel.offsetLeft;
  const scroll = x - mouseStartX;
  sliderCarousel.scrollLeft = scrollLeftPosition - scroll;
});

sliderCarousel.addEventListener('mousedown', startDraggingOther, false);
sliderCarousel.addEventListener('mouseup', stopDraggingOther, false);
sliderCarousel.addEventListener('mouseleave', stopDraggingOther, false);
