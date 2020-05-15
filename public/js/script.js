var h1 = document.querySelector("h1");
var body = document.querySelector('body');
var isBlue = false;
h1.style.color = "pink";
setInterval(() => {
    if (isBlue) {
        body.style.backgroundColor = 'blue';
    } else {
        body.style.backgroundColor = 'pink';
    }
    isBlue = !isBlue;
}, 1000);