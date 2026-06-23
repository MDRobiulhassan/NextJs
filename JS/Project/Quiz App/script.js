document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.getElementById("quiz-container");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const nextBtn = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result-container");
  const scoreElement = document.getElementById("score");
  const restartBtn = document.getElementById("restart-btn");
  const startBtn = document.getElementById("start-btn");

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: [
        "Harper Lee",
        "Mark Twain",
        "Ernest Hemingway",
        "F. Scott Fitzgerald",
      ],
      answer: "Harper Lee",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener("click", startQuiz);

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) showQuestion();
    else showResult();
  });

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
  });

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = "";
    questions[currentQuestionIndex].options.forEach((option) => {
      const li = document.createElement("li");
      li.textContent = option;
      li.addEventListener("click", () => selectAnswer(option));
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (choice === correctAnswer) score++;
    nextBtn.classList.remove("hidden");
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreElement.textContent = `${score} out of ${questions.length}`;
  }
});
