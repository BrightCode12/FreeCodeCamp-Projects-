const questions = [
  {
    category: "JavaScript Basics",
    question: "In JavaScript, typeof null returns null.?",
    choices: ["True", "False", "None"],
    answer: "False"
  },
  {
    category: "JavaScript Basics",
    question: "Arrays in JavaScript are considered objects.?",
    choices: ["True", "False", "None"],
    answer: "True"
  },
  {
    category: "Data Types",
    question: "JavaScript is a statically typed language.?",
    choices: ["True", "False", "None"],
    answer: "False"
  },
  {
    category: "Operators",
    question: "The == operator compares both value and type.?",
    choices: ["True", "False", "None"],
    answer: "False"
  },
  {
    category: "Functions",
    question: "Functions can be assigned to variables in JavaScript.?",
    choices: ["True", "False", "None"],
    answer: "True"
  }
];
function getRandomQuestion(question){
return questions.question;
}