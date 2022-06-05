'use strict';

//Selecting elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const diceElement = document.querySelector('.dice');
const btnNewElement = document.querySelector('.btn--new');
const btnRollElement = document.querySelector('.btn--roll');
const btnHoldElement = document.querySelector('.btn--hold');

//Starting condition
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
}

//Rolling dice functionality
btnRollElement.addEventListener('click', function(){

//1. Generating a random dice roll
const dice = Math.trunc(Math.random() * 6 + 1)

//2. Display dice
diceElement.classList.remove('hidden');
diceElement.src = `dice-${dice}.png`;

//3. Check for rolled 1:if true, switch to next player
if(dice !== 1){
    //add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
} else {
    //switch to the next player
    switchPlayer();
}

})

btnHoldElement.addEventListener('click', function(){
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore; 
    console.log(scores[activePlayer]);

    //scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    //2.Check if player's score is >=100
    if(scores[activePlayer] >= 100){
    // Finish the game
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    } else {
    //Switch to the next player
    switchPlayer();
    }


})








