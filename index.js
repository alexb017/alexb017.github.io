const btnsDarkMode = document.querySelectorAll('.dark-theme');
const darkIcon = document.querySelector('.dark-icon');
const lightIcon = document.querySelector('.light-icon');

const theme = localStorage.getItem('theme');

if (theme) {
    document.body.classList.add(theme);
    darkIcon.classList.remove('show');
    lightIcon.classList.add('show');
}

btnsDarkMode.forEach((btn) => {
    btn.addEventListener('click', () => {
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
})

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

const btnOpenModal = document.querySelector('.btn-open-modal');
const btnCloseModal = document.querySelector('.btn-modal-close');
const modal = document.querySelector('.modal');
const bgModal = document.querySelector('.modal-bg');

btnOpenModal.addEventListener('click', () => {
    bgModal.classList.add('show');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
});

btnCloseModal.addEventListener('click', () => {
    modal.classList.remove('show');
    bgModal.classList.remove('show');
    document.body.style.overflow = '';
});

document.addEventListener('mousedown', (event) => {
    if (!modal.contains(event.target)) {
        modal.classList.remove('show');
        bgModal.classList.remove('show');
        document.body.style.overflow = '';
    }
});

modal.addEventListener('click', (event) => {
    event.stopPropagation();
});

