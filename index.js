const copyEmailBtn = document.querySelector('.copy-email');
copyEmailBtn.addEventListener('click', () => {
  navigator.clipboard.writeText('alexbacirea@gmail.com');
  copyEmailBtn.textContent = 'Copied';
  setTimeout(() => {
    copyEmailBtn.textContent = 'Copy email address';
  }, 1000);
});
