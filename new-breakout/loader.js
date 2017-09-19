function drawCircle(canvasContext, x, y, r, sAngle, eAngle, drawDir, borderColor, fillColor) {
	canvasContext.beginPath();
	canvasContext.arc(x, y, r, sAngle, eAngle, drawDir);
	canvasContext.fillStyle = borderColor;
	canvasContext.fillStyle = fillColor;
	canvasContext.fill();
	canvasContext.closePath();
}

function drawRectangle(canvasContext, x, y, width, height, borderColor, fillColor) {
	canvasContext.beginPath();
	canvasContext.rect(x, y, width, height);
	canvasContext.strokeStyle = borderColor;
	canvasContext.fillStyle = fillColor;
	canvasContext.fill();
	canvasContext.stroke();
	canvasContext.closePath();
}