var c = document.getElementById("mc");
var ctx = c.getContext("2d");
// ctx.moveTo(0,0);
// ctx.lineTo(200,100);
// ctx.strokeStyle = "blue";
// ctx.lineWidth = 5; 
// ctx.stroke();

ctx.fillRect(100, 100, 50, 150);
ctx.fillStyle = 'rgb(100, 50, 150)';
var c1 = document.getElementById("id");
var ctx1 = c1.getContext("2d");

ctx1.fillRect(0,0,150,150);
ctx1.fillRect(150,150,150,150);
ctx1.fillStyle = 'rgb(100, 50, 150)';

var c2 = document.getElementById("dj");
var ctx2 = c2.getContext("2d");
ctx2.fillRect(0,0,300,300)
ctx2.clearRect(20, 20, 120, 120);
ctx2.clearRect(160, 20, 120, 120);
ctx2.clearRect(20, 160, 120, 120);
ctx2.clearRect(160, 160, 120, 120);

