const questions = [
  {
    question: "When you feel a spark of inspiration in the morning, what do you do first?",
    answers: [
      { text: "Take bold action.", type: "Confidence" },
      { text: "Ground yourself and plan your day.", type: "Stability" },
      { text: "Call someone and share ideas.", type: "Communication" },
      { text: "Check in with loved ones.", type: "Nurturing" },
      { text: "Dive into something fun and exciting.", type: "Passion" },
      { text: "Journal and reflect.", type: "Introspection" },
      { text: "Meditate for balance.", type: "Harmony" },
      { text: "Dedicate your day to someone/something you love.", type: "Devotion" },
      { text: "Go somewhere new spontaneously.", type: "Adventure" },
      { text: "Set ambitious goals.", type: "Discipline" },
      { text: "Do something your own unique way.", type: "Individuality" },
      { text: "Help someone in need.", type: "Compassion" },
    ]
  },
  // Add more questions here...
];

const results = {
  Confidence: "You are bold and assertive like Aries ♈️",
  Stability: "You are calm and reliable like Taurus ♉️",
  Communication: "You are expressive and curious like Gemini ♊️",
  Nurturing: "You are caring and protective like Cancer ♋️",
  Passion: "You are vibrant and charismatic like Leo ♌️",
  Introspection: "You are thoughtful and analytical like Virgo ♍️",
  Harmony: "You are balanced and just like Libra ♎️",
  Devotion: "You are intense and loyal like Scorpio ♏️",
  Adventure: "You are optimistic and free-spirited like Sagittarius ♐️",
  Discipline: "You are ambitious and persistent like Capricorn ♑️",
  Individuality: "You are unique and independent like Aquarius ♒️",
  Compassion: "You are empathetic and wise like Pisces ♓️"
};

let current = 0;
let counts = {};

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const progressEl = document.getElementById("progress");
const resultEl = document.getElementById("result");

function showQuestion() {
  const q = questions[current];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  q.answers.forEach(a => {
    const btn = document.createElement("button");
    btn.textContent = a.text;
    btn.onclick = () => selectAnswer(a.type);
    answersEl.appendChild(btn);
  });
  progressEl.textContent = `Question ${current + 1} of ${questions.length}`;
}

function selectAnswer(type) {
  counts[type] = (counts[type] || 0) + 1;
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  let top = null;
  let max = 0;
  for (const [type, count] of Object.entries(counts)) {
    if (count > max) {
      max = count;
      top = type;
    }
  }
  resultEl.textContent = results[top] || "Could not determine result.";
  questionEl.textContent = "";
  answersEl.innerHTML = "";
  progressEl.textContent = "";
}

showQuestion();