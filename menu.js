//let drinks = document.getElementsByName("drinks")
//et tag = document.getElementById("tag")
// drinks.forEach((fruit) => {
//     if (fruit.checked === true) {
//         tag.innerHTML = "You have selected " + fruit.value
//         console.log(fruit.value)
//     }
// })
let tag = document.getElementById("tag")

function getValue() {
    let drinkArray = []
    let tag = document.getElementById("tag")
    let drink = document.getElementsByName("drinks");
    for (let i = 0; i < drink.length; i++) {
        if (drink[i].checked) {
            drinkArray.pop(drink[i].value)
            let drinkArr = drinkArray.toString()
            console.log(drinkArr[i])
        }
    }
}