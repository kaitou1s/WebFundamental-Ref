var p1Button = document.querySelector('#p1');
var p2Button = document.querySelector('#p2');
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');
var resetButton = document.querySelector('#reset');
var paragraphDisplay = document.querySelector('#maxScore')
var input = document.querySelector('input');
var p1Score = 0;
var checkGameOver = false;
var p2Score = 0;
var winnerScore = 5;
p1Button.addEventListener('click', () => {
    if (!checkGameOver) {
        p1Score++;
        if (p1Score === winnerScore) {
            p1Display.classList.toggle('winner');
            checkGameOver = true;
        }
        p1Display.textContent = p1Score;

    }
})
p2Button.addEventListener('click', () => {
    if (!checkGameOver) {
        p2Score++;
        if (p2Score === winnerScore) {
            p2Display.classList.toggle('winner');
            checkGameOver = true;
        }
        p2Display.textContent = p2Score;
    }
})
resetButton.addEventListener('click', () => {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove('winner');
    p2Display.classList.remove('winner');
    checkGameOver = false;
})
input.addEventListener('change', () => {
    paragraphDisplay.textContent = input.value;
    winnerScore = Number(input.value)
})