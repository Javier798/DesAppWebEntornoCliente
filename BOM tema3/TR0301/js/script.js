function alarma(){
let tiempo=prompt("Dentro de cuanto tiempo quieres que te avise (En milisegundos)");
window.setTimeout(function(){alert("Hola, ya han pasado " + tiempo + " milisegundos")},tiempo);
}

function longitudHistorial(){

    document.getElementById("Length").innerHTML = history.length;
}
function anterior(){
    window.history.back();
}
function siguiente(){
    window.history.forward();
}
function crearVentana(){
    
  
    let altura = prompt("Introduzca la altura deseada");
    let ancho = prompt("Introduzca el ancho deseado");
    w = window.open('','', `width=${altura},height=${ancho}`);
    w.focus();
}

function aumentarTamaño(){
    let numero =prompt("Cunato quiere aumentar de tamaño la ventana");
    w.resizeBy(numero,numero);
    
}

function recargarPagina(){
    let tiempo=prompt("Cuando quieres que se recargue la pagina (En milisegundos)");
    window.setTimeout(function(){location.reload()},tiempo);
}
function verURL(){
    document.getElementById("url").value = window.location.href;
}
function lanzarURL(){
    window.open(document.getElementById("url").value,'_blank');
}
var w;