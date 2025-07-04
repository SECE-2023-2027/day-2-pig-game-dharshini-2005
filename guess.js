
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;


const guessInput = document.getElementById('guess-input');
const checkBtn = document.getElementById('check-btn');
const againBtn = document.getElementById('again-btn');
const message = document.getElementById('message');
const scoreDisplay = document.getElementById('score');
const highscoreDisplay = document.getElementById('highscore');
const questionMark = document.getElementById('question-mark');

function displayMessage(msg) {
  message.textContent = msg;
}
function againbutton(){
     
}

// Check Button Click
checkBtn.addEventListener('click', () => {
  const guess = Number(guessInput.value);

  if (!guess) {
    displayMessage(' No number!');
     document.body.style.backgroundColor ='red';
  } else if (guess === secretNumber) {
    displayMessage(' Correct Number!   you Won the game');
    guessInput.style.display= 'none';
    checkBtn.style.display = 'none';
   
    questionMark.textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      highscoreDisplay.textContent = highscore;
    }

  } 
//   else if(guess!=secretNumber){
//       document.body.style.backgroundColor = 'red'
//   }
  
  else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : ' Too low!');
      score--;
      scoreDisplay.textContent = score;
      
    } else {
      displayMessage(' You lost the game!');
      scoreDisplay.textContent = 0;
      document.getElementById('guess-input').style.display = 'none';
      document.getElementById('check-btn').style.display = 'none';
        document.body.style.backgroundColor = 'red'
      

    }
  }
});

againBtn.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreDisplay.textContent = score;
  guessInput.value = '';
  displayMessage('Start guessing...');
  questionMark.textContent = '?';
  document.body.style.backgroundColor = '';
  guessInput.style.display= 'inline-block';
    checkBtn.style.display = 'inline-block';
});
