var quizForm = document.querySelector(".quiz-form");
var submitButton = document.querySelector("#submit-button");
var outputScore = document.querySelector(".output-msg");

var correctAnswers = ['90°', 'Right angled', 'Equilateral triangle'];

function calculateScore() {
    
    var formResults = new FormData(quizForm);
    let score = 0,
      index = 0;
    for (let value of formResults.values()) {
      if (value === correctAnswers[index]) {
        score = score + 1;
      }
      index = index + 1;
    }
    outputScore.innerText = "The score is " + score;
  }
  
  submitButton.addEventListener("click", calculateScore)