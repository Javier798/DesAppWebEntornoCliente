window.onload = function () {
    var divs = document.querySelectorAll("div");
    var altoTotal = window.innerHeight;
    for (let i = 0; i < divs.length; i++) {
        divs[i].onclick=colores;
        divs[i].style.height = altoTotal / 2 + "px";
    }
}
function colores(evento) {
    var div = evento.currentTarget;
    alert(div.id);
}
