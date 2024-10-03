const emailAddress = 'alexbacirea@gmail.com';

const copyEmailBtn = document.querySelector('.btn-email');

copyEmailBtn.addEventListener('click', (event) => {
  const originalText = copyEmailBtn.textContent.trim();
  console.log(originalText);
  copyEmailBtn.childNodes[copyEmailBtn.childNodes.length - 1].textContent =
    'Copied...';

  setTimeout(() => {
    navigator.clipboard.writeText(emailAddress).then(() => {
      copyEmailBtn.childNodes[
        copyEmailBtn.childNodes.length - 1
      ].textContent = ` ${originalText}`;
    });
  }, 1000);
});

// const slideElements = document.querySelectorAll('.slide-enter');

// slideElements.forEach((element, index) => {
//   setTimeout(() => {
//     element.classList.add('slide-enter-active');
//   }, index * 200);
// });

const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    document.querySelector('.tab.active').classList.remove('active');

    event.currentTarget.classList.add('active');

    document
      .querySelector('.tab-content.tab-show')
      .classList.remove('tab-show');

    const selector = event.currentTarget.dataset.tab;
    document.querySelector(selector).classList.add('tab-show');
  });
});
