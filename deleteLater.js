let chars = "123456789abcdefghijklmnopqrstuvwxyz\[-=+/><\ABCDEFGHIJKLMNOPQRSRTUVWXYZ"
let passwordLenght = 12
let password = []
let element

for (let i = 0; i < 13; i++) {
    p = Math.floor(Math.random() * chars.length) + 1
    console.log(chars[p])
    password.push(chars[p])
}
//password = String(password)
password = password.join("")
password = String(password)
console.log(password)