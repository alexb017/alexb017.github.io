// Shows the image on hover for links
const links = document.querySelectorAll('a.link-with-image');

links.forEach((link) => {
  const image = link.querySelector('img');

  if (image) {
    // Ensure the image is initially hidden
    image.style.display = 'none';

    link.addEventListener('mouseenter', () => {
      image.style.display = 'block';
      image.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: 'forwards',
        easing: 'ease-in',
      });
    });

    link.addEventListener('mouseleave', () => {
      const fadeOut = image.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 100,
        fill: 'forwards',
        easing: 'ease-out',
      });

      fadeOut.onfinish = () => {
        image.style.display = 'none';
      };
    });
  }
});

// Copy email to clipboard
const emailBtn = document.querySelector('.email-btn');
const email = 'alexbacirea@gmail.com';
emailBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(email);

  const spanContent = emailBtn.querySelector('span');
  spanContent.textContent = 'Copied';
  setTimeout(() => {
    spanContent.textContent = 'Copy email to clipboard';
  }, 1000);
});

// Show local time
const time = document.querySelector('.time');
function updateTime() {
  const date = new Date();
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };
  time.textContent = date.toLocaleTimeString('en-US', options);
}
updateTime();
setInterval(updateTime, 1000);
