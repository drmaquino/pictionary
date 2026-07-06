// ==================== WORD DATABASE ====================
const WORDS = {
  animales: [
    'Perro', 'Gato', 'Elefante', 'Jirafa', 'Serpiente', 'Mariposa', 'Delfin', 'Aguila',
    'Tortuga', 'Caballo', 'Leon', 'Mono', 'Pinguino', 'Tiburon', 'Oso', 'Conejo',
    'Loro', 'Pulpo', 'Cangrejo', 'Cocodrilo', 'Ballena', 'Rana', 'Hormiga', 'Araña',
    'Caracol', 'Murcielago', 'Cebra', 'Hipopotamo', 'Rinoceronte', 'Camello',
    'Flamenco', 'Gorila', 'Pez espada', 'Medusa', 'Camaleon', 'Iguana',
    'Hamster', 'Oveja', 'Vaca', 'Cerdo'
  ],
  objetos: [
    'Paraguas', 'Escalera', 'Guitarra', 'Telescopio', 'Licuadora', 'Semaforo',
    'Bicicleta', 'Helicóptero', 'Silla', 'Tijeras', 'Martillo', 'Lámpara',
    'Reloj', 'Espejo', 'Llave', 'Cámara', 'Mochila', 'Globo', 'Vela',
    'Anillo', 'Corona', 'Brújula', 'Ancla', 'Cohete', 'Patineta',
    'Auriculares', 'Control remoto', 'Calculadora', 'Candado', 'Linterna',
    'Dado', 'Rueda', 'Cometa', 'Trampolín', 'Hamaca', 'Termómetro',
    'Extintor', 'Microscopio', 'Balanza', 'Destornillador'
  ],
  acciones: [
    'Nadar', 'Cocinar', 'Bailar', 'Escalar', 'Pintar', 'Pescar', 'Volar',
    'Surfear', 'Dormir', 'Estornudar', 'Aplaudir', 'Saltar la cuerda',
    'Hacer malabares', 'Tocar el piano', 'Remar', 'Patinar', 'Bucear',
    'Esquiar', 'Boxear', 'Meditar', 'Trotar', 'Barrer', 'Planchar',
    'Cortar el pasto', 'Hacer yoga', 'Manejar', 'Leer', 'Escribir',
    'Cantar', 'Silbar', 'Llorar', 'Reir', 'Bostezar', 'Abrazar',
    'Trepar un árbol', 'Saltar en charcos', 'Soplar velas', 'Tomar mate',
    'Andar en monopatín', 'Hacer una fogata'
  ],
  peliculas: [
    'Titanic', 'Star Wars', 'Harry Potter', 'Toy Story', 'El Rey León',
    'Frozen', 'Jurassic Park', 'Batman', 'Spider-Man', 'Shrek',
    'Buscando a Nemo', 'Los Increíbles', 'Piratas del Caribe', 'Matrix',
    'Indiana Jones', 'Ratatouille', 'Monsters Inc', 'Aladdin', 'Cenicienta',
    'Rapunzel', 'Coco', 'Up', 'Wall-E', 'Mi Villano Favorito',
    'Kung Fu Panda', 'Madagascar', 'La Era de Hielo', 'Cars',
    'Intensamente', 'Moana', 'Encanto', 'Luca', 'Soul', 'Brave',
    'Los Vengadores', 'ET', 'Volver al Futuro', 'Ghostbusters',
    'Jumanji', 'Karate Kid'
  ],
  deportes: [
    'Fútbol', 'Tenis', 'Básquet', 'Natación', 'Golf', 'Boxeo', 'Surf',
    'Esgrima', 'Gimnasia', 'Snowboard', 'Voleibol', 'Rugby', 'Béisbol',
    'Hockey', 'Ciclismo', 'Skate', 'Lucha libre', 'Tiro con arco',
    'Kayak', 'Escalada', 'Polo', 'Ping pong', 'Handball', 'Atletismo',
    'Remo', 'Paracaidismo', 'Karting', 'Salto en largo', 'Lanzamiento de bala',
    'Nado sincronizado', 'Waterpolo', 'Artes marciales', 'Taekwondo',
    'Judo', 'Patinaje artístico', 'Salto ornamental', 'Triatlón',
    'Maratón', 'BMX', 'Equitación'
  ],
  comida: [
    'Pizza', 'Hamburguesa', 'Sushi', 'Helado', 'Panqueque', 'Empanada',
    'Asado', 'Torta', 'Pochoclo', 'Sándwich', 'Taco', 'Pasta',
    'Ensalada', 'Sopa', 'Medialunas', 'Alfajor', 'Dulce de leche',
    'Banana split', 'Hot dog', 'Papas fritas', 'Omelette', 'Flan',
    'Churros', 'Donas', 'Waffles', 'Milanesa', 'Ravioles', 'Ñoquis',
    'Paella', 'Guiso', 'Brownie', 'Galletitas', 'Tostada', 'Licuado',
    'Mate', 'Chocolate caliente', 'Canelones', 'Locro', 'Choclo',
    'Brochette'
  ],
  profesiones: [
    'Bombero', 'Astronauta', 'Chef', 'Doctor', 'Piloto', 'Detective',
    'Pirata', 'Mago', 'Payaso', 'Fotógrafo', 'Carpintero', 'Electricista',
    'Plomero', 'Veterinario', 'Dentista', 'Profesor', 'Policía', 'Cartero',
    'Músico', 'Actor', 'Pintor', 'Escultor', 'Bailarín', 'Cirujano',
    'Peluquero', 'Panadero', 'Jardinero', 'Mecánico', 'Arqueólogo',
    'Bibliotecario', 'Locutor', 'Periodista', 'Granjero', 'Pescador',
    'Minero', 'Buzo', 'Guardavidas', 'Domador', 'Malabarista', 'Ninja'
  ]
};

