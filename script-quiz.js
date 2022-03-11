const db = [
  {
    question: "1) What is the capital of South Korea?",
    a: "Paris",
    b: "Copehagen",
    c: "Seoul",
    d: "Berlin",
    correct: "c",
  },
  {
    question: "2) Which languages are complied ?",
    a: "C",
    b: "Rust",
    c: "Go",
    d: "Python",
    correct: ["a", "b", "c"],
  },
  {
    question: "3) what is 2+2 equal to ?",
    correct: "4",
  },
];
const questionText = document.getElementById("question1");
const a_answer = document.getElementById("a-answer");
const b_answer = document.getElementById("b-answer");
const c_answer = document.getElementById("c-answer");
const d_answer = document.getElementById("d-answer");

const questionText2 = document.getElementById("question2");
const a_answer2 = document.getElementById("a2-answer");
const b_answer2 = document.getElementById("b2-answer");
const c_answer2 = document.getElementById("c2-answer");
const d_answer2 = document.getElementById("d2-answer");

const questionText3 = document.getElementById("question3");
const answer3 = document.getElementById("answer3");

const answers1 = document.querySelectorAll(".answer1");
const answers2 = document.querySelectorAll(".answer2");
const quiz = document.getElementById("quiz");

loadQuiz();

function loadQuiz() {
  dropAnswer();

  const firstQuizData = db[0];
  const secondQuizData = db[1];
  const thirdQuizData = db[2];

  questionText.innerText = firstQuizData.question;
  a_answer.innerText = firstQuizData.a;
  b_answer.innerText = firstQuizData.b;
  c_answer.innerText = firstQuizData.c;
  d_answer.innerText = firstQuizData.d;

  questionText2.innerText = secondQuizData.question;
  a_answer2.innerText = secondQuizData.a;
  b_answer2.innerText = secondQuizData.b;
  c_answer2.innerText = secondQuizData.c;
  d_answer2.innerText = secondQuizData.d;

  questionText3.innerText = thirdQuizData.question;
}

function pickAnswer1() {
  let pickAnswer1 = undefined;

  answers1.forEach((answer) => {
    //the state of checkbox
    if (answer.checked) {
      pickAnswer1 = answer.id;
    }
  });

  return pickAnswer1;
}

function pickAnswer2() {
  let pickAnswer2 = [];
  answers2.forEach((answer) => {
    if (answer.checked) {
      pickAnswer2.push(answer.id);
    }
  });
  return pickAnswer2;
}

function dropAnswer() {
  answers1.forEach((answer) => {
    //the state of checkbox
    answer.checked = false;
  });

  answers2.forEach((answer) => {
    answer.checked = false;
  });
}

function isEqualQuest2() {
  if (pickAnswer2().length != db[1].correct.length) {
    return false;
  } else {
    return pickAnswer2().every(
      (value, index) => value === db[1].correct[index]
    );
  }
}

const button = document.getElementById("submit");
let score = 0;

button.addEventListener("click", (e) => {
  e.preventDefault();

  const answer1 = pickAnswer1();
  const answer2 = pickAnswer2();

  if (answer1 && answer2.length >= 1) {
    if (answer3.value === db[2].correct) {
      score++;
    }

    if (answer1 === db[0].correct && isEqualQuest2()) {
      score += 2;
    } else if (answer1 === db[0].correct && !isEqualQuest2()) {
      score++;
    } else if (isEqualQuest2() && answer1 !== db[0].correct) {
      score++;
    }
    quiz.innerHTML = `
    <h2>You got ${score} point(s)</h2> <h2> ${score}/${db.length} questions are correct.</h2>
    <h2>The answer of the quiz: </h2>
    <ol>
    <li> c</li>
    <li> a, b, c</li>
    <li> 4 </li>
    </ol>
    
    <button onclick="location.reload()">Try again</button>
`;
  } else {
    alert("you must pick an answer");
  }
});
