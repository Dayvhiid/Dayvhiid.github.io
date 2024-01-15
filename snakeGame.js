const gameBoard = document.getElementById("gameBoard")
const context = gameBoard.getContext("2d")
const scoreText = document.getElementById("scoreText")
const resetBtn = document.getElementById("resetBtn")
const gameWidth = gameBoard.gameWidth;
const gameHeight = gameBoard.height;
const boardBackground = "white";
const snakeColor = "lightGreen";
const snakeBorder = "black";
const unitSize = 25;
let running = false;
let xve