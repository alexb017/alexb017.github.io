const btnDarkMode = document.querySelector('.btn-dark-mode');
const darkIcon = document.querySelector('.dark-icon');
const lightIcon = document.querySelector('.light-icon');

const theme = localStorage.getItem('theme');

if (theme) {
    document.body.classList.add(theme);
    darkIcon.classList.remove('show');
    lightIcon.classList.add('show');
}

btnDarkMode.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        darkIcon.classList.add('show');
        lightIcon.classList.remove('show');
        localStorage.setItem('theme', '')
    } else {
        document.body.classList.add('dark');
        darkIcon.classList.remove('show');
        lightIcon.classList.add('show');
        localStorage.setItem('theme', 'dark');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.slidein');

    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('fadein');
        }, index * 100);
    });
});