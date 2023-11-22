const photos = [
    {
        src: "./img/portfolio/0.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/1.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/2.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/3.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/4.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/5.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/6.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/7.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/8.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/9.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/10.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/11.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/12.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/13.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/14.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/15.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/16.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/17.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/18.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/19.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/20.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/21.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/22.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/23.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/24.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/25.jpg",
        alt: "Schéhérazade portfolio",
    },
    {
        src: "./img/portfolio/26.jpg",
        alt: "Schéhérazade portfolio",
    },
]
const images = document.getElementsByClassName("photo");
const book = document.querySelector(".book");

function addImages() {
    photos.forEach((photo) => {
        addImage(photo.src, photo.alt)
    })
}

function addImage(src, alt){
    const div = document.createElement("div")
    div.classList.add('book-item')
    const img = document.createElement("img")
    img.setAttribute("src", src)
    img.setAttribute("alt",alt )
    book.appendChild(div)
    div.appendChild(img)
}

const homePage = document.querySelector(".brandname-name");
homePage.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = 'index.html';
})

/*const about = document.querySelector(".about");
about.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = 'about.html';
})

const contact = document.querySelector(".contact");
about.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = 'contact.html';
})*/

addImages()