// ==================== GAME STATE ====================
let gameState = {
  team1Name: 'Equipo Azul',
  team2Name: 'Equipo Rojo',
  team1Score: 0,
  team2Score: 0,
  currentTeam: 1,
  selectedCategory: 'todas',
  timePerTurn: 60,
  currentWord: '',
  timerInterval: null,
  timeRemaining: 60,
  isTimerRunning: false,
  roundPoints: 0,
  roundNumber: 0,
  roundHistory: [], // { round, team, points }
  usedWords: new Set()
};

// ==================== DOM ELEMENTS ====================
const setupScreen = document.getElementById('setup-screen');
const gameScreen = document.getElementById('game-screen');
const resultsScreen = document.getElementById('results-screen');
const helpScreen = document.getElementById('help-screen');

const team1NameInput = document.getElementById('team1-name');
const team2NameInput = document.getElementById('team2-name');
const startGameBtn = document.getElementById('start-game-btn');

const team1Label = document.getElementById('team1-label');
const team2Label = document.getElementById('team2-label');
const team1ScoreEl = document.getElementById('team1-score');
const team2ScoreEl = document.getElementById('team2-score');
const team1ScoreDisplay = document.getElementById('team1-score-display');
const team2ScoreDisplay = document.getElementById('team2-score-display');
const currentTeamName = document.getElementById('current-team-name');

const wordDisplay = document.getElementById('word-display');
const theWord = document.getElementById('the-word');
const startRoundBtn = document.getElementById('start-round-btn');
const correctBtn = document.getElementById('correct-btn');
const skipBtn = document.getElementById('skip-btn');

const timerCircle = document.getElementById('timer-circle');
const timerValue = document.getElementById('timer-value');

const roundSummary = document.getElementById('round-summary');
const roundPointsEl = document.getElementById('round-points');
const nextTurnBtn = document.getElementById('next-turn-btn');

const endGameBtn = document.getElementById('end-game-btn');
const backToSetupBtn = document.getElementById('back-to-setup-btn');
const playAgainBtn = document.getElementById('play-again-btn');

// ==================== SETUP HANDLERS ====================
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    gameState.selectedCategory = btn.dataset.category;
  });
});

