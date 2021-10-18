//1. Escribir un programa de JavaScript para establecer el color de fondo de un párrafo.

function cambiaColor(color) {
    var p = document.getElementById("parrafo");
    p.style.backgroundColor = color.value;
    
}