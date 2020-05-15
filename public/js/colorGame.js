var amountOfSquares = 6;
var colors = [];
var checkDisplay = document.querySelector('#checkDisplay');
var colorDisplay = document.querySelector('#colorDisplay');
var headerDisplay = document.getElementById('header')
var squares = document.querySelectorAll(".square");
var modeButtons = document.querySelectorAll(".mode");
var resetButton = document.querySelector("#reset");
var pickedColor;
colorDisplay.textContent = pickedColor;
// set all colors to  become pickedColor if user picks right.
setGameMode()
setupSquares();
reset();
var changeColor = (color) => {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function setGameMode() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function() {
            if (this.textContent === "Easy") amountOfSquares = 3;
            else amountOfSquares = 6;
            reset();
        })
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        // add color to squares
        squares[i].style.backgroundColor = colors[i];

        // add even listener to squares
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            console.log(this)
            if (clickedColor === pickedColor) {
                checkDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                headerDisplay.style.backgroundColor = pickedColor;
                changeColor(pickedColor);
            } else {
                this.style.backgroundColor = '#232323'
                checkDisplay.textContent = "Try Again!";
            }

        })
    };
}

function reset() {
    colors = generateRadomColors(amountOfSquares);
    pickedColor = setPickedColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
    checkDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block"
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    headerDisplay.style.background = "steelblue";
}
resetButton.addEventListener('click', function() {
    reset();
})

function generateRadomColors(num) {
    var array = [];
    for (var i = 0; i < num; i++) {
        array.push(randomColor())
    }
    return array;
}

function randomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function setPickedColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}