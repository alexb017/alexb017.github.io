const btnAppearance = document.querySelector('.btn-appearance');
const list = document.querySelector("#repos-list");
const theme = localStorage.getItem('theme');

if (theme) {
    document.body.classList.add(theme);
}

btnAppearance.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', '');
    } else {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
});

/*
async function getData() {
    const res = await fetch("https://api.github.com/users/alexb017/repos");
    const data = await res.json();
    console.log(data)
    list.innerHTML = "";
    data.forEach(repo => {
        if (repo.name === "grocery-store" || repo.name === "todo-react-app" || repo.name === "react-static-page" || repo.name === "note-taking-app") {
            list.insertAdjacentHTML("beforeend", `<li>
                <div>
                    <h2>${repo.name}</h2>
                    <p>${repo.description}</p>
                    <a href="${repo.html_url}" target="_blank">${repo.html_url}</a>
                    <p>${repo.homepage}</p>
                    <div class="repo-date">
                        <p>Created: ${repo.created_at.slice(0, 10)}</p>
                        <p>Last Updated: ${repo.updated_at.slice(0, 10)}</p>
                    </div>
                </div>
            </li>`);
        }
    });
    //return data;
}

getData();
*/