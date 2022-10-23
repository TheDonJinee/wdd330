const table = document.querySelector('table.board');
const tableData = document.querySelectorAll('td');
const resetBtn = document.querySelector('input');
const played = [];

function playTicTac() {
    if ((this.innerHTML === '' || this.innerHTML === 'x') && played[played.length-1] === 'x') {
        this.innerHTML = 'o'
    } else {
        this.innerHTML = 'x'
    }
    played.push(this.innerHTML)
    this.disable = true;
}

function resetAll() {
    tableData.forEach(data => data.innerHTML = '')
} 

tableData.forEach(data => data.addEventListener('click', playTicTac));
resetBtn.addEventListener('click', resetAll);