const image = document.getElementById("pic")
const left = document.getElementById("left")
const right = document.getElementById("right")
const userName = document.getElementById("user-name");
const userDesc = document.getElementById("user-description");
let userID = -1;
let prevUserID = userID - 1
const users = [{
    username: "Donnie Mclurklin",
    decription: "an intelligent boy with a wide mastery of eb development skills aimed at the production of large scale distributed system and a solid understanding of internet of things",
    image: "images/img2.jpg"
}, {
    username: "Almary Josep",
    image: "images/img3.jpg",
    decription: "Fugiat qui adipisicing sunt est nulla officia deserunt mollit et nulla minim mollit eiusmod. Consectetur deserunt eiusmod est deserunt cupidatat sit nostrud laborum do ut tempor. Sunt Lorem consequat proident velit commodo anim laboris. Non enim deserunt ipsum veniam sunt duis culpa aliquip ullamco non aliquip id aliqua nostrud. Aliqua ut consequat pariatur nulla consequat do incididunt aute laborum."
}, {
    image: "images/img4.jpg",
    username: "Anita white",
    decription: "Officia elit veniam duis exercitation non dolore tempor dolore sint eiusmod ut. Nostrud incididunt ex do aliqua culpa quis nisi in magna labore. Enim aliquip esse do esse cupidatat amet non velit ad elit mollit. Non eiusmod est quis anim sint in ut. Ad exercitation commodo nostrud aliquip anim sit id officia. Magna id in aute officia cupidatat. Proident minim veniam minim amet enim id labore nisi nulla."
}]
let userNameId;
right.addEventListener("click", function() {
    userID++;
    userName.innerHTML = users[userID].username
    userDesc.innerHTML = users[userID].decription
    image.src = users[userID].image
    if (userID >= 2) {
        userID = 2
    }

})
left.addEventListener("click", function() {
    userID--
    userName.innerHTML = users[userID].username
    userDesc.innerHTML = users[userID].decription
    image.src = users[userID].image

})