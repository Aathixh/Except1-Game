'use strict';

const player0Score = document.querySelector('#score--0');
const player1Score = document.querySelector('#score--1');
const player0CurrentScore = document.getElementById('current--0');
const player1CurrentScore = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions of the game
player0Score.textContent = 0;
player1Score.textContent = 0;
let currentScore = 0;
// document.querySelector('.dice').style.display = 'none';
diceElement.classList.add('hidden');

//rolling dice
btnDice.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //2. Display dice
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;
  //3.Check for rolled 1: if true,
  if (dice !== 1) {
    //Add dice to current score
    currentScore += dice;
    player0CurrentScore.textContent = currentScore;
  } else {
    //switch to next player
  }
});
