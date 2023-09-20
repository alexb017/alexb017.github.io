const btnDark = document.querySelector('.btn-dark-mode');

const theme = localStorage.getItem('theme');
if (theme) {
  document.body.classList.add(theme);
  btnDark.innerHTML = 'Use light theme';
}

btnDark.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    btnDark.innerHTML = 'Use dark theme';
    localStorage.setItem('theme', '');
  } else {
    document.body.classList.add('dark');
    btnDark.innerHTML = 'Use light theme';
    localStorage.setItem('theme', 'dark');
  }
});
