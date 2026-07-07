// ==================== AUDIO ====================
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

function playTick() {
  const ctx = getAudioContext();
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();

  oscillator.connect(gain);
  gain.connect(ctx.destination);

  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(880, ctx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.1);

  gain.gain.setValueAtTime(0.3, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + 0.15);
}

function playGong() {
  const ctx = getAudioContext();

  const osc1 = ctx.createOscillator();
  const gain1 = ctx.createGain();
  osc1.connect(gain1);
  gain1.connect(ctx.destination);
  osc1.type = 'sine';
  osc1.frequency.setValueAtTime(150, ctx.currentTime);
  gain1.gain.setValueAtTime(0.4, ctx.currentTime);
  gain1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.5);
  osc1.start(ctx.currentTime);
  osc1.stop(ctx.currentTime + 1.5);

  const osc2 = ctx.createOscillator();
  const gain2 = ctx.createGain();
  osc2.connect(gain2);
  gain2.connect(ctx.destination);
  osc2.type = 'sine';
  osc2.frequency.setValueAtTime(300, ctx.currentTime);
  osc2.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 1.0);
  gain2.gain.setValueAtTime(0.3, ctx.currentTime);
  gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.0);
  osc2.start(ctx.currentTime);
  osc2.stop(ctx.currentTime + 1.0);

  const osc3 = ctx.createOscillator();
  const gain3 = ctx.createGain();
  osc3.connect(gain3);
  gain3.connect(ctx.destination);
  osc3.type = 'triangle';
  osc3.frequency.setValueAtTime(600, ctx.currentTime);
  osc3.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.8);
  gain3.gain.setValueAtTime(0.15, ctx.currentTime);
  gain3.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);
  osc3.start(ctx.currentTime);
  osc3.stop(ctx.currentTime + 0.8);
}

// ==================== GAME STATE ====================
let setupTeams = []; // { name, color } — tracks teams during setup

let gameState = {
  teams: [], // { name, score, color }
  currentTeamIndex: 0,
  selectedCategory: 'todas',
  timePerTurn: CONFIG.timer.default,
  currentWord: '',
  timerInterval: null,
  timeRemaining: CONFIG.timer.default,
  isTimerRunning: false,
  roundPoints: 0,
  roundNumber: 0,
  roundHistory: [], // { round, teamIndex, points }
  usedWords: new Set()
};

// ==================== DOM ELEMENTS ====================
const setupScreen = document.getElementById('setup-screen');
const gameScreen = document.getElementById('game-screen');
const resultsScreen = document.getElementById('results-screen');
const helpScreen = document.getElementById('help-screen');

const startGameBtn = document.getElementById('start-game-btn');
const startRoundBtn = document.getElementById('start-round-btn');
const correctBtn = document.getElementById('correct-btn');
const skipBtn = document.getElementById('skip-btn');
const nextTurnBtn = document.getElementById('next-turn-btn');
const endGameBtn = document.getElementById('end-game-btn');
const backToSetupBtn = document.getElementById('back-to-setup-btn');
const playAgainBtn = document.getElementById('play-again-btn');

const timerCircle = document.getElementById('timer-circle');
const timerValue = document.getElementById('timer-value');
const wordDisplay = document.getElementById('word-display');
const theWord = document.getElementById('the-word');
const currentTeamName = document.getElementById('current-team-name');
const roundSummary = document.getElementById('round-summary');
const roundPointsEl = document.getElementById('round-points');

// ==================== INITIALIZATION ====================
function initGame() {
  // Start with default number of teams with random names
  setupTeams = [];
  for (let i = 0; i < CONFIG.teams.default; i++) {
    const color = CONFIG.teams.defaults[i].color;
    const usedNames = setupTeams.map(t => t.name);
    const available = CONFIG.teams.randomNames.filter(n => !usedNames.includes(n));
    const name = available.length > 0
      ? available[Math.floor(Math.random() * available.length)]
      : CONFIG.teams.defaults[i].name;
    setupTeams.push({ name, color });
  }
  renderTeamInputs();

  document.getElementById('add-team-btn').addEventListener('click', addTeam);
}

function getNextColor() {
  // Find the first default color not currently used
  const usedColors = setupTeams.map(t => t.color);
  const available = CONFIG.teams.defaults.filter(d => !usedColors.includes(d.color));
  return available.length > 0 ? available[0].color : CONFIG.teams.defaults[0].color;
}

function getRandomTeamName() {
  const usedNames = setupTeams.map(t => t.name);
  const available = CONFIG.teams.randomNames.filter(n => !usedNames.includes(n));
  if (available.length === 0) return 'Equipo ' + (setupTeams.length + 1);
  return available[Math.floor(Math.random() * available.length)];
}

