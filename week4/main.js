let boardGame = document.querySelectorAll('.board');
let resetButton = document.getElementById('resetButtom');
boardGame = Array.from(boardGame);

let Player = "X";

let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function checkWinner(){
    win.forEach(function(tac){
        let checktac = tac.every(i => boardGame[i].innerText.trim() == Player)
        if(checktac){
            winnerColor(tac)
        }
    })
}

function winnerColor(tac){
    tac.forEach(function(i){
        boardGame[i].classList.add("winner")
    })
}

boardGame.forEach(function(board){
    board.addEventListener('click', function(){
        if(board.innerText.trim() != "") return
        board.innerText = Player
        checkWinner()
        Player = Player == "X" ? "O" : "X"
    })
})

resetButton.addEventListener('click', function(){
    window.location.reload();

})