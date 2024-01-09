const quizData = [
  {
    questions: "What is the capital of Nepal",
    a: "Dang",
    b: "Kathmandu",
    c: "Butwal",
    d: "Dolpa",
    correct: "b",
  },
  {
    questions: "Which is the longest river in Nepal",
    a: "Hang-ho",
    b: "karnali",
    c: "Nile",
    d: "Rapti ",
    correct: "b",
  },
  {
    questions: "Who is the current President of Nepal",
    a: "Puspa Kamal Dahal",
    b: "kp oli",
    c: "Shyam",
    d: "Dr.babu ram ",
    correct: "a",
  },
];

const questionE1 = document.querySelector("#question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const btn = document.querySelector("#btn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionE1.textContent = currentQuizData.questions;
  a_text.textContent = currentQuizData.a;
  b_text.textContent = currentQuizData.b;
  c_text.textContent = currentQuizData.c;
  d_text.textContent = currentQuizData.d;

  const radioButtons = document.querySelectorAll(".answer");
  for (const radio of radioButtons) {
    radio.checked = false;
  }
}

function getSelected() {
  const radioButtons = document.querySelectorAll(".answer");
  let selectedValue = null;

  for (const radio of radioButtons) {
    if (radio.checked) {
      selectedValue = radio.value;
      return selectedValue;
    }
  }

  return null;
}

// function removeAnswerChoices() {
//   const answerChoices = document.querySelectorAll(".answer");
//   for (const choice of answerChoices) {
//     choice.remove();
//   }
//   const label = document.querySelectorAll(".label");
//   for (const rlabel of label) {
//     rlabel.remove();
//   }
// }

btn.addEventListener("click", () => {
  let answer = getSelected();
  //console.log(answer);

  if (answer !== null) {
    if (answer == quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      const quizcontainer = document.querySelector(".quiz-container");
      quizcontainer.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> 
      <button  onClick="location.reload()">Reload</button>`;
      //removeAnswerChoices();
      currentQuiz = 0;
      score = 0;
    }
  }
});