document.querySelectorAll('.time-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    gameState.timePerTurn = parseInt(btn.dataset.time);
  });
});

// ==================== GAME LOGIC ====================
function getRandomWord() {
  let pool = [];

  if (gameState.selectedCategory === 'todas') {
    pool = Object.values(WORDS).flat();
  } else {
    pool = WORDS[gameState.selectedCategory] || [];
  }

  // Filter out used words
  const available = pool.filter(w => !gameState.usedWords.has(w));

  // If all words used, reset
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
  gameState.team1Name = team1NameInput.value.trim() || 'Equipo Azul';
  gameState.team2Name = team2NameInput.value.trim() || 'Equipo Rojo';
  gameState.team1Score = 0;
  gameState.team2Score = 0;
  gameState.currentTeam = 1;
  gameState.roundNumber = 0;
  gameState.roundHistory = [];
  gameState.usedWords.clear();

  team1Label.textContent = gameState.team1Name;
  team2Label.textContent = gameState.team2Name;
  team1ScoreEl.textContent = '0';
  team2ScoreEl.textContent = '0';

  updateTurnDisplay();
  resetTurn();
  showScreen(gameScreen);
}

function updateTurnDisplay() {
  const name = gameState.currentTeam === 1 ? gameState.team1Name : gameState.team2Name;
  currentTeamName.textContent = name;

  team1ScoreDisplay.classList.toggle('active-team', gameState.currentTeam === 1);
  team2ScoreDisplay.classList.toggle('active-team', gameState.currentTeam === 2);
}

function resetTurn() {
  // Hide word
  theWord.textContent = '???';
  wordDisplay.classList.add('word-hidden');

  // Reset timer
  clearInterval(gameState.timerInterval);
  gameState.isTimerRunning = false;
  gameState.timeRemaining = gameState.timePerTurn;
  gameState.roundPoints = 0;
  timerValue.textContent = gameState.timePerTurn;
  timerCircle.className = 'timer-circle';

  // Show start button, hide playing buttons
  startRoundBtn.style.display = '';
  correctBtn.style.display = 'none';
  skipBtn.style.display = 'none';
  roundSummary.style.display = 'none';
}

function startRound() {
  gameState.roundNumber++;

  // Show word and start timer immediately
  gameState.currentWord = getRandomWord();
  theWord.textContent = gameState.currentWord;
  wordDisplay.classList.remove('word-hidden');

  // Switch buttons
  startRoundBtn.style.display = 'none';
  correctBtn.style.display = '';
  skipBtn.style.display = '';

  // Start timer
  gameState.isTimerRunning = true;
  timerCircle.classList.add('running');

  gameState.timerInterval = setInterval(() => {
    gameState.timeRemaining--;
    timerValue.textContent = gameState.timeRemaining;

    if (gameState.timeRemaining <= 10) {
      timerCircle.className = 'timer-circle danger';
    } else if (gameState.timeRemaining <= 20) {
      timerCircle.className = 'timer-circle warning';
    }

    if (gameState.timeRemaining <= 0) {
      timeUp();
    }
  }, 1000);
}

function timeUp() {
  clearInterval(gameState.timerInterval);
  gameState.isTimerRunning = false;
  timerValue.textContent = '0';

  // Save round to history
  gameState.roundHistory.push({
    round: gameState.roundNumber,
    team: gameState.currentTeam,
    points: gameState.roundPoints
  });

  // Hide playing controls
  correctBtn.style.display = 'none';
  skipBtn.style.display = 'none';
  wordDisplay.classList.add('word-hidden');
  theWord.textContent = '???';

  // Show round summary
  roundPointsEl.textContent = gameState.roundPoints;
  roundSummary.style.display = '';
}

function correctGuess() {
  // Add point
  gameState.roundPoints++;
  if (gameState.currentTeam === 1) {
    gameState.team1Score++;
    team1ScoreEl.textContent = gameState.team1Score;
  } else {
    gameState.team2Score++;
    team2ScoreEl.textContent = gameState.team2Score;
  }

  // Next word (timer keeps running)
  gameState.currentWord = getRandomWord();
  theWord.textContent = gameState.currentWord;
}

