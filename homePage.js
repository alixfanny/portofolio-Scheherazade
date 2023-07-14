const btn = document.getElementById('btnPortfolioAccess');
const insta = document.getElementById("iconInstagram");


btn.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = 'portfolio.html';
})

insta.addEventListener("click", function(event) {
    event.preventDefault();
    window.open('https://www.instagram.com/scheherazade_portfolio/')
})

