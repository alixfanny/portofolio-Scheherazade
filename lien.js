const btn = document.getElementById('btn');
const insta = document.querySelector(".fa-instagram");


btn.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = 'portfolio.html';
})

insta.addEventListener("click", function(event) {
    event.preventDefault();
    window.open('https://www.instagram.com/scheherazade_portfolio/')
})

