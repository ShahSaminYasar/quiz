var questions = [
  [
    {
      question: "Which gas has the highest rate of diffusion?",
      options: ["Hydrogen", "Ethane", "Carbon dioxide", "Nitric oxide"],
      answer: 0,
    },
    {
      question: "Which of the following is a volatile substance?",
      options: ["SiO2", "C20H42", "Br2", "C10H8"],
      answer: 3,
    },
    {
      question: "Which one converts directly to gas from solid?",
      options: ["AlCl3", "C6H6", "MgCl2", "C4H8"],
      answer: 0,
    },
    {
      question: "Which one has a higher rate of diffusion?",
      options: ["NH3", "Cl2", "CS2", "CH4"],
      answer: 3,
    },
    {
      question: "Which of the following has the highest rate of diffusion?",
      options: ["H2", "CO2", "NH3", "SO2"],
      answer: 0,
    },
    {
      question: "Which of the following is a sublimationable substance?",
      options: ["CO2(g)", "C10H16O(s)", "C12H22O11(s)", "(NH4)2SO4(s)"],
      answer: 1,
    },
    {
      question: "Which of the following will take the longest time to diffuse?",
      options: ["Cl2", "SO2", "C2H6", "CO"],
      answer: 0,
    },
    {
      question: "Which of the following undergoes sublimation?",
      options: ["NaCl", "NH4Cl", "C6H6", "CO2(g)"],
      answer: 1,
    },
    {
      question: "Which of the following has the highest rate of diffusion?",
      options: ["CO2", "NO2", "SO2", "H2S"],
      answer: 3,
    },
    {
      question:
        "Which substance exhibits exceptional behaviour when heat is applied?",
      options: ["MgCl2", "CaCl2", "ZnCl2", "AlCl3"],
      answer: 3,
    },
    {
      question:
        "In case of condensation- (i)substance radiates heat energy (ii)velocity of particles increase (iii)volume of substance decreases. Which one is correct?",
      options: ["i, ii", "i, iii", "ii, iii", "i, ii, iii"],
      answer: 1,
    },
    {
      question: "Which order of rate of diffusion is correct?",
      options: [
        "CH4 > CO2 > NH3",
        "NH3 > H2S > CO2",
        "NH3 > CH4 > CO2",
        "CH4 > SO2 > CO2",
      ],
      answer: 1,
    },
    {
      question: "Which one of the following has the lowest rate of diffusion?",
      options: ["N2", "CO2", "O2", "HCl"],
      answer: 1,
    },
    {
      question:
        "Which of the following gases has the highest rate of effusion?",
      options: ["Cl2", "NO2", "O2", "CO"],
      answer: 3,
    },
    {
      question:
        "Solid matter converts to liquid due to the application of heat. Because- (i)intermolecular force is reduced (ii)kinetic energy of molecule increases (iii)intermolecular distance is reduced",
      options: ["i, ii", "i, iii", "ii, iii", "i, ii, iii"],
      answer: 0,
    },
    {
      question: "Which one creates white smoke?",
      options: [
        "Ammonium chloride",
        "Aluminium chlorite",
        "Naphthalene",
        "Camphor",
      ],
      answer: 0,
    },
    {
      question:
        "Produced during the combustion of wax- (i)carbon dioxide (ii)hydrogen (iii)water vapor",
      options: ["ii", "iii", "i, iii", "ii, iii"],
      answer: 2,
    },
    {
      question:
        "What will be the color of the mixture if KMnO4 is mixed with water?",
      options: ["conc. violet", "blue", "green", "pink"],
      answer: 3,
    },
    {
      question:
        "Which type of substance shows very littl volume change if temperature is increased?",
      options: ["Solid", "Liquid", "Gaseous", "Plasma"],
      answer: 0,
    },
    {
      question:
        "Which substance has the lowest intermolecular attraction force?",
      options: ["Solid", "Liquid", "Gas", "None"],
      answer: 2,
    },
    {
      question: "Which substance has the lowest intermolecular distance?",
      options: ["Solid", "Liquid", "Gas", "None"],
      answer: 0,
    },
    {
      question:
        "If a substance spreads in little time, then that substance has a-",
      options: [
        "High rate of diffusion",
        "Low rate of diffusion",
        "No diffusion",
        "None of them",
      ],
      answer: 0,
    },
    {
      question: "Diffusion rate of solid in liquid-",
      options: ["Very high", "Very low", "Average", "No diffusion"],
      answer: 1,
    },
    {
      question: "Which one vaporizes in a mixture of sand and glucose?",
      options: ["Sand", "Glucose", "Both", "None of them"],
      answer: 3,
    },
    {
      question: "Which gases form Ammonium Chloride (NH4)?",
      options: ["HCL and NH4OH", "H+ and OH-", "Cl- and NH4+", "HCL and NH3"],
      answer: 3,
    },
    {
      question: "What is the opposite process of condensation?",
      options: ["Distillation", "Sublimation", "Melting", "Boiling"],
      answer: 3,
    },
    {
      question:
        "Which substance does not have any fixed melting or boiling points?",
      options: [
        "Pure substance",
        "Metallic substance",
        "Mixture substance",
        "Non-metal substance",
      ],
      answer: 2,
    },
    {
      question:
        "Where will the smoke of NH4Cl be created because of the reaction between NH3 and HCl?",
      options: [
        "Near HCl",
        "Near NH4OH",
        "Middle of the tube",
        "Outside the tube",
      ],
      answer: 0,
    },
  ],
];

