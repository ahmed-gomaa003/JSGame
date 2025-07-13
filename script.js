'use strict';
/*console.log(document.querySelector('.message').textContent);
// DOM Document object model
// DOM is a structured representation of an HTML document
// DOM is used to connect webpages to scripts like JS
// DOM allow JS to access HTML Elements
//DOM like a connector between HTML and JS
// DOM is a tree of nodes/elements created by the browser
// DOM is a very complex API
// DOM isn't part of JS, it's a separate API

// DOM and DOM Manipulation
document.querySelector('.message').textContent = '👍correct number';
document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value);
//.value get the value of the input field
document.querySelector('.guess').value = 0;
//.value set the value of the input field*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//*20 to get a number between 0 and 20
//Math.trunc to remove the decimal part
//+1 to get a number between 1 and 20

let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    document.querySelector('.message').textContent = '🚫 No number!';
  } else if (guessNumber === secretNumber) {
    document.querySelector('.message').textContent = '👍Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.highscore').value = highscore;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game';
    }
  } else if (guessNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.guess').value = '';
  console.log(secretNumber);
});
// refactoring code is the process of restructuring existing computer code without changing its external behavior to keep the code dry
// dry = don't repeat yourself
