let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let pi = 3.14159;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let ballRadius = 10;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, pi * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x+=dx;
    y+=dy;
    
    // bounds for bouncing (bottom/top)
    if (y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    // bounds for bouncing (right/left)
    if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
}

setInterval(draw, 10);