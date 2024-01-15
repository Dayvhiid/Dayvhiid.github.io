const button = document.getElementById("generateQuote")
const display = document.getElementById("quote")
const character = document.getElementById("character")

button.addEventListener("click", function() {
    fetch('https://api.gameofthronesquotes.xyz/v1/random')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data.sentence)
            console.log(data.character.name)
            display.innerHTML = data.sentence
            character.innerHTML = data.character.name
        })
})