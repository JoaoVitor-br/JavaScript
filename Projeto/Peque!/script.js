/* ==========================================================================
   LÓGICA E REGRAS DO JOGO (JAVASCRIPT)
   ========================================================================== */

// Referências dos Elementos do DOM
const screenStart = document.getElementById('screen-start');
const screenGame = document.getElementById('screen-game');
const screenResult = document.getElementById('screen-result');

const inputNameGroup = document.getElementById('player-input-group');
const inputPlayerName = document.getElementById('player-name');
const btnStart = document.getElementById('btn-start');
const btnRestart = document.getElementById('btn-restart');
const btnMenu = document.getElementById('btn-menu');

const hudPlayer = document.getElementById('hud-player');
const hudTimer = document.getElementById('hud-timer');
const hudScore = document.getElementById('hud-score');

const gameArena = document.getElementById('game-arena');
const targetObject = document.getElementById('target-object');

const finalScore = document.getElementById('final-score');
const finalPlayerName = document.getElementById('final-player-name');
const statHits = document.getElementById('stat-hits');
const statLevel = document.getElementById('stat-level');
const startLeaderboardList = document.getElementById('start-leaderboard-list');
const resultLeaderboardList = document.getElementById('result-leaderboard-list');

// Estado do Jogo
let playerName = '';
let currentDifficulty = 'facil';
let score = 0;
let hitsCount = 0;
let timeRemaining = 30; // Duração da partida em segundos
let timerInterval = null;
let gameActive = false;

// === NÍVEIS DE DIFICULDADE (Configuração de Velocidade e Tamanho) ===
const DIFFICULTY_SETTINGS = {
  facil: {
    speed: 3.8,       // Velocidade de deslocamento (pixels por frame)
    size: 62,         // Tamanho do objeto em pixels
    pointsPerHit: 100, // Pontos por clique
    label: 'Fácil'
  },
  medio: {
    speed: 5.2,
    size: 52,
    pointsPerHit: 150,
    label: 'Médio'
  },
  dificil: {
    speed: 7.5,
    size: 42,
    pointsPerHit: 200,
    label: 'Difícil'
  }
};

// === MOVIMENTAÇÃO DO OBJETO (Física contínua com colisão nas bordas) ===
let posX = 100;
let posY = 100;
let velX = 3;
let velY = 3;
let animationFrameId = null;

/**
 * Inicializa a Posição e Direção Vetorial do Objeto
 */
function initObjectPosition() {
  const arenaWidth = gameArena.clientWidth;
  const arenaHeight = gameArena.clientHeight;
  const config = DIFFICULTY_SETTINGS[currentDifficulty];

  // Aplica o tamanho do nível selecionado
  targetObject.style.width = `${config.size}px`;
  targetObject.style.height = `${config.size}px`;

  // Posiciona no centro da arena
  posX = (arenaWidth - config.size) / 2;
  posY = (arenaHeight - config.size) / 2;

  // Define um ângulo aleatório para a trajetória contínua
  const angle = Math.random() * Math.PI * 2;
  velX = Math.cos(angle) * config.speed;
  velY = Math.sin(angle) * config.speed;

  updateObjectDOMPosition();
}

/**
 * Atualiza a Posição Visual no DOM
 */
function updateObjectDOMPosition() {
  targetObject.style.left = `${posX}px`;
  targetObject.style.top = `${posY}px`;
}

/**
 * Loop principal de animação do objeto usando requestAnimationFrame
 */
function moveObjectLoop() {
  if (!gameActive) return;

  const arenaWidth = gameArena.clientWidth;
  const arenaHeight = gameArena.clientHeight;
  const config = DIFFICULTY_SETTINGS[currentDifficulty];
  const targetSize = config.size;

  // Atualiza coordenadas
  posX += velX;
  posY += velY;

  // Colisão contínua com a borda Esquerda / Direita
  if (posX <= 0) {
    posX = 0;
    velX = -velX;
  } else if (posX + targetSize >= arenaWidth) {
    posX = arenaWidth - targetSize;
    velX = -velX;
  }

  // Colisão contínua com a borda Superior / Inferior
  if (posY <= 0) {
    posY = 0;
    velY = -velY;
  } else if (posY + targetSize >= arenaHeight) {
    posY = arenaHeight - targetSize;
    velY = -velY;
  }

  updateObjectDOMPosition();

  // Solicita o próximo frame para movimento fluido a 60 FPS
  animationFrameId = requestAnimationFrame(moveObjectLoop);
}

// === PONTUAÇÃO E CLIQUE NO OBJETO ===

/**
 * Trata o clique ou toque no objeto
 */
function handleTargetClick(e) {
  if (!gameActive) return;
  e.stopPropagation();

  const config = DIFFICULTY_SETTINGS[currentDifficulty];
  
  // Incrementa pontuação e contagem de cliques
  score += config.pointsPerHit;
  hitsCount++;
  hudScore.textContent = score;

  // Efeito Visual de Feedback (+Pontos)
  showScorePopup(e.clientX, e.clientY, `+${config.pointsPerHit}`);

  // Ao ser atingido, altera ligeiramente a direção do movimento para aumentar a dinâmica
  const currentSpeed = config.speed;
  const newAngle = Math.random() * Math.PI * 2;
  velX = Math.cos(newAngle) * currentSpeed;
  velY = Math.sin(newAngle) * currentSpeed;
}

/**
 * Cria animação visual de pontos subindo na posição do clique
 */
function showScorePopup(x, y, text) {
  const rect = gameArena.getBoundingClientRect();
  const popup = document.createElement('div');
  popup.className = 'score-popup';
  popup.textContent = text;
  
  // Posiciona em relação à arena
  popup.style.left = `${x - rect.left - 15}px`;
  popup.style.top = `${y - rect.top - 20}px`;

  gameArena.appendChild(popup);

  // Remove elemento após o término da animação
  setTimeout(() => {
    if (popup.parentNode) popup.parentNode.removeChild(popup);
  }, 600);
}

