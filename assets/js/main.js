const buttons_theme = document.querySelectorAll('.button_theme');
const buttons_grid = document.querySelectorAll('.button_grid');
const button_players = document.querySelectorAll('.button_players');

buttons_theme.forEach(function(button) {
    button.addEventListener("click", function() {
    buttons_theme.forEach(function(button) {
        button.classList.remove('active');
    });
        this.classList.add('active');
    });
});
buttons_grid.forEach(function(button) {
    button.addEventListener("click", function() {
    buttons_grid.forEach(function(button) {
        button.classList.remove('active');
    });
        this.classList.add('active');
    });
});

button_players.forEach(function(player) {
    player.addEventListener("click", function() {
    button_players.forEach(function(player) {
        player.classList.remove('active');
    });
        this.classList.add('active');
    });
});

//Game board
const boardContainer = document.getElementById("board-container");
let rows = 4;
let columns = 4;

document.getElementById("grid-size-4x4").addEventListener("click", function(){
    rows = 4;
    columns = 4;
});
document.getElementById("grid-size-6x6").addEventListener("click", function(){
    rows = 6;
    columns = 6;
});

document.getElementById("start-button").addEventListener("click", createGameBoard);

function createGameBoard() {
    boardContainer.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < columns; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
        boardContainer.appendChild(row);
    }
}





