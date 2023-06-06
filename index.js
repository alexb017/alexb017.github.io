const tabs = document.querySelectorAll('.tab');
tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        document.querySelector('.tab.active').classList.remove('active');

        e.currentTarget.classList.add('active');

        document.querySelector('.tab-content.show').classList.remove('show');

        const selector = e.currentTarget.dataset.content;
        document.querySelector(selector).classList.add('show');
    });
});

const btnAppearance = document.querySelector('.btn-appearance');
const lightIcon = document.querySelector('.light-icon');
const darkIcon = document.querySelector('.dark-icon');

const theme = localStorage.getItem('theme');

if (theme) {
    document.body.classList.add(theme);
    lightIcon.classList.remove('show');
    darkIcon.classList.add('show');
}

btnAppearance.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        darkIcon.classList.remove('show');
        lightIcon.classList.add('show');
        localStorage.setItem('theme', '')
    } else {
        document.body.classList.add('dark');
        lightIcon.classList.remove('show');
        darkIcon.classList.add('show');
        localStorage.setItem('theme', 'dark');
    }
});