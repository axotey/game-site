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
        case 'tictactoe':
            startTicTacToe();
            break;
        case 'memory':
            startMemory();
            break;
        case '2048':
            start2048();
            break;
        case 'minesweeper':
            startMinesweeper();
            break;
        case 'numberguess':
            startNumberGuess();
            break;
        case 'wordguess':
            startWordGuess();
            break;
        case 'rockpaperscissors':
            startRockPaperScissors();
            break;
    }
    
    modal.classList.add('active');
}

function closeGame() {
    document.getElementById('gameModal').classList.remove('active');
}

window.onclick = function(event) {
    const modal = document.getElementById('gameModal');
    if (event.target === modal) {
        closeGame();
    }
}
