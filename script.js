const questions = [
    {
      question: "1) How many months are there in a year?",
      options: ["15", "12", "10", "08"],
      answer: "12"
    },
    {
      question: "2) How many days are there in a week?",
      options: ["5", "12", "15", "7"],
      answer: "7"
    },
    {
        question: "3) How many colors are there in a rainbow?",
        options: ["7", "8", "5", "12"],
        answer: "7"
    },
    {
        question: "4) Which gas do humans need to breathe to live?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        answer: "Oxygen"
    },
    {
        question: "5) How many zeroes are there in one thousand?",
        options: ["3", "4", "7", "6"],
        answer: "3"
    },
    {
        question: "6) Which part of the plant is brown and below the ground?",
        options: ["Root", "Stem", "Leaves", "Fruits"],
        answer: "Roots"
    },
    {
        question: "7) In which season do we use cotton clothes?",
        options: ["Summer", "Winter", "Autumn", "Monsoon"],
        answer: "Summer"
    },
    {
        question: "8) Orange is a source of which vitamin?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        answer: "Vitamin C"
    },
    {
        question: "9) Which animal is known as “Ship of Desert?",
        options: ["Donkey", "Camel", "Zebra", "Lion"],
        answer: "Camel"
    },
    {
        question: "10) Which animal guards our house?",
        options: ["Camel", "Lion", "Bear", "Dog"],
        answer: "Dog"
    },
    // Add more questions here
  ];
  
  const gifWin = "winning.gif";
  const gifLose = "losing.gif";
  const thresholdScore = 10; // Adjust this threshold as needed
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");
  const submitButton = document.getElementById("submit-btn");
  const resultElement = document.getElementById("result");
  
  function showQuestion() {
    const { question, options } = questions[currentQuestion];
    questionElement.textContent = question;
  
    optionsContainer.innerHTML = '';
    for (const option of options) {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.textContent = option;
      optionElement.addEventListener("click", checkAnswer);
      optionsContainer.appendChild(optionElement);
    }
  }
  
  function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const correctAnswer = questions[currentQuestion].answer;
  
    if (selectedOption === correctAnswer) {
      score++;
    }
  
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionElement.style.display = "none";
    optionsContainer.style.display = "none";
    submitButton.style.display = "none";
  
    resultElement.innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>`;
    if (score >= thresholdScore) {
      resultElement.innerHTML += 'You Win';
    } else {
      resultElement.innerHTML += `You Lose!`;
    }
  }
  
  submitButton.addEventListener("click", checkAnswer);
  
  showQuestion();
  