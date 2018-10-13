var c = document.getElementById("mc");
var ctx = c.getContext("2d");

var dv = new Image();
dv.src = "dv.png";

var hp = new Image();
hp.src = "hp.png"

var im = new Image();
im.src = "im.png"

var js = new Image();
js.src = "js.png";

var sm = new Image();
sm.src = "sm.png"

var st = new Image();
st.src = "st.png"

dv.onload = function(){
ctx.drawImage(dv, 300, 30, 350, 350);
}
hp.onload = function(){
ctx.drawImage(hp, 30, 250, 350, 350);
}
im.onload = function(){
ctx.drawImage(im, 300, 500, 350, 350);
}
js.onload = function(){
ctx.drawImage(js, 500, 30, 350, 350);
}
sm.onload = function(){
ctx.drawImage(sm, 700,500 , 350, 350);
}
st.onload = function(){
ctx.drawImage(st, 100, 700, 300, 300);
}

ctx.font = "25px Arial";
ctx.strokeStyle= "";
ctx.strokeText("Iconic idols from Iconic Movies", 500, 500)
