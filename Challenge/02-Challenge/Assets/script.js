const quizQuestions = [
    {
      question: "What is a coding language?",
      answers: ["Javascript", "French", "English", "Madrid"],
      correctAnswerIndex: 0
    },
    {
      question: "What is a common systling preset?",
      answers: ["Checkers", "Arts", "Bootstrap", "Saturn"],
      correctAnswerIndex: 2
    },
    {
      question: "What are Lists in HTML?",
      answers: ["Chinese List", "Ordered List", "Java List", "Common List"],
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
  
  
  
  