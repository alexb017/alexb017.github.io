const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    document.querySelector('.tab.active').classList.remove('active');

    event.currentTarget.classList.add('active');

    document.querySelector('.tab-content.show').classList.remove('show');

    const selector = event.currentTarget.dataset.content;
    document.querySelector(selector).classList.add('show');
  });
});

const copyEmail = document.querySelector('.copy-email-link');
const copyAddess = document.querySelector('.copy-address');

copyEmail.addEventListener('click', (event) => {
  // Get the value of the data attribute
  const copyData = event.currentTarget.dataset.email;

  // Copy the value of the data attribute to the clipboard
  navigator.clipboard.writeText(copyData);

  copyEmail.style.width = `${copyEmail.clientWidth - 32}px`;

  document.querySelector('.copy-address').textContent = 'Copied!';

  setTimeout(() => {
    document.querySelector('.copy-address').textContent = 'Copy address';
  }, 1000);
});
