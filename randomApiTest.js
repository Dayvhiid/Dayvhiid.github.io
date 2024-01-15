const button = document.getElementById("catBtn");
const image = document.getElementById("catImage");
const show = document.getElementById("idk")
const dbutton = document.getElementById("duckBtn");
const ddiv = document.getElementById("duck")

button.addEventListener("click", getRandomCat)

function getRandomCat() {
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            let url = data.url;
            //console.log(url)
            show.innerHTML = `<img src="${data.url}"  />`
        })
}

dbutton.addEventListener("click", getRandomDuck)

function getRandomDuck() {
    fetch('https:\/\/randomfox.ca\/images\/35.json')
        .then(press => press.json())
        .then(data => {
            ddiv.innerHTML = `<img src ="${data.image}">`
        })
}