function addTeam() {
  if (setupTeams.length >= CONFIG.teams.max) return;
  const color = getNextColor();
  const name = getRandomTeamName();
  setupTeams.push({ name, color });
  renderTeamInputs();
  // Focus the new input
  const inputs = document.querySelectorAll('#teams-config-container input');
  const lastInput = inputs[inputs.length - 1];
  if (lastInput) lastInput.focus();
}

function removeTeam(index) {
  if (setupTeams.length <= CONFIG.teams.min) return;
  setupTeams.splice(index, 1);
  renderTeamInputs();
}

function renderTeamInputs() {
  const container = document.getElementById('teams-config-container');
  container.innerHTML = '';

  setupTeams.forEach((team, i) => {
    const div = document.createElement('div');
    div.className = 'team-input';

    const label = document.createElement('label');
    label.innerHTML = `<span class="team-color-dot" style="background:${team.color}"></span>`;

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = `Nombre equipo ${i + 1}`;
    input.value = team.name;
    input.maxLength = CONFIG.teams.maxNameLength;
    input.addEventListener('input', () => {
      setupTeams[i].name = input.value;
    });

    div.appendChild(label);
    div.appendChild(input);

    // Delete button (only if more than minimum)
    if (setupTeams.length > CONFIG.teams.min) {
      const deleteBtn = document.createElement('button');
      deleteBtn.type = 'button';
      deleteBtn.className = 'delete-team-btn';
      deleteBtn.title = 'Eliminar equipo';
      deleteBtn.innerHTML = '&#128465;';
      deleteBtn.addEventListener('click', () => removeTeam(i));
      div.appendChild(deleteBtn);
    }

    container.appendChild(div);
  });

  // Show/hide add button
  const addBtn = document.getElementById('add-team-btn');
  if (addBtn) {
    addBtn.style.display = setupTeams.length >= CONFIG.teams.max ? 'none' : '';
  }
}

function renderCategories() {
  const container = document.getElementById('categories-container');
  container.innerHTML = '';
  CONFIG.categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'category-btn' + (cat.id === gameState.selectedCategory ? ' selected' : '');
    btn.dataset.category = cat.id;
    btn.textContent = cat.label;
    btn.addEventListener('click', () => {
      container.querySelectorAll('.category-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      gameState.selectedCategory = btn.dataset.category;
    });
    container.appendChild(btn);
  });
}

