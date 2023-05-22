const btnAppearance = document.querySelector('.btn-appearance');
const theme = localStorage.getItem('theme017');

if (theme) {
    document.body.classList.add(theme);
}

btnAppearance.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        localStorage.setItem('theme017', '')
    } else {
        document.body.classList.add('dark');
        localStorage.setItem('theme017', 'dark');
    }
});