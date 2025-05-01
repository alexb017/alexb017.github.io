// Shows the image on hover
const items = document.querySelectorAll('a.item');

items.forEach((item) => {
  const image = item.querySelector('img');
  const showImage = () => item.classList.add('is-active');
  const hideImage = () => item.classList.remove('is-active');

  if (image) {
    item.addEventListener('mouseenter', showImage);
    item.addEventListener('mouseleave', hideImage);
  }
});

// Copy email to clipboard
const emailBtn = document.querySelector('.email-btn');
const email = 'alexbacirea@gmail.com';
emailBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(email);

  emailBtn.textContent = 'copied';
  setTimeout(() => {
    emailBtn.textContent = 'copy email';
  }, 1000);
});

// Show local time
const localTime = document.querySelector('.time');
function updateTime() {
  const date = new Date();

  const day = { weekday: 'short' };
  const time = {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };
  const dayString = date.toLocaleDateString('en-US', day);
  const timeString = date.toLocaleTimeString('en-US', time);
  localTime.textContent = `${dayString} ${timeString}`;
}
updateTime();
setInterval(updateTime, 1000);

// Fade in animation on load
const fadeInElements = document.querySelectorAll('.fade-in');
fadeInElements.forEach((element, index) => {
  element.style.animationDelay = `${index * 0.05}s`;
  element.classList.add('animate-fade-in');
});
