var ctx = document.getElementById("mc").getContext('2d');

var WIDTH = 500;
var HEIGHT = 500;

var x,y;

var dx,dy;

function init(){ 
x = 250

y = 100

dx = 5 

dy = 3
setInterval(updateFrame, 20);
}
//function drawCircle(x,y){
//	ctx.beginPath();
//	ctx.arc(x,y,50,0,6.28);
//	ctx.closePath();
//	ctx.stroke();
//	ctx.fillStyle = "blue";
//	ctx.fill();
//}

function clear(){
ctx.clearRect(0,0,WIDTH,HEIGHT);
}
function updateFrame(){
	clear();
	drawCircle(x,y);

	if (x + dx < 0 || x + dx > WIDTH){
dx = -dx
	}
 if (y + dy < 0 || y + dy > HEIGHT){
 dy = -dy
 }
	x = x + dx;
	y += dy
}
 init();