function renderTimeOptions() {
  const container = document.getElementById('time-options-container');
  container.innerHTML = '';
  CONFIG.timer.options.forEach(time => {
    const btn = document.createElement('button');
    btn.className = 'time-btn' + (time === gameState.timePerTurn ? ' selected' : '');
    btn.dataset.time = time;
    btn.textContent = time + 's';
    btn.addEventListener('click', () => {
      container.querySelectorAll('.time-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      gameState.timePerTurn = parseInt(btn.dataset.time);
      gameState.timeRemaining = gameState.timePerTurn;
      timerValue.textContent = gameState.timePerTurn;
    });
    container.appendChild(btn);
  });
}

// ==================== GAME LOGIC ====================
function getRandomWord() {
  let pool = [];

  if (gameState.selectedCategory === 'todas') {
    pool = Object.values(WORDS).flat();
  } else {
    pool = WORDS[gameState.selectedCategory] || [];
  }

  const available = pool.filter(w => !gameState.usedWords.has(w));

  if (available.length === 0) {
    gameState.usedWords.clear();
    return getRandomWord();
  }

  const word = available[Math.floor(Math.random() * available.length)];
  gameState.usedWords.add(word);
  return word;
}

function showScreen(screen) {
  [setupScreen, gameScreen, resultsScreen, helpScreen].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

function startGame() {
  // Validate that all teams have names
  const emptyTeams = setupTeams.filter(t => !t.name.trim());
  if (emptyTeams.length > 0) {
    alert('Todos los equipos necesitan un nombre para comenzar.');
    return;
  }

  // Build teams from setup
  gameState.teams = setupTeams.map(t => ({
    name: t.name.trim(),
    score: 0,
    color: t.color
  }));

  gameState.currentTeamIndex = 0;
  gameState.roundNumber = 0;
  gameState.roundHistory = [];
  gameState.usedWords.clear();
  gameState.selectedCategory = 'todas';
  gameState.timePerTurn = CONFIG.timer.default;

  renderScoreboard();
  renderCategories();
  renderTimeOptions();
  updateTurnDisplay();
  resetTurn();
  showScreen(gameScreen);
}

function renderScoreboard() {
  const scoreboard = document.getElementById('scoreboard');
  scoreboard.innerHTML = '';

  gameState.teams.forEach((team, i) => {
    if (i > 0) {
      const vs = document.createElement('div');
      vs.className = 'vs';
      vs.textContent = 'VS';
      scoreboard.appendChild(vs);
    }
    const div = document.createElement('div');
    div.className = 'team-score';
    div.id = `team-score-display-${i}`;
    div.style.borderColor = team.color;
    div.innerHTML = `
      <span class="team-name" style="color:${team.color}">${team.name}</span>
      <span class="score" id="team-score-${i}">0</span>
    `;
    scoreboard.appendChild(div);
  });
}

function updateTurnDisplay() {
  const team = gameState.teams[gameState.currentTeamIndex];
  currentTeamName.textContent = team.name;
  currentTeamName.style.color = team.color;

  // Highlight active team in scoreboard
  gameState.teams.forEach((_, i) => {
    const el = document.getElementById(`team-score-display-${i}`);
    if (el) {
      el.classList.toggle('active-team', i === gameState.currentTeamIndex);
    }
  });
}

function resetTurn() {
  theWord.textContent = '???';
  wordDisplay.classList.add('word-hidden');

  clearInterval(gameState.timerInterval);
  gameState.isTimerRunning = false;
  gameState.timeRemaining = gameState.timePerTurn;
  gameState.roundPoints = 0;
  timerValue.textContent = gameState.timePerTurn;
  timerCircle.className = 'timer-circle';

  // Show round config and start button
  document.getElementById('round-config').style.display = '';
  startRoundBtn.style.display = '';
  correctBtn.style.display = 'none';
  skipBtn.style.display = 'none';
  roundSummary.style.display = 'none';
}

function startRound() {
  // Read current time selection (might have changed)
  gameState.timeRemaining = gameState.timePerTurn;
  timerValue.textContent = gameState.timePerTurn;

  gameState.roundNumber++;

  gameState.currentWord = getRandomWord();
  theWord.textContent = gameState.currentWord;
  wordDisplay.classList.remove('word-hidden');

  // Hide round config, show playing controls
  document.getElementById('round-config').style.display = 'none';
  startRoundBtn.style.display = 'none';
  correctBtn.style.display = '';
  skipBtn.style.display = '';

  gameState.isTimerRunning = true;
  timerCircle.classList.add('running');

  gameState.timerInterval = setInterval(() => {
    gameState.timeRemaining--;
    timerValue.textContent = gameState.timeRemaining;

    if (gameState.timeRemaining <= CONFIG.timer.dangerThreshold) {
      timerCircle.className = 'timer-circle danger';
    } else if (gameState.timeRemaining <= CONFIG.timer.warningThreshold) {
      timerCircle.className = 'timer-circle warning';
    }

    if (gameState.timeRemaining > 0 && gameState.timeRemaining <= CONFIG.timer.tickSoundFromSeconds) {
      playTick();
    }

    if (gameState.timeRemaining <= 0) {
      playGong();
      timeUp();
    }
  }, 1000);
}

function timeUp() {
  clearInterval(gameState.timerInterval);
  gameState.isTimerRunning = false;
  timerValue.textContent = '0';

  gameState.roundHistory.push({
    round: gameState.roundNumber,
    teamIndex: gameState.currentTeamIndex,
    points: gameState.roundPoints
  });

  correctBtn.style.display = 'none';
  skipBtn.style.display = 'none';
  wordDisplay.classList.add('word-hidden');
  theWord.textContent = '???';

  roundPointsEl.textContent = gameState.roundPoints;
  roundSummary.style.display = '';
}

function correctGuess() {
  gameState.roundPoints++;
  const team = gameState.teams[gameState.currentTeamIndex];
  team.score++;
  document.getElementById(`team-score-${gameState.currentTeamIndex}`).textContent = team.score;

  gameState.currentWord = getRandomWord();
  theWord.textContent = gameState.currentWord;
}

function skipWord() {
  gameState.currentWord = getRandomWord();
  theWord.textContent = gameState.currentWord;
}

function nextTurn() {
  gameState.currentTeamIndex = (gameState.currentTeamIndex + 1) % gameState.teams.length;
  updateTurnDisplay();
  resetTurn();
}

function endGame() {
  if (gameState.isTimerRunning) {
    clearInterval(gameState.timerInterval);
    gameState.isTimerRunning = false;

    // Revert points from incomplete round
    gameState.teams[gameState.currentTeamIndex].score -= gameState.roundPoints;
  }

  // Check if rounds are uneven (only relevant with 2+ teams)
  if (gameState.teams.length > 1) {
    const roundCounts = gameState.teams.map((_, i) =>
      gameState.roundHistory.filter(r => r.teamIndex === i).length
    );
    const maxRounds = Math.max(...roundCounts);
    const minRounds = Math.min(...roundCounts);

    if (maxRounds !== minRounds) {
      const fewerTeams = gameState.teams
        .filter((_, i) => roundCounts[i] < maxRounds)
        .map(t => t.name);
      const diff = maxRounds - minRounds;
      const roundWord = diff === 1 ? 'ronda' : 'rondas';
      const confirmed = confirm(
        `${fewerTeams.join(', ')} jugó ${diff} ${roundWord} menos. ¿Seguro que quieres finalizar? El puntaje podría no ser justo.`
      );
      if (!confirmed) {
        resetTurn();
        return;
      }
    }
  }

  showResults();
}

function showResults() {
  // Totals
  const totalsContainer = document.getElementById('results-totals');
  totalsContainer.innerHTML = '';

  // Sort teams by score descending for display
  const sorted = gameState.teams
    .map((t, i) => ({ ...t, index: i }))
    .sort((a, b) => b.score - a.score);

  // Winner
  const winnerEl = document.getElementById('results-winner');
  if (gameState.teams.length === 1) {
    winnerEl.textContent = sorted[0].score + ' puntos!';
    winnerEl.style.color = sorted[0].color;
  } else if (sorted[0].score > sorted[1].score) {
    winnerEl.textContent = 'Ganador: ' + sorted[0].name + '!';
    winnerEl.style.color = sorted[0].color;
  } else {
    const topScore = sorted[0].score;
    const winners = sorted.filter(t => t.score === topScore);
    if (winners.length > 1) {
      winnerEl.textContent = 'Empate!';
      winnerEl.style.color = '';
    } else {
      winnerEl.textContent = 'Ganador: ' + sorted[0].name + '!';
      winnerEl.style.color = sorted[0].color;
    }
  }

  gameState.teams.forEach(team => {
    const div = document.createElement('div');
    div.className = 'result-total';
    div.style.borderLeftColor = team.color;
    div.innerHTML = `
      <span class="result-team-name" style="color:${team.color}">${team.name}</span>
      <span class="result-team-score">${team.score}</span>
    `;
    totalsContainer.appendChild(div);
  });

  // Rounds table header
  const roundsHeader = document.getElementById('rounds-header');
  const gridCols = `1fr ${'1fr '.repeat(gameState.teams.length)}`.trim();
  roundsHeader.style.gridTemplateColumns = gridCols;
  roundsHeader.innerHTML = '<span>Ronda</span>';
  gameState.teams.forEach(team => {
    roundsHeader.innerHTML += `<span style="color:${team.color}">${team.name}</span>`;
  });

  // Rounds table body
  const roundsBody = document.getElementById('rounds-body');
  roundsBody.innerHTML = '';

  // Group by "full rounds" (one turn per team = 1 full round)
  const totalFullRounds = Math.ceil(gameState.roundHistory.length / gameState.teams.length);

  for (let r = 0; r < totalFullRounds; r++) {
    const row = document.createElement('div');
    row.className = 'rounds-row';
    row.style.gridTemplateColumns = gridCols;
    row.innerHTML = `<span>${r + 1}</span>`;

    gameState.teams.forEach((_, teamIdx) => {
      const entry = gameState.roundHistory.find(
        h => h.teamIndex === teamIdx && Math.floor(gameState.roundHistory.indexOf(h) / gameState.teams.length) === r
      );
      row.innerHTML += `<span>${entry ? entry.points : '-'}</span>`;
    });

    roundsBody.appendChild(row);
  }

  showScreen(resultsScreen);
  launchConfetti();
}

function launchConfetti() {
  const container = document.getElementById('confetti');
  container.innerHTML = '';

  const colors = CONFIG.confetti.colors;
  const count = CONFIG.confetti.count;

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');
    piece.style.left = Math.random() * 100 + '%';
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 2 + 's';
    piece.style.animationDuration = (2 + Math.random() * 2) + 's';
    piece.style.width = (6 + Math.random() * 8) + 'px';
    piece.style.height = (6 + Math.random() * 8) + 'px';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    container.appendChild(piece);
  }
}

function backToSetup() {
  clearInterval(gameState.timerInterval);
  gameState.isTimerRunning = false;
  showScreen(setupScreen);
}

// ==================== EVENT LISTENERS ====================
startGameBtn.addEventListener('click', startGame);
startRoundBtn.addEventListener('click', startRound);
correctBtn.addEventListener('click', correctGuess);
skipBtn.addEventListener('click', skipWord);
nextTurnBtn.addEventListener('click', nextTurn);
endGameBtn.addEventListener('click', endGame);
backToSetupBtn.addEventListener('click', backToSetup);
playAgainBtn.addEventListener('click', () => showScreen(setupScreen));

document.getElementById('help-btn').addEventListener('click', () => showScreen(helpScreen));
document.getElementById('back-from-help-btn').addEventListener('click', () => showScreen(setupScreen));

// ==================== BOOT ====================
initGame();
