/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let suits = ["diamond", "spade", "heart", "club"];

window.onload = function() {
  //write your code here
  let topDiv = document.querySelector("#topIcon");
  let botDiv = document.querySelector("#botIcon");
  let suitsPosition = Math.round(Math.random() * 3);
  topDiv.className = suits[suitsPosition];
  botDiv.className = suits[suitsPosition];
  botDiv.style.transform = "rotate(180deg)";
  let numberDiv = document.querySelector("#card-number");
  let number = Math.round(Math.random() * (12 - 1) + 1);
  //console.log(number);
  numberDiv.innerHTML = number;

  setInterval(newCard, 10000);

  function newCard() {
    let suitsPosition = Math.round(Math.random() * 3);
    topDiv.className = suits[suitsPosition];
    botDiv.className = suits[suitsPosition];
    let arrayofItems = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "J",
      "Q",
      "K"
    ];
    let number = arrayofItems[Math.round(Math.random() * 11)];
    numberDiv.innerHTML = number;
  }

  let button = document.querySelector("#newCardButton");
  button.addEventListener("click", newCard);

  let divCard = document.querySelector("#divCard");

  let changingWidth = document.querySelector("#widthOfCard");

  changingWidth.addEventListener("keydown", event => {
    let newWidth = changingWidth.value;
    newWidth = parseInt(newWidth);
    if (event.keyCode === 13) {
      if (newWidth < 120 || newWidth > 1000) {
        alert("Please insert a value between 120 and 1000");
        changingWidth.value = "";
      } else {
        divCard.style.width = newWidth + "px";
      }
    }
  });

  let changingHeight = document.querySelector("#heightOfCard");

  changingHeight.addEventListener("keydown", event => {
    let newHeight = changingHeight.value;
    newHeight = parseInt(newHeight);
    if (event.keyCode === 13) {
      if (newHeight < 120 || newHeight > 1000) {
        alert("Please insert a value between 120 and 1000");
        changingHeight.value = "";
      } else {
        divCard.style.height = newHeight + "px";
      }
    }
  });

  console.log("Hello Rigo from the console!");
};
