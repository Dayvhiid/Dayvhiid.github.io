const input = document.getElementById("inputField")
const generatePassword = document.getElementById("generateButton")
const copyPassword = document.getElementById("copyButton")
const label = document.getElementById("label")

let chars = "123456789abcdefghijklmnopqrstuvwxyz\[-=+/><\ABCDEFGHIJKLMNOPQRSRTUVWXYZ";


generatePassword.addEventListener("click", function() {
    let passwordLenght = 12
    let password = []
    for (let i = 0; i <= passwordLenght; i++) {
        p = Math.floor(Math.random() * chars.length) + 1
        password.push(chars[p])
        // console.log( p = Math.floor(Math.random() * chars.length) + 1)
    }
    //password = String(password)
    password = password.join("")
    input.value = password
})

copyPassword.addEventListener("click", function() {
    label.innerHTML = "Alaye copy it the normal way jare"
})