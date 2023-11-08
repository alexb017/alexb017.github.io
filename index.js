const copyEmail = document.querySelectorAll('.copy-email-link');

copyEmail.forEach((link) => {
  link.addEventListener('click', (event) => {
    // Get the value of the data attribute
    const copyData = event.currentTarget.dataset.email;

    // Copy the value of the data attribute to the clipboard
    navigator.clipboard.writeText(copyData);

    document.querySelector('.copy-email').style.opacity = '1';

    setTimeout(() => {
      document.querySelector('.copy-email').style.opacity = '0';
    }, 1000);
  });
});
