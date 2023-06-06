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