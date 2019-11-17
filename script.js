const screen = document.getElementById('screen');
const context = screen.getContext('2d');
const currentPlayerId = 'player1';

const game = {
    players: {
        'player1': { x: 1, y: 1 },
        'player2': { x: 9, y: 9 }
    },
    fruits: {
        'fruit1': { x: 3, y: 1 }
    }
};

document.addEventListener('keydown', handleKeydown);

function handleKeydown(event) {
    const keyPressed = event.key;
    const player = game.players[currentPlayerId];

    if (keyPressed === 'ArrowUp' && player.y - 1 >= 0) {
        player.y--;
        return;
    }
    
    if (keyPressed === 'ArrowRight' && player.x + 1 < screen.width) {
        player.x++;
        return;
    }

    if (keyPressed === 'ArrowDown' && player.y + 1 < screen.height) {
        player.y++;
        return;
    }

    if (keyPressed === 'ArrowLeft' && player.x - 1 >= 0) {
        player.x--;
        return;
    }
}

function clearScreen() {
    context.fillStyle = 'white';
    context.clearRect(0, 0, 10, 10);
}

(function renderScreen() {
    clearScreen();

    for (const playerId in game.players) {
        const player = game.players[playerId];
        context.fillStyle = 'black';
        context.fillRect(player.x, player.y, 1, 1);
    }

    for (const fruitId in game.fruits) {
        const fruit = game.fruits[fruitId];
        context.fillStyle = 'green';
        context.fillRect(fruit.x, fruit.y, 1, 1);
    }

    requestAnimationFrame(renderScreen);
})();