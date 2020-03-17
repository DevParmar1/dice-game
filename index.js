var randomNumber1;
randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2;
randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;


document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 Wins🎉";
}
if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player2 Wins🎉";
}
if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
