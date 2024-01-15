let menu = document.getElementById("menu")
let menuItems = document.getElementById("menuItems")
var menuState = true
menuItems.style.display = "none"
menu.addEventListener("click", function() {
    if(menuState === false){
        menuItems.style.display = "none"
    } else if (menuState === true){
        menuItems.style.display = "block"
    }
    menuState = !menuState
})