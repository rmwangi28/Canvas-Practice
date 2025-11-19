const canvas = document.getElementById("myCircle");
const ctx = canvas.getContext("2d");

//Draw circle
ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2);
ctx.fillStyle = "#B9DE3F";
ctx.fill();
ctx.strokeStyle = "#0000";
ctx.lineWidth =3;
ctx.stroke();