// DOM
const questionDisplay = document.getElementById("question");
const options = document.querySelector(".options");
const buttons = document.querySelectorAll(".options button");
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const scoreDisplay = document.getElementById("score");
const scoreValue = document.querySelector("#score span");
const retakeBtn = document.getElementById("retake");
const themeBtn = document.getElementById("themeBtn");

// Select question set
var choosenQuestionSet = Math.floor(Math.random() * questions.length);
var questionSet = questions[choosenQuestionSet];
var score = 0;
var currentQuestion = 0;
var question;
var selectedAnswer;
var questionTypeAnimation;
scoreValue.textContent = score + "/" + questionSet.length;

displayQuestion();

function displayQuestion() {
  if (currentQuestion < questionSet.length) {
    question = questionSet[currentQuestion];

    if (questionTypeAnimation) {
      clearInterval(questionTypeAnimation);
    }

    let index = 0;
    questionTypeAnimation = setInterval(() => {
      if (index < question.question.length) {
        questionDisplay.textContent += question.question.charAt(index);
        index++;
      } else {
        options.classList.add("visible");
        clearInterval(questionTypeAnimation);
      }
    }, 18);

    btn0.textContent = question.options[0];
    btn1.textContent = question.options[1];
    btn2.textContent = question.options[2];
    btn3.textContent = question.options[3];
  } else {
    retakeScreen();
  }
}

btn0.addEventListener("click", () => {
  checkAnswer(0);
});

btn1.addEventListener("click", () => {
  checkAnswer(1);
});

btn2.addEventListener("click", () => {
  checkAnswer(2);
});

btn3.addEventListener("click", () => {
  checkAnswer(3);
});

function checkAnswer(selectedAnswer) {
  options.classList.add("disable");
  if (selectedAnswer == question.answer) {
    score++;
    scoreValue.textContent = score + "/" + questionSet.length;
    document.getElementById(`btn${selectedAnswer}`).classList.add("correct");
    currentQuestion++;
    setTimeout(() => {
      nextQuestion();
    }, 1000);
  } else {
    currentQuestion++;
    document.getElementById(`btn${selectedAnswer}`).classList.add("incorrect");
    document.getElementById(`btn${question.answer}`).classList.add("correct");
    setTimeout(() => {
      nextQuestion();
    }, 1000);
  }
}

function nextQuestion() {
  options.classList.remove("disable");
  options.classList.remove("visible");
  buttons.forEach((button) => {
    button.classList.remove("correct", "incorrect");
  });
  setTimeout(() => {
    questionDisplay.textContent = "";
    displayQuestion();
  }, 500);
}

function retakeScreen() {
  retake.classList.add("active");
  scoreDisplay.classList.add("active");
  document.body.classList.add("retake");
}

retakeBtn.addEventListener("click", () => {
  document.body.classList.remove("retake");
  retake.classList.remove("active");
  scoreDisplay.classList.remove("active");
  score = 0;
  choosenQuestionSet = Math.floor(Math.random() * questions.length);
  console.log(choosenQuestionSet);
  questionSet = questions[choosenQuestionSet];
  scoreValue.textContent = score + "/" + questionSet.length;
  currentQuestion = 0;
  displayQuestion();
});

themeBtn.addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("light");
  body.classList.toggle("dark");
  themeBtn.classList.toggle("active");
});
