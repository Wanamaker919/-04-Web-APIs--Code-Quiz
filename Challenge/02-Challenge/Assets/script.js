const quizQuestions = [
    {
      question: "What is the capital of France?",
      answers: ["Berlin", "Paris", "Rome", "Madrid"],
      correctAnswerIndex: 1
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: ["Jupiter", "Venus", "Mars", "Saturn"],
      correctAnswerIndex: 0
    },
    {
      question: "What is the primary language spoken in Brazil?",
      answers: ["Spanish", "Portuguese", "English", "French"],
      correctAnswerIndex: 1
    }
  ];
  
  const quizContainer = document.getElementById("quiz-container");
  const submitButton = document.getElementById("submit-quiz");
  const scoreContainer = document.getElementById("score-container");
  
  function buildQuiz() {
    for (let i = 0; i < quizQuestions.length; i++) {
      const question = quizQuestions[i];
      const questionContainer = document.createElement("div");
      const questionText = document.createElement("h3");
      questionText.innerText = question.question;
      questionContainer.appendChild(questionText);
      for (let j = 0; j < question.answers.length; j++) {
        const answerContainer = document.createElement("div");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "question-" + i;
        radio.value = j;
        answerContainer.appendChild(radio);
        const answerText = document.createElement("span");
        answerText.innerText = question.answers[j];
        answerContainer.appendChild(answerText);
        questionContainer.appendChild(answerContainer);
      }
      quizContainer.appendChild(questionContainer);
    }
  }
  
  function gradeQuiz() {
    let score = 0;
    for (let i = 0; i < quizQuestions.length; i++) {
      const question = quizQuestions[i];
      const selectedAnswer = document.querySelector(`input[name="question-${i}"]:checked`);
      if (selectedAnswer && selectedAnswer.value == question.correctAnswerIndex) {
        score++;
      }
    }
    scoreContainer.innerText = `You scored ${score} out of ${quizQuestions.length}!`;
  }
  
  buildQuiz();
  submitButton.addEventListener("click", gradeQuiz);
  
  
  
  