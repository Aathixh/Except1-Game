'use strict';
//Selecting elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const player0TotalScore = document.querySelector('#score--0');
const player1TotalScore = document.querySelector('#score--1');
const player0CurrentScore = document.getElementById('current--0');
const player1CurrentScore = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModel();
  }
});

//Starting conditions of the game
let totalScore, currentScore, activePlayer, playing;
const initialization = function () {
  totalScore = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true; //state variable
  player0TotalScore.textContent = 0;
  player1TotalScore.textContent = 0;
  player0CurrentScore.textContent = 0;
  player1CurrentScore.textContent = 0;
  diceElement.classList.add('hidden'); // document.querySelector('.dice').style.display = 'none';
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
};

initialization();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

//Rolling dice
btnDice.addEventListener('click', function () {
  if (playing) {
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
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

//Holding current score
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to activePlayer's Score
    totalScore[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    //2. Check if player's score is >= 100
    if (totalScore[activePlayer] >= 10) {
      //Finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceElement.classList.add('hidden');
    } else {
      //Switch to the next player
      switchPlayer();
    }
  }
});

//new game
btnNew.addEventListener('click', initialization);