function skipWord() {
  // Next word without points (timer keeps running)
  gameState.currentWord = getRandomWord();
  theWord.textContent = gameState.currentWord;
}

function nextTurn() {
  gameState.currentTeam = gameState.currentTeam === 1 ? 2 : 1;
  updateTurnDisplay();
  resetTurn();
}

function endGame() {
  // If a round is in progress, discard it (revert points)
  if (gameState.isTimerRunning) {
    clearInterval(gameState.timerInterval);
    gameState.isTimerRunning = false;

    // Revert the points scored in this incomplete round
    if (gameState.currentTeam === 1) {
      gameState.team1Score -= gameState.roundPoints;
    } else {
      gameState.team2Score -= gameState.roundPoints;
    }
  }

  // Check if rounds are uneven
  const team1Rounds = gameState.roundHistory.filter(r => r.team === 1).length;
  const team2Rounds = gameState.roundHistory.filter(r => r.team === 2).length;

  if (team1Rounds !== team2Rounds) {
    const fewerTeam = team1Rounds < team2Rounds ? gameState.team1Name : gameState.team2Name;
    const diff = Math.abs(team1Rounds - team2Rounds);
    const roundWord = diff === 1 ? 'ronda' : 'rondas';
    const confirmed = confirm(
      `"${fewerTeam}" jugó ${diff} ${roundWord} menos que el otro equipo. ¿Seguro que quieres finalizar? El puntaje podría no ser justo.`
    );
    if (!confirmed) {
      // Restore state so they can keep playing
      resetTurn();
      return;
    }
  }

  showResults();
}

function showResults() {
  // Set team names
  document.getElementById('results-team1-name').textContent = gameState.team1Name;
  document.getElementById('results-team2-name').textContent = gameState.team2Name;
  document.getElementById('results-team1-total').textContent = gameState.team1Score;
  document.getElementById('results-team2-total').textContent = gameState.team2Score;
  document.getElementById('rounds-header-team1').textContent = gameState.team1Name;
  document.getElementById('rounds-header-team2').textContent = gameState.team2Name;

  // Determine winner
  const winnerEl = document.getElementById('results-winner');
  if (gameState.team1Score > gameState.team2Score) {
    winnerEl.textContent = 'Ganador: ' + gameState.team1Name + '!';
    winnerEl.className = 'results-winner winner-team1';
  } else if (gameState.team2Score > gameState.team1Score) {
    winnerEl.textContent = 'Ganador: ' + gameState.team2Name + '!';
    winnerEl.className = 'results-winner winner-team2';
  } else {
    winnerEl.textContent = 'Empate!';
    winnerEl.className = 'results-winner winner-tie';
  }

  // Build rounds table
  const roundsBody = document.getElementById('rounds-body');
  roundsBody.innerHTML = '';

  // Group rounds in pairs (team1 then team2 per round number)
  const roundPairs = {};
  gameState.roundHistory.forEach(entry => {
    const pairKey = Math.ceil(entry.round / 2);
    if (!roundPairs[pairKey]) roundPairs[pairKey] = { team1: '-', team2: '-' };
    if (entry.team === 1) roundPairs[pairKey].team1 = entry.points;
    else roundPairs[pairKey].team2 = entry.points;
  });

  Object.keys(roundPairs).forEach(key => {
    const row = document.createElement('div');
    row.className = 'rounds-row';
    row.innerHTML = `
      <span>${key}</span>
      <span>${roundPairs[key].team1}</span>
      <span>${roundPairs[key].team2}</span>
    `;
    roundsBody.appendChild(row);
  });

  showScreen(resultsScreen);
  launchConfetti();
}

function launchConfetti() {
  const container = document.getElementById('confetti');
  container.innerHTML = '';

  const colors = ['#6c5ce7', '#0984e3', '#d63031', '#00b894', '#fdcb6e', '#e17055', '#00cec9'];

  for (let i = 0; i < 50; i++) {
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
