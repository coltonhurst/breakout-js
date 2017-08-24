let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let pi = 3.14159;

// Draw a red square
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

// Draw a green circle 
ctx.beginPath();
ctx.arc(240, 160, 20, 0, pi * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

// Draw an empty blue rectangle, with a transparent outline
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();

/*
Extra Notes

ctx.arc() params: 
x, y, arc radius, start angle (radians), end angle (radians),
dir of drawing (default is false, which is clockwise, true is counterclockwise)
*/