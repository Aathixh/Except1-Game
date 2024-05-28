'use strict';

const player0Score = document.querySelector('#score--0');
const player1Score = document.querySelector('#score--1');
const dice = document.querySelector('.dice');

//Starting conditions of the game
player0Score.textContent = 0;
player1Score.textContent = 0;
// document.querySelector('.dice').style.display = 'none';
dice.classList.add('hidden');
