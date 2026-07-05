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
  pointsToWin: 10,
  currentWord: '',
  timerInterval: null,
  timeRemaining: 60,
  isTimerRunning: false,
  usedWords: new Set()
};

// ==================== DOM ELEMENTS ====================
const setupScreen = document.getElementById('setup-screen');
const gameScreen = document.getElementById('game-screen');
const winnerScreen = document.getElementById('winner-screen');
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
const revealWordBtn = document.getElementById('reveal-word-btn');
const startTimerBtn = document.getElementById('start-timer-btn');
const correctBtn = document.getElementById('correct-btn');
const skipBtn = document.getElementById('skip-btn');

const timerCircle = document.getElementById('timer-circle');
const timerValue = document.getElementById('timer-value');

const backToSetupBtn = document.getElementById('back-to-setup-btn');
const winnerTeamName = document.getElementById('winner-team-name');
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

document.querySelectorAll('.points-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.points-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    gameState.pointsToWin = parseInt(btn.dataset.points);
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
  [setupScreen, gameScreen, winnerScreen, helpScreen].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

function startGame() {
  gameState.team1Name = team1NameInput.value.trim() || 'Equipo Azul';
  gameState.team2Name = team2NameInput.value.trim() || 'Equipo Rojo';
  gameState.team1Score = 0;
  gameState.team2Score = 0;
  gameState.currentTeam = 1;
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
  // Reset word
  gameState.currentWord = getRandomWord();
  theWord.textContent = '???';
  wordDisplay.classList.add('word-hidden');

  // Reset timer
  clearInterval(gameState.timerInterval);
  gameState.isTimerRunning = false;
  gameState.timeRemaining = gameState.timePerTurn;
  timerValue.textContent = gameState.timePerTurn;
  timerCircle.className = 'timer-circle';

  // Reset buttons
  revealWordBtn.disabled = false;
  startTimerBtn.disabled = true;
  correctBtn.disabled = true;
  skipBtn.disabled = true;
}

function revealWord() {
  if (wordDisplay.classList.contains('word-hidden')) {
    // Show the word
    theWord.textContent = gameState.currentWord;
    wordDisplay.classList.remove('word-hidden');
    revealWordBtn.textContent = 'Ocultar Palabra';
    revealWordBtn.classList.add('hide-mode');
    startTimerBtn.disabled = true;
  } else {
    // Hide the word
    theWord.textContent = '???';
    wordDisplay.classList.add('word-hidden');
    revealWordBtn.textContent = 'Revelar Palabra';
    revealWordBtn.classList.remove('hide-mode');
    startTimerBtn.disabled = false;
  }
}

function startTimer() {
  if (gameState.isTimerRunning) return;

  gameState.isTimerRunning = true;
  startTimerBtn.disabled = true;
  revealWordBtn.disabled = true;
  correctBtn.disabled = false;
  skipBtn.disabled = false;
  timerCircle.classList.add('running');

  gameState.timerInterval = setInterval(() => {
    gameState.timeRemaining--;
    timerValue.textContent = gameState.timeRemaining;

    // Visual feedback
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

  // Play a visual shake
  timerCircle.style.animation = 'pulse 0.2s 3';
  setTimeout(() => {
    timerCircle.style.animation = '';
  }, 600);

  // Switch turns
  switchTeam();
}

function correctGuess() {
  clearInterval(gameState.timerInterval);
  gameState.isTimerRunning = false;

  // Add point
  if (gameState.currentTeam === 1) {
    gameState.team1Score++;
    team1ScoreEl.textContent = gameState.team1Score;
  } else {
    gameState.team2Score++;
    team2ScoreEl.textContent = gameState.team2Score;
  }

  // Check for winner
  if (gameState.team1Score >= gameState.pointsToWin) {
    showWinner(gameState.team1Name);
    return;
  }
  if (gameState.team2Score >= gameState.pointsToWin) {
    showWinner(gameState.team2Name);
    return;
  }

  // Switch teams
  switchTeam();
}

function skipWord() {
  clearInterval(gameState.timerInterval);
  gameState.isTimerRunning = false;
  switchTeam();
}

function switchTeam() {
  gameState.currentTeam = gameState.currentTeam === 1 ? 2 : 1;
  updateTurnDisplay();
  resetTurn();
}

function showWinner(teamName) {
  winnerTeamName.textContent = teamName;
  showScreen(winnerScreen);
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

function playAgain() {
  showScreen(setupScreen);
}

function backToSetup() {
  clearInterval(gameState.timerInterval);
  gameState.isTimerRunning = false;
  showScreen(setupScreen);
}

function resetScores() {
  gameState.team1Score = 0;
  gameState.team2Score = 0;
  team1ScoreEl.textContent = '0';
  team2ScoreEl.textContent = '0';
  gameState.currentTeam = 1;
  updateTurnDisplay();
  resetTurn();
}

// ==================== EVENT LISTENERS ====================
startGameBtn.addEventListener('click', startGame);
revealWordBtn.addEventListener('click', revealWord);
startTimerBtn.addEventListener('click', startTimer);
correctBtn.addEventListener('click', correctGuess);
skipBtn.addEventListener('click', skipWord);
backToSetupBtn.addEventListener('click', backToSetup);
playAgainBtn.addEventListener('click', playAgain);
document.getElementById('reset-scores-btn').addEventListener('click', resetScores);

document.getElementById('help-btn').addEventListener('click', () => showScreen(helpScreen));
document.getElementById('back-from-help-btn').addEventListener('click', () => showScreen(setupScreen));
