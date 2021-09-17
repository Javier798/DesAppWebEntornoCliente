function invertirNumero(numero){
    numero = numero + "";
    return parseInt([...numero].reverse().join(""));
}
document.write("<h1>Ejercicio 1</h1>");
document.write("<ul>");
document.write(`<li>Entrada: 594593289; Salida: ${invertirNumero(594593289)}</li>`);
document.write(`<li>Entrada: 29; Salida: ${invertirNumero(29)}</li>`);
document.write(`<li>Entrada: 85867; Salida: ${invertirNumero(85867)}</li>`);
document.write("</ul>");

function combinacionesPosibles(cadena){

}