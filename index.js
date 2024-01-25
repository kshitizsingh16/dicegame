var randomnumer1 = Math.floor(Math.random() * 6) + 1;
var randomnumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomnumer1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomnumber2 + ".png");
if (randomnumer1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Player1 wins 🚩";
}
else if (randomnumer1 === randomnumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
}
else {
    document.querySelector("h1").innerHTML = "Player2 wins 🚩";
}


