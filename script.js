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

  const backgrounds = [
    "url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?&auto=format&fit=crop&w=1600&q=80')",
    "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?&auto=format&fit=crop&w=1600&q=80')",
    "url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?&auto=format&fit=crop&w=1600&q=80')",
    "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?&auto=format&fit=crop&w=1600&q=80')",
    "url('https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?&auto=format&fit=crop&w=1600&q=80')",
    "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?&auto=format&fit=crop&w=1600&q=80')",
    "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?&auto=format&fit=crop&w=1600&q=80')",
    "url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?&auto=format&fit=crop&w=1600&q=80')",
    "url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?&auto=format&fit=crop&w=1600&q=80')",
    "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?&auto=format&fit=crop&w=1600&q=80')",
    "url('https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?&auto=format&fit=crop&w=1600&q=80')",
    "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?&auto=format&fit=crop&w=1600&q=80')",
  ];

  document.body.style.backgroundImage = backgrounds[current];
}