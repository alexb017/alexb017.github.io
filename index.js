const emailAddress = 'alexbacirea@gmail.com';

const copyEmailBtn = document.querySelector('.btn-email');

copyEmailBtn.addEventListener('click', (event) => {
  const originalText = copyEmailBtn.textContent.trim();
  console.log(originalText);
  copyEmailBtn.childNodes[copyEmailBtn.childNodes.length - 1].textContent =
    'Copied!';

  setTimeout(() => {
    navigator.clipboard.writeText(emailAddress).then(() => {
      copyEmailBtn.childNodes[
        copyEmailBtn.childNodes.length - 1
      ].textContent = ` ${originalText}`;
    });
  }, 1000);
});

const slideElements = document.querySelectorAll('.slide-enter');

slideElements.forEach((element, index) => {
  setTimeout(() => {
    element.classList.add('slide-enter-active');
  }, index * 100);
});
