
function showRandomNews() {
    const totalItems = 3;

    const randomIndex = Math.floor(Math.random() * totalItems);

    const container = document.getElementById("news");

    const items = [
        '<img src="news-denner-edition.png" alt="news denner-edition"></img>',
        '<img src="news-canta.png" alt="news canta"></img>',
        '<img src="news-helder-evo.png" alt="news helder-evo"></img>'
    ];

    container.innerHTML = items[randomIndex];
}

document.addEventListener("DOMContentLoaded", showRandomNews);