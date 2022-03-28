let btn = document.querySelector(".btn");
let resOne = document.getElementById("one");
let resTwo = document.getElementById("two");
let resThree = document.getElementById("three");
let resFour = document.getElementById("four");

function makePass() {
  let result = ["", "", "", ""];
  let lengthChar = 8;
  let passCharacters = "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVWXZ";
  let charactersLength = passCharacters.length;
  for (let x = 0; x < 4; x++) {
    for (let i = 0; i < lengthChar; i++) {
      result[x] += passCharacters.charAt(Math.random() * charactersLength);
    }
  }
  resOne.textContent = result[0];
  resTwo.textContent = result[1];
  resThree.textContent = result[2];
  resFour.textContent = result[3];
}

btn.addEventListener("click", makePass);
