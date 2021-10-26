function coordenadas (evento){
var y = document.getElementById("y");
var x = document.getElementById("x");
var yy = document.getElementById("yy");
var xx = document.getElementById("xx");
var yyy = document.getElementById("yyy");
var xxx = document.getElementById("xxx");
y.value=evento.clientY;
x.value=evento.clientX;
yy.value=evento.screenY;
xx.value=evento.screenX;
yyy.value=evento.pageY;
xxx.value=evento.pageX;
}
document.onmousemove=coordenadas;