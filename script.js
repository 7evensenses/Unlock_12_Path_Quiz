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
  {
    question: "Which trait do you admire most in others?",
    answers: [
      { text: "Courage to lead.", type: "Confidence" },
      { text: "Calm strength.", type: "Stability" },
      { text: "Open-mindedness.", type: "Communication" },
      { text: "Warmth and care.", type: "Nurturing" },
      { text: "Enthusiasm and passion.", type: "Passion" },
      { text: "Deep thoughtfulness.", type: "Introspection" },
      { text: "Fairness and balance.", type: "Harmony" },
      { text: "Loyalty and devotion.", type: "Devotion" },
      { text: "Love of adventure.", type: "Adventure" },
      { text: "Relentless ambition.", type: "Discipline" },
      { text: "Fearless individuality.", type: "Individuality" },
      { text: "Kindness and empathy.", type: "Compassion" },
    ]
  },
  {
    question: "How do you handle stress?",
    answers: [
      { text: "Tackle it head-on.", type: "Confidence" },
      { text: "Stay steady and patient.", type: "Stability" },
      { text: "Talk it through.", type: "Communication" },
      { text: "Seek comfort in loved ones.", type: "Nurturing" },
      { text: "Channel it into something exciting.", type: "Passion" },
      { text: "Reflect and find insight.", type: "Introspection" },
      { text: "Look for balance.", type: "Harmony" },
      { text: "Stay committed to a solution.", type: "Devotion" },
      { text: "Take a spontaneous break.", type: "Adventure" },
      { text: "Organize and work harder.", type: "Discipline" },
      { text: "Do it your unique way.", type: "Individuality" },
      { text: "Help others cope too.", type: "Compassion" },
    ]
  },
  {
    question: "Which place feels like paradise to you?",
    answers: [
      { text: "A stage or spotlight.", type: "Confidence" },
      { text: "A cozy cabin in the woods.", type: "Stability" },
      { text: "A lively café full of chatter.", type: "Communication" },
      { text: "Home surrounded by family.", type: "Nurturing" },
      { text: "A buzzing concert or festival.", type: "Passion" },
      { text: "A quiet library or retreat.", type: "Introspection" },
      { text: "A peaceful garden.", type: "Harmony" },
      { text: "Wrapped in a partner’s arms.", type: "Devotion" },
      { text: "A backpacking trip.", type: "Adventure" },
      { text: "An inspiring workspace.", type: "Discipline" },
      { text: "A hidden, secret place.", type: "Individuality" },
      { text: "A shelter helping others.", type: "Compassion" },
    ]
  },
  {
    question: "Your biggest strength is your...",
    answers: [
      { text: "Confidence.", type: "Confidence" },
      { text: "Reliability.", type: "Stability" },
      { text: "Communication skills.", type: "Communication" },
      { text: "Caring heart.", type: "Nurturing" },
      { text: "Passionate spirit.", type: "Passion" },
      { text: "Ability to reflect.", type: "Introspection" },
      { text: "Sense of fairness.", type: "Harmony" },
      { text: "Loyal nature.", type: "Devotion" },
      { text: "Adventurous side.", type: "Adventure" },
      { text: "Self-discipline.", type: "Discipline" },
      { text: "Authenticity.", type: "Individuality" },
      { text: "Empathy.", type: "Compassion" },
    ]
  },
  {
    question: "When you meet new people, you...",
    answers: [
      { text: "Take charge of the vibe.", type: "Confidence" },
      { text: "Stay grounded and calm.", type: "Stability" },
      { text: "Strike up conversation.", type: "Communication" },
      { text: "Make them feel at home.", type: "Nurturing" },
      { text: "Bring energy and fun.", type: "Passion" },
      { text: "Observe and listen.", type: "Introspection" },
      { text: "Look for common ground.", type: "Harmony" },
      { text: "Stay true to your people.", type: "Devotion" },
      { text: "Ask about adventures.", type: "Adventure" },
      { text: "Find out what drives them.", type: "Discipline" },
      { text: "Show your true self.", type: "Individuality" },
      { text: "Offer kindness.", type: "Compassion" },
    ]
  },
  {
    question: "Which quote speaks to you most?",
    answers: [
      { text: "Fortune favors the bold.", type: "Confidence" },
      { text: "Slow and steady wins the race.", type: "Stability" },
      { text: "Communication is connection.", type: "Communication" },
      { text: "Love makes a house a home.", type: "Nurturing" },
      { text: "Live with passion.", type: "Passion" },
      { text: "Know thyself.", type: "Introspection" },
      { text: "Balance is everything.", type: "Harmony" },
      { text: "True love never fades.", type: "Devotion" },
      { text: "Not all who wander are lost.", type: "Adventure" },
      { text: "Dreams don’t work unless you do.", type: "Discipline" },
      { text: "Be unapologetically you.", type: "Individuality" },
      { text: "Kindness is magic.", type: "Compassion" },
    ]
  },
  {
    question: "Which gift would you cherish most?",
    answers: [
      { text: "A trophy or award.", type: "Confidence" },
      { text: "A cozy blanket.", type: "Stability" },
      { text: "A heartfelt letter.", type: "Communication" },
      { text: "A family photo album.", type: "Nurturing" },
      { text: "Tickets to a show.", type: "Passion" },
      { text: "A leather journal.", type: "Introspection" },
      { text: "A zen garden kit.", type: "Harmony" },
      { text: "A promise ring.", type: "Devotion" },
      { text: "A travel voucher.", type: "Adventure" },
      { text: "A planner or organizer.", type: "Discipline" },
      { text: "A custom art piece.", type: "Individuality" },
      { text: "A donation in your name.", type: "Compassion" },
    ]
  },
  {
    question: "Which animal do you feel drawn to?",
    answers: [
      { text: "Lion.", type: "Confidence" },
      { text: "Bear.", type: "Stability" },
      { text: "Parrot.", type: "Communication" },
      { text: "Elephant.", type: "Nurturing" },
      { text: "Peacock.", type: "Passion" },
      { text: "Owl.", type: "Introspection" },
      { text: "Dove.", type: "Harmony" },
      { text: "Wolf.", type: "Devotion" },
      { text: "Horse.", type: "Adventure" },
      { text: "Mountain Goat.", type: "Discipline" },
      { text: "Fox.", type: "Individuality" },
      { text: "Dolphin.", type: "Compassion" },
    ]
  },
  {
    question: "What’s your ideal weekend vibe?",
    answers: [
      { text: "Starting something big.", type: "Confidence" },
      { text: "Relaxing at home.", type: "Stability" },
      { text: "Hanging with friends.", type: "Communication" },
      { text: "Family time.", type: "Nurturing" },
      { text: "Dancing all night.", type: "Passion" },
      { text: "Reading a book.", type: "Introspection" },
      { text: "Yoga and tea.", type: "Harmony" },
      { text: "Quality time with partner.", type: "Devotion" },
      { text: "Road trip!", type: "Adventure" },
      { text: "Working on goals.", type: "Discipline" },
      { text: "Doing something different.", type: "Individuality" },
      { text: "Volunteering.", type: "Compassion" },
    ]
  },
  {
    question: "When you look at the stars, you feel...",
    answers: [
      { text: "Excited to dream big.", type: "Confidence" },
      { text: "Safe and calm.", type: "Stability" },
      { text: "Curious to share thoughts.", type: "Communication" },
      { text: "Grateful for loved ones.", type: "Nurturing" },
      { text: "Energized to celebrate life.", type: "Passion" },
      { text: "Deeply reflective.", type: "Introspection" },
      { text: "At peace with the universe.", type: "Harmony" },
      { text: "Closer to someone special.", type: "Devotion" },
      { text: "Ready for new adventures.", type: "Adventure" },
      { text: "Motivated to keep building.", type: "Discipline" },
      { text: "Inspired to be you.", type: "Individuality" },
      { text: "Compassion for all life.", type: "Compassion" },
    ]
  },
  {
    question: "Your friends come to you for...",
    answers: [
      { text: "Leadership.", type: "Confidence" },
      { text: "Dependability.", type: "Stability" },
      { text: "Advice and ideas.", type: "Communication" },
      { text: "Comfort and warmth.", type: "Nurturing" },
      { text: "Fun and energy.", type: "Passion" },
      { text: "Insight and wisdom.", type: "Introspection" },
      { text: "Conflict resolution.", type: "Harmony" },
      { text: "Relationship advice.", type: "Devotion" },
      { text: "Trip planning.", type: "Adventure" },
      { text: "Career motivation.", type: "Discipline" },
      { text: "Real talk.", type: "Individuality" },
      { text: "Emotional support.", type: "Compassion" },
    ]
  }
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