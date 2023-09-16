const btnDark = document.querySelector('.btn-dark-mode');

const theme = localStorage.getItem('theme');
if (theme) {
  document.body.classList.add(theme);
}

btnDark.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', '');
  } else {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
});