// Regra de validação de input
inputPlayerName.addEventListener('input', () => {
  if (inputPlayerName.value.trim() !== '') {
    inputNameGroup.classList.remove('error');
  }
});

// Suporte para tela de toque e mouse sem atrasos
targetObject.addEventListener('pointerdown', handleTargetClick);

// === TIMER E CONTROLE DA PARTIDA ===

/**
 * Inicia uma nova partida
 */
function startGame() {
  // Validação do campo de nome
  const nameVal = inputPlayerName.value.trim();
  if (!nameVal) {
    inputNameGroup.classList.add('error');
    inputPlayerName.focus();
    return;
  }

  playerName = nameVal;
  
  // Captura dificuldade selecionada
  const diffRadio = document.querySelector('input[name="difficulty"]:checked');
  currentDifficulty = diffRadio ? diffRadio.value : 'facil';

  // Reseta pontuações e estado
  score = 0;
  hitsCount = 0;
  timeRemaining = 30;
  gameActive = true;

  // Atualiza HUD
  hudPlayer.textContent = playerName;
  hudScore.textContent = '0';
  hudTimer.textContent = `${timeRemaining}s`;

  // Troca de tela
  screenStart.classList.remove('active');
  screenResult.classList.remove('active');
  screenGame.classList.add('active');

  // Posiciona e inicia movimento contínuo
  initObjectPosition();
  animationFrameId = requestAnimationFrame(moveObjectLoop);

  // Inicia o cronômetro regressivo
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeRemaining--;
    hudTimer.textContent = `${timeRemaining}s`;

    if (timeRemaining <= 0) {
      endGame();
    }
  }, 1000);
}

/**
 * Finaliza a partida quando o tempo esgota
 */
function endGame() {
  gameActive = false;
  clearInterval(timerInterval);
  if (animationFrameId) cancelAnimationFrame(animationFrameId);

  // Atualiza tela de resultado
  finalScore.textContent = score;
  finalPlayerName.textContent = `Jogador: ${playerName}`;
  statHits.textContent = hitsCount;
  statLevel.textContent = DIFFICULTY_SETTINGS[currentDifficulty].label;
  saveScoreToLeaderboard(playerName, score, currentDifficulty);

  // Alterna para tela de resultado
  screenGame.classList.remove('active');
  screenResult.classList.add('active');
}

// === EVENTOS DE NAVEGAÇÃO E BOTÕES ===
btnStart.addEventListener('click', startGame);

btnRestart.addEventListener('click', () => {
  startGame();
});

btnMenu.addEventListener('click', () => {
  gameActive = false;
  clearInterval(timerInterval);
  if (animationFrameId) cancelAnimationFrame(animationFrameId);

  screenResult.classList.remove('active');
  screenGame.classList.remove('active');
  screenStart.classList.add('active');
});

const LEADERBOARD_KEY = 'mundo_senai_pegue_scores';

/**
 * Obtém a lista de pontuações do localStorage
 */
function getLeaderboard() {
  const data = localStorage.getItem(LEADERBOARD_KEY);
  return data ? JSON.parse(data) : [];
}

/**
 * Salva uma nova pontuação e ordena do topo (maior) ao chão (menor)
 */
function saveScoreToLeaderboard(name, scoreVal, difficultyKey) {
  const leaderboard = getLeaderboard();
  const diffLabel = DIFFICULTY_SETTINGS[difficultyKey] ? DIFFICULTY_SETTINGS[difficultyKey].label : difficultyKey;

  // Adiciona a nova jogada
  leaderboard.push({
    name: name,
    score: scoreVal,
    difficulty: diffLabel,
    date: new Date().toISOString()
  });

  // ORDENAÇÃO: Maior pontuação no topo (index 0) até a menor no chão
  leaderboard.sort((a, b) => b.score - a.score);

  // Mantém os 10 melhores registros no ranking
  const top10 = leaderboard.slice(0, 10);

  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(top10));
  renderLeaderboard();
}

/**
 * Renderiza o placar de líderes formatado em lista
 */
function renderLeaderboard() {
  const leaderboard = getLeaderboard();
  const lists = [startLeaderboardList, resultLeaderboardList];

  lists.forEach(ulElement => {
    if (!ulElement) return;
    ulElement.innerHTML = '';

    if (leaderboard.length === 0) {
      ulElement.innerHTML = '<li class="leaderboard-empty">Nenhum registro ainda. Seja o primeiro a jogar!</li>';
      return;
    }

    leaderboard.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = 'leaderboard-item';
      
      if (index === 0) li.classList.add('rank-1');
      if (index === 1) li.classList.add('rank-2');
      if (index === 2) li.classList.add('rank-3');

      const rankPosition = document.createElement('div');
      rankPosition.className = 'rank-pos';
      rankPosition.textContent = `#${index + 1}`;

      const playerInfo = document.createElement('div');
      playerInfo.className = 'player-info';

      const playerNameElement = document.createElement('span');
      playerNameElement.className = 'player-name';
      playerNameElement.textContent = item.name;

      const playerDifficulty = document.createElement('span');
      playerDifficulty.className = 'player-diff';
      playerDifficulty.textContent = `Nível: ${item.difficulty}`;

      const playerScore = document.createElement('div');
      playerScore.className = 'player-score';
      playerScore.textContent = `${item.score} pts`;

      playerInfo.append(playerNameElement, playerDifficulty);
      li.append(rankPosition, playerInfo, playerScore);
      ulElement.appendChild(li);
    });
  });
}

renderLeaderboard();