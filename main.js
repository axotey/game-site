let currentGame = null;

function openGame(gameName) {
    const modal = document.getElementById('gameModal');
    const container = document.getElementById('gameContainer');
    currentGame = gameName;
    
    container.innerHTML = '';
    
    switch(gameName) {
        case 'snake':
            startSnake();
            break;
        case 'flappybird':
            startFlappyBird();
            break;
        case 'pong':
            startPong();
            break;
        case 'tictactoe':
            startTicTacToe();
            break;
        case 'memory':
            startMemory();
            break;
        case '2048':
            start2048();
            break;
        case 'bitlife':
            startBitLife();
            break;
        case 'minesweeper':
            startMinesweeper();
            break;
        case 'connect4':
            startConnect4();
            break;
        case 'breakout':
            startBreakout();
            break;
        case 'wordguess':
            startWordGuess();
            break;
        case 'dino':
            startDino();
            break;
        case 'numberguess':
            startNumberGuess();
            break;
        case 'spaceshooter':
            startSpaceShooter();
            break;
        case 'sudoku':
            startSudoku();
            break;
        case 'simon':
            startSimon();
            break;
        case 'whackamole':
            startWhackAMole();
            break;
        case 'trivia':
            startTrivia();
            break;
        case 'typing':
            startTyping();
            break;
        case 'rockpaperscissors':
            startRockPaperScissors();
            break;
        case 'pacman':
            startPacMan();
            break;
    }
    
    modal.classList.add('active');
}

function closeGame() {
    document.getElementById('gameModal').classList.remove('active');
    if (window[`stop${currentGame}`]) {
        window[`stop${currentGame}`]();
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('gameModal');
    if (event.target === modal) {
        closeGame();
    }
}
