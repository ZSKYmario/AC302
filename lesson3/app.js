var c = document.getElementById("mc");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(150, 150, 120, 0, 6.28);
ctx.closePath();
ctx.strokeStyle = "green"
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();
var c1 = document.getElementById("id");
var ctx1 = c1.getContext("2d");
ctx1.beginPath();
ctx1.moveTo(10, 250);
ctx1.lineTo(150, 10);
ctx1.lineTo(290, 290);
ctx1.closePath();
ctx1.strokeStyle = "green"
ctx1.stroke();
ctx1.fillStyle = "blue";
ctx1.fill();


var c2 = document.getElementById("dj");
var ctx2 = c2.getContext("2d");
ctx2.beginPath();
ctx2.moveTo(50, 150);
ctx2.lineTo(150, 10);
ctx2.lineTo(250, 150);
ctx2.lineTo(150,300);
ctx2.closePath();
ctx2.strokeStyle = "green"
ctx2.stroke();
ctx2.fillStyle = "blue";
ctx2.fill();
