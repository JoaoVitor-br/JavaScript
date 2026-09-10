 class SoundManager {
      constructor() {
        this.confirm = new Audio('som/confirmar.wav');
        this.steps = [
          new Audio('som/robopasso1.wav'),
          new Audio('som/robopasso2.wav'),
          new Audio('som/robopasso3.wav')
        ];
        this.turn = new Audio('som/robovirar.wav');
        this.reset = new Audio('som/resetar.mp3');
        this.victory = new Audio('som/vitoria.mp3');
        this.failure = new Audio('som/falhar.mp3');
        this.voice = new Audio('som/voz.wav');
      }

      play(audio) {
        const instance = audio.cloneNode();
        instance.currentTime = 0;
        instance.play().catch(() => {});
      }

      playConfirm() {
        this.play(this.confirm);
      }

      playStep() {
        this.play(this.steps[Math.floor(Math.random() * this.steps.length)]);
      }

      playTurn() {
        this.play(this.turn);
      }

      playReset() {
        this.play(this.reset);
      }

      playVictory() {
        this.play(this.victory);
      }

      playFailure() {
        this.play(this.failure);
      }

      playVoice() {
        const instance = this.voice.cloneNode();
        instance.playbackRate = 0.94 + Math.random() * 0.12;
        instance.preservesPitch = false;
        instance.play().catch(() => {});
      }
    }

    class ScreenManager {
      constructor() {
        this.introScreen = document.getElementById('introScreen');
        this.gameScreen = document.getElementById('gameScreen');
        this.finishScreen = document.getElementById('finishScreen');
        this.finishTitle = document.getElementById('finishTitle');
        this.finishMessage = document.getElementById('finishMessage');
        this.finishThanks = document.getElementById('finishThanks');
        this.finishCredits = document.getElementById('finishCredits');
        this.finishNextButton = document.getElementById('finishNextButton');
        this.finalResetGameButton = document.getElementById('finalResetGameButton');
        this.confettiContainer = document.getElementById('confettiContainer');
        this.phaseDialog = document.getElementById('phaseDialog');
        this.phaseDialogText = document.getElementById('phaseDialogText');
        this.dialogTypingTimer = null;
        this.resetHoldTimer = null;
        this.resetHoldDuration = 1200;
        this.bindFinalResetButton();
      }

      bindFinalResetButton() {
        if (!this.finalResetGameButton) return;

        const startReset = () => {
          this.clearResetHold();
          this.resetHoldTimer = setTimeout(() => {
            this.finalResetGameButton.classList.remove('holding');
            game.restartGame();
            this.showGame();
          }, this.resetHoldDuration);
          this.finalResetGameButton.classList.add('holding');
        };

        const cancelReset = () => {
          this.clearResetHold();
          this.finalResetGameButton.classList.remove('holding');
        };

        this.finalResetGameButton.addEventListener('pointerdown', startReset);
        this.finalResetGameButton.addEventListener('pointerup', cancelReset);
        this.finalResetGameButton.addEventListener('pointerleave', cancelReset);
        this.finalResetGameButton.addEventListener('pointercancel', cancelReset);
      }

      clearResetHold() {
        if (this.resetHoldTimer) {
          clearTimeout(this.resetHoldTimer);
          this.resetHoldTimer = null;
        }
      }

      showGame() {
        this.introScreen.classList.remove('active');
        this.finishScreen.classList.remove('active');
        this.gameScreen.classList.add('active');
        game.render();
        if (game.phaseDialogPending) this.showPhaseDialog();
      }

      showPhaseDialog() {
        const messages = [
          'O caminho parece simples. Programe os passos e leve o robô até o objetivo!',
          'Atenção! Agora precisamos fazer uma curva para encontrar o objetivo.',
          'Este caminho muda de direção. Planeje cada comando com cuidado.',
          'O trajeto faz uma volta. Use os giros no momento certo para não bater nas paredes.',
          'O último desafio é uma serpente. Encontre o caminho completo.'
        ];

        clearTimeout(this.dialogTypingTimer);
        this.phaseDialogText.textContent = '';
        this.phaseDialog.classList.remove('hidden');
        this.typeDialogText(messages[game.currentLevelIndex]);
      }

      typeDialogText(text, index = 0) {
        if (index >= text.length || this.phaseDialog.classList.contains('hidden')) return;

        const character = text[index];
        this.phaseDialogText.textContent += character;
        if (/[A-Za-zÀ-ÿ]/.test(character)) soundManager.playVoice();
        this.dialogTypingTimer = setTimeout(() => {
          this.typeDialogText(text, index + 1);
        }, 35);
      }

      closePhaseDialog() {
        clearTimeout(this.dialogTypingTimer);
        this.phaseDialog.classList.add('hidden');
        game.phaseDialogPending = false;
      }

      showFinish(title, message, canAdvance = false, showFinalCredits = false) {
        this.gameScreen.classList.remove('active');
        this.confettiContainer.innerHTML = '';
        this.finishTitle.textContent = title;
        this.finishMessage.textContent = message;
        this.finishNextButton.style.display = canAdvance ? 'block' : 'none';
        this.finishThanks.style.display = showFinalCredits ? 'block' : 'none';
        this.finishCredits.style.display = showFinalCredits ? 'block' : 'none';
        this.finishScreen.classList.add('active');

        if (canAdvance) {
          for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('span');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animationDelay = `${Math.random() * 0.8}s`;
            confetti.style.animationDuration = `${1.1 + Math.random() * 0.7}s`;
            confetti.style.backgroundColor = ['#3296fa', '#64b4ff', '#e85d75', '#50c878'][i % 4];
            this.confettiContainer.appendChild(confetti);
          }
        }
      }

      retryLevel() {
        game.restartPhase();
        this.showGame();
      }

      resetGame() {
        game.restartGame();
        this.showGame();
      }

      showIntro() {
        this.gameScreen.classList.remove('active');
        this.finishScreen.classList.remove('active');
        this.introScreen.classList.add('active');
      }
    }

    // =========================================================================
    // CONFIGURAÇÕES E CONSTANTES
    // =========================================================================
    const GRID_SIZE = 5;
    const CELL_SIZE = 70;
    const PADDING = 10;

    // Cores
    const COLOR_GRID_BG = '#2d2d3c';
    const COLOR_GRID_LINE = '#46465a';
    const COLOR_PLAYER = '#3296fa';
    const COLOR_GOAL = '#3296fa';     // ob
    const COLOR_OBSTACLE = '#c83c3c';

    // Orientação: 0 = Direita, 1 = Baixo, 2 = Esquerda, 3 = Cima
    const DIRECTIONS = [
      { dx: 1, dy: 0 },  // Direita
      { dx: 0, dy: 1 },  // Baixo
      { dx: -1, dy: 0 }, // Esquerda
      { dx: 0, dy: -1 }  // Cima
    ];

    const Command = {
      MOVE_FORWARD: 'Ande_frente',
      TURN_LEFT: 'Vire_esquerda',
      TURN_RIGHT: 'Vire_direita'
    };

    const robotImages = [
      new Image(),
      new Image(),
      new Image(),
      new Image()
    ];

    robotImages[0].src = 'sprites/OneShot-red_robots_r.gif';
    robotImages[1].src = 'sprites/OneShot-red_robots_d.gif';
    robotImages[2].src = 'sprites/OneShot-red_robots_l.gif';
    robotImages[3].src = 'sprites/OneShot-red_robots_u.gif';

    const wallImage = new Image();
    wallImage.src = 'sprites/parede.jpg';
    wallImage.onload = () => {
      if (typeof game !== 'undefined') game.render();
    };

    const LEVELS_DATA = [
      {
        name: 'Linha Reta',
        start: { x: 2, y: 4, dir: 3 },
        goal: { x: 2, y: 0 },
        grid: [
          [1, 1, 0, 1, 1], 
          [1, 1, 0, 1, 1], 
          [1, 1, 0, 1, 1],
          [1, 1, 0, 1, 1], 
          [1, 1, 0, 1, 1]
        ]
      },
      {
        name: "Curva em 'L'",
        start: { x: 0, y: 4, dir: 0 },
        goal: { x: 3, y: 1 },
        grid: [
          [1, 1, 1, 1, 1], 
          [1, 1, 1, 0, 1], 
          [1, 1, 1, 0, 1],
          [1, 1, 1, 0, 1], 
          [0, 0, 0, 0, 1]
        ]
      },
      {
        name: 'Zig-Zag',
        start: { x: 1, y: 4, dir: 3 },
        goal: { x: 3, y: 0 },
        grid: [
          [1, 1, 1, 0, 1], 
          [1, 1, 1, 0, 1], 
          [1, 1, 0, 0, 1],
          [1, 0, 0, 1, 1], 
          [1, 0, 1, 1, 1]
        ]
      },
      {
        name: "Curva em 'U'",
        start: { x: 4, y: 0, dir: 1 },
        goal: { x: 0, y: 0 },
        grid: [
          [0, 1, 1, 1, 0], 
          [0, 1, 1, 1, 0], 
          [0, 1, 1, 1, 0],
          [0, 1, 1, 1, 0], 
          [0, 0, 0, 0, 0]
        ]
      },
      {
        name: 'Serpente',
        start: { x: 4, y: 4, dir: 2 },
        goal: { x: 0, y: 0 },
        grid: [
          [0, 0, 0, 0, 0], 
          [1, 1, 1, 1, 0], 
          [1, 0, 0, 0, 0],
          [1, 0, 1, 1, 1], 
          [1, 0, 0, 0, 0]
        ]
      }
    ];

    // =========================================================================
    // CLASSE DO JOGADOR
    // =========================================================================
    class Player {
      constructor(x, y, direction = 0) {
        this.startX = x;
        this.startY = y;
        this.startDir = direction;
        this.reset();
      }

      reset() {
        this.x = this.startX;
        this.y = this.startY;
        this.direction = this.startDir;
      }

      moveForward() {
        const dir = DIRECTIONS[this.direction];
        this.x += dir.dx;
        this.y += dir.dy;
      }

      turnLeft() {
        this.direction = (this.direction - 1 + 4) % 4;
      }

      turnRight() {
        this.direction = (this.direction + 1) % 4;
      }

      draw(ctx) {
        const x = PADDING + this.x * CELL_SIZE;
        const y = PADDING + this.y * CELL_SIZE;
        const img = robotImages[this.direction];

        ctx.imageSmoothingEnabled = false;

        if (img.complete && img.naturalWidth > 0) {
          const spriteWidth = 44;
          const spriteHeight = 58;
          const offsetX = (CELL_SIZE - spriteWidth) / 2;
          const offsetY = (CELL_SIZE - spriteHeight) / 2;

          ctx.drawImage(img, x + offsetX, y + offsetY, spriteWidth, spriteHeight);
        } else {
          ctx.fillStyle = COLOR_PLAYER;
          ctx.fillRect(x + 13, y + 13, CELL_SIZE - 26, CELL_SIZE - 26);
        }
      }
    }

    // =========================================================================
    // CLASSE DO NÍVEL / TABULEIRO
    // =========================================================================
    class Level {
      constructor(data) {
        this.size = data.grid.length;
        this.grid = data.grid;
        this.player = new Player(data.start.x, data.start.y, data.start.dir);
        this.goalPos = data.goal;
      }

      isObstacle(x, y) {
        return x < 0 || x >= this.size || y < 0 || y >= this.size || this.grid[y][x] === 1;
      }

      isGoal(x, y) {
        return this.goalPos.x === x && this.goalPos.y === y;
      }

      draw(ctx) {
        for (let r = 0; r < this.size; r++) {
          for (let c = 0; c < this.size; c++) {
            const x = PADDING + c * CELL_SIZE;
            const y = PADDING + r * CELL_SIZE;

            if (this.grid[r][c] === 1) {
              if (wallImage.complete && wallImage.naturalWidth > 0) {
                ctx.drawImage(wallImage, x, y, CELL_SIZE, CELL_SIZE);
              } else {
                ctx.fillStyle = COLOR_OBSTACLE;
                ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
              }
            } else {
              ctx.fillStyle = COLOR_GRID_BG;
              ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
            }
            ctx.strokeStyle = COLOR_GRID_LINE;
            ctx.strokeRect(x, y, CELL_SIZE, CELL_SIZE);
          }
        }

        ctx.fillStyle = COLOR_GOAL;
        ctx.fillRect(
          PADDING + this.goalPos.x * CELL_SIZE + 15,
          PADDING + this.goalPos.y * CELL_SIZE + 15,
          CELL_SIZE - 30,
          CELL_SIZE - 30
        );

        this.player.draw(ctx);
      }
    }

    // =========================================================================
    // GERENCIADOR DO JOGO E MOTOR DE EXECUÇÃO
    // =========================================================================
    class Game {
      constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.statusEl = document.getElementById('statusMessage');
        this.commandListEl = document.getElementById('commandList');
        this.runButton = document.getElementById('runButton');
        this.levelIndicator = document.getElementById('levelIndicator');
        this.nextLevelBtn = document.getElementById('nextLevelBtn');
        this.finishNextButton = document.getElementById('finishNextButton');

        this.currentLevelIndex = 0;
        this.commands = [];
        this.isExecuting = false;
        this.phaseDialogPending = false;
        this.stepDelay = 400; // Tempo em milissegundos por ação

        this.loadLevel(0);
        this.animate();
      }

      animate() {
        this.render();
        requestAnimationFrame(() => this.animate());
      }

      loadLevel(index) {
        this.currentLevelIndex = index;
        const data = LEVELS_DATA[index];
        this.level = new Level(data);
        this.phaseDialogPending = true;
        this.levelIndicator.textContent = `Fase ${index + 1} de ${LEVELS_DATA.length}: ${data.name}`;
        this.nextLevelBtn.style.display = 'none';
        this.finishNextButton.style.display = 'none';
        this.reset();
      }

      nextLevel() {
        if (this.currentLevelIndex + 1 < LEVELS_DATA.length) {
          this.loadLevel(this.currentLevelIndex + 1);
          screenManager.showGame();
        } else {
          screenManager.showFinish('Parabéns!', 'Você concluiu todas as fases do jogo!', false, true);
        }
      }

      isOutOfBoundsOrObstacle(x, y) {
        return this.level.isObstacle(x, y);
      }

      // Reinício completo do jogo: usado apenas pelo botão da tela final.
      restartGame() {
        this.currentLevelIndex = 0;
        this.isExecuting = false;
        this.commands = [];
        this.phaseDialogPending = true;
        this.loadLevel(0);
      }

      // Reset apenas da fase atual: usado pelo botão RESETAR do painel.
      restartPhase() {
        this.isExecuting = false;
        this.level.player.reset();
        this.statusEl.textContent = 'Programe a rota até o objetivo!';
        this.runButton.disabled = false;
        this.render();
      }

      addCommand(cmd) {
        if (this.isExecuting) return;
        this.commands.push(cmd);
        this.updateUI();
      }

      reset(playSound = false) {
        if (playSound) soundManager.playReset();
        this.isExecuting = false;
        this.commands = [];
        this.level.player.reset();
        this.statusEl.textContent = 'Programe a rota até o objetivo!';
        this.runButton.disabled = false;
        this.updateUI();
        this.render();
      }

      async runProgram() {
        if (this.isExecuting || this.commands.length === 0) return;

        soundManager.playConfirm();
        this.isExecuting = true;
        this.runButton.disabled = true;
        this.statusEl.textContent = 'Executando comandos...';

        try {
          const queue = [...this.commands];

          for (let i = 0; i < queue.length; i++) {
            if (!this.isExecuting) break;

            const cmd = queue[i];
            this.executeCommand(cmd);
            this.render();

            const player = this.level.player;

            // Validações pós-movimento
            if (this.level.isGoal(player.x, player.y)) {
              soundManager.playVictory();
              this.statusEl.textContent = 'SUCESSO! Você alcançou o objetivo!';
              screenManager.showFinish('Parabéns!', 'Você alcançou o objetivo e concluiu a fase!', true, false);
              return;
            }

            if (this.level.isObstacle(player.x, player.y)) {
              soundManager.playFailure();
              this.statusEl.textContent = 'FALHA! Você colidiu!';
              screenManager.showFinish('Fase não concluída', 'O robô colidiu com um obstáculo ou saiu da grade.', false, false);
              return;
            }

            // Aguarda o próximo passo de animação
            await new Promise(resolve => setTimeout(resolve, this.stepDelay));
          }

          if (this.isExecuting) {
            soundManager.playFailure();
            this.statusEl.textContent = 'Comandos finalizados. Tente novamente!';
            screenManager.showFinish('Fase não concluída', 'A fila terminou antes de o robô alcançar o objetivo.');
          }
        } finally {
          this.isExecuting = false;
          this.runButton.disabled = false;
        }
      }

      executeCommand(cmd) {
        const player = this.level.player;
        if (cmd === Command.MOVE_FORWARD) {
          const dir = DIRECTIONS[player.direction];
          const nx = player.x + dir.dx;
          const ny = player.y + dir.dy;

          if (nx >= 0 && nx < this.level.size && ny >= 0 && ny < this.level.size) {
            player.moveForward();
            soundManager.playStep();
          } else {
            this.statusEl.textContent = 'FALHA! Saiu dos limites!';
            this.isExecuting = false;
          }
        } else if (cmd === Command.TURN_LEFT) {
          player.turnLeft();
          soundManager.playTurn();
        } else if (cmd === Command.TURN_RIGHT) {
          player.turnRight();
          soundManager.playTurn();
        }
      }

      updateUI() {
        this.commandListEl.innerHTML = '';
        const labels = {
          'Ande_frente': 'ANDAR PARA FRENTE',
          'Vire_esquerda': 'VIRAR PARA ESQUERDA',
          'Vire_direita': 'VIRAR PARA DIREITA'
        };

        this.commands.forEach((cmd, index) => {
          const item = document.createElement('div');
          item.className = 'command-item';
          item.textContent = `${index + 1}. ${labels[cmd] || cmd}`;
          this.commandListEl.appendChild(item);
        });

        // Scroll automático para o final da fila de comandos
        this.commandListEl.scrollTop = this.commandListEl.scrollHeight;
      }

      render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.level.draw(this.ctx);
      }
    }

    // Inicialização do Jogo
    const soundManager = new SoundManager();
    const game = new Game();
    const screenManager = new ScreenManager();