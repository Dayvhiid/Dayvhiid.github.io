const Button = document.getElementById("Btn");
const input = document.getElementById("inputField")
const yearNum = document.getElementById("yearsText")
const monthNum = document.getElementById("monthsText")
const dayNum = document.getElementById("daysText")


function calculateAge() {
    let birthDate = new Date(input.value)
    let d = birthDate.getDate()
    let m = birthDate.getMonth() + 1
    let y = birthDate.getFullYear()

    let today = new Date()
    let d2 = today.getDate()
    let m2 = today.getMonth() + 1
    let y2 = today.getFullYear()

    let d3, m3, y3
    y3 = y2 - y;

    if (m > m2) {
        y3--
    } else {
        y++
    }

    if (d2 > d) {
        d3 = d2 - d
    } else {
        d3 = d - d2
    }

    if (m > m2) {
        let diff = m - m2
        m3 = (m2 + diff) + 1
    } else {
        m3 = m2 - m
    }
    console.log(d3, m3, y3)

    yearNum.innerHTML = y3
    monthNum.innerHTML = m3
    dayNum.innerHTML = d3


}