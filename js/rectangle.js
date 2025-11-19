const canvas = document.getElementById("myRectangle");
const ctx = canvas.getContext("2d");


//Draw Rectangle
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50, 150);
ctx.lineTo(200, 150);
ctx.lineTo(200, 50);
ctx.closePath();
ctx.fillStyle="green";
ctx.fill();
ctx.strokeStyle="black";


