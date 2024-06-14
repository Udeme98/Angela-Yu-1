let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImage1 = `./images/dice${randomNumber1}.png`;
let randomImage2 = `./images/dice${randomNumber2}.png`;

let dice1 = document.querySelector(".img1");
let dice2 = document.querySelector(".img2");

dice1.setAttribute("src", randomImage1);
dice2.setAttribute("src", randomImage2);

let h1 = document.querySelector("h1");
// console.log(h1);

if (randomNumber1 > randomNumber2) {
  h1.innerText = "Player 1 wins";
} else if (randomNumber2 > randomNumber1) {
  h1.innerText = "Player 2 wins";
} else {
  h1.innerText = "Draw";
}
