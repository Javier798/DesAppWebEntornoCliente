document.write("<h1>Ejercicio 1</h1>");
document.write("<ul>");
document.write(`<li>Entrada: 1234. Salida: ${ejercicio1("[2,4,6,8]{2}", "1234")}</li>`);
document.write(`<li>Entrada: 1233334. Salida: ${ejercicio1("[2,4,6,8]{2}", "1233334")}</li>`);
document.write(`<li>Entrada: 122223334. Salida: ${ejercicio1("[2,4,6,8]{2}", "122223334")}</li>`);
document.write("</ul>");

document.write("<h1>Ejercicio 2</h1>");
document.write("<ul>");
document.write(`<li>Entrada: ** Hola **. salida: ${ejercicio2("** Hola **")}</li>`);
document.write(`<li>Emtrada: * comentario\\n. Salida: ${ejercicio2("* comentario\n")}</li>`);
document.write(`<li>Entrada: Mi gato se llama guantes. Salida: ${ejercicio2("Mi gato se llama guantes")}</li>`);
document.write(`<li>Entrada: *** Mi gato se llama guantes. Salida: ${ejercicio2("*** Mi gato se llama guantes")}</li>`);
document.write("</ul>");

document.write("<h1>Ejercicio 3</h1>");
document.write("<ul>");
document.write(`<li>Entrada: iNi3456fin. Salida: ${ejercicio3("iNi3456fin")}</li>`);
document.write(`<li>Entrada: pepe. Salida: ${ejercicio3("pepe")}</li>`);
document.write(`<li>Entrada: 3456fin. Salida: ${ejercicio3(" 3456fin")}</li>`);
document.write(`<li>Entrada: INI3456. Salida: ${ejercicio3("INI3456")}</li>`);
document.write(`<li>Entrada: ini 3456fin. Salida: ${ejercicio3("ini 3456fin")}</li>`);
document.write(`<li>Entrada: ini 345a6fin. Salida: ${ejercicio3("ini345a6fin")}</li>`);
document.write("</ul>");

document.write("<h1>Ejercicio 4</h1>");
document.write("<ul>");
document.write(`<li>Entrada: 101. Salida: ${ejercicio4("101")}</li>`);
document.write(`<li>Entrada: 1****1. Salida: ${ejercicio4("1****1")}</li>`);
document.write(`<li>Entrada: *00*1*. Salida: ${ejercicio4("*00*1*")}</li>`);
document.write(`<li>Entrada: abc. Salida: ${ejercicio4("abc")}</li>`);
document.write("</ul>");

document.write("<h1>Ejercicio 5</h1>");
document.write("<ul>");
document.write(`<li>Entrada:  **1**. Salida: ${ejercicio5("**1**")}</li>`);
document.write(`<li>Entrada: **. Salida: ${ejercicio5("**")}</li>`);
document.write(`<li>Entrada: 19***99. Salida: ${ejercicio5("19***99")}</li>`);
document.write("</ul>");

document.write("<h1>Ejercicio 6</h1>");
document.write("<ul>");
document.write(`<li>Entrada: bbb. Salida: ${ejercicio6("bbb")}</li>`);
document.write(`<li>Entrada: bbebbebbe. Salida: ${ejercicio6("bbebbebbe")}</li>`);
document.write(`<li>Entrada: bebebe. Salida: ${ejercicio6("bebebe")}</li>`);
document.write(`<li>Entrada: xxxbbb. Salida: ${ejercicio6("xxxbbb")}</li>`);
document.write(`<li>Entrada: baobab. Salida: ${ejercicio6("baobab")}</li>`);
document.write(`<li>Entrada: xyz. Salida: ${ejercicio6("xyz")}</li>`);
document.write(`<li>Entrada: salu2. Salida: ${ejercicio6("salu2")}</li>`);
document.write("</ul>");


document.write("<h1>Ejercicio 7</h1>");
document.write("<ul>");
document.write(`<li>Entrada: +E+A+R.B. Salida: ${ejercicio7("+E+A+R.B")}</li>`);
document.write(`<li>Entrada: +E+A++R. Salida: ${ejercicio7("+E+A++R")}</li>`);
document.write(`<li>Entrada: +E+A+R. Salida: ${ejercicio7("+E+A+R")}</li>`);
document.write(`<li>Entrada: +E+AA+R. Salida: ${ejercicio7("+E+AA+R")}</li>`);
document.write(`<li>Entrada: +E+AA+R. Salida: ${ejercicio7("")}</li>`);
document.write("</ul>");

document.write("<h1>Ejercicio 8</h1>");
document.write("<ul>");
document.write(`<li>Entrada: 1estce007uji1. Salida: ${ejercicio8("1estce007uji1")}</li>`);
document.write(`<li>Entrada: aestce007uji1. Salida: ${ejercicio8("aestce007uji1")}</li>`);
document.write(`<li>Entrada: 1estce007ujib. Salida: ${ejercicio8("1estce007ujib")}</li>`);
document.write(`<li>Entrada: 1estce*007uji1. Salida: ${ejercicio8("1estce*007uji1")}</li>`);
document.write("</ul>");

document.write("<h1>Ejercicio 9</h1>");
document.write("<ul>");
document.write(`<li>Entrada: #F45A34. Salida: ${ejercicio9("#F45A34")}</li>`);
document.write(`<li>Entrada: pepe. Salida: ${ejercicio9("pepe")}</li>`);
document.write(`<li>Entrada: #F45A343. Salida: ${ejercicio9("#F45A343")}</li>`);
document.write(`<li>Entrada: #Z45A34. Salida: ${ejercicio9("#Z45A34")}</li>`);
document.write("</ul>");


document.write("<h1>Ejercicio 10</h1>");
document.write("<ul>");
document.write(`<li>Entrada: 0082. Salida: ${ejercicio10("0082")}</li>`);
document.write(`<li>Entrada: 0101. Salida: ${ejercicio10("0101")}</li>`);
document.write(`<li>Entrada: 007. Salida: ${ejercicio10("007")}</li>`);
document.write(`<li>Entrada: XVI. Salida: ${ejercicio10("XVI")}</li>`);
document.write(`<li>Entrada: 30. Salida: ${ejercicio10("30")}</li>`);
document.write(`<li>Entrada: . Salida: ${ejercicio10("")}</li>`);
document.write("</ul>");

function ejercicio10(cadena){
    return/^0*(100|1[5-9]|[2-9][0-9])$/.test(cadena);
}
function ejercicio9(cadena){
    return /^#[A-F0-9]{6}$/.test(cadena);
}
function ejercicio8(cadena){
    return /^[01][0-9a-z]+[01]$/.test(cadena);
}
function ejercicio7(cadena) {
    return /^[A-Z\+]+$/.test(cadena) && !/[A-Z]{2,}|[\+]{2,}/.test(cadena);
}
function ejercicio5(cadena) {
    if (/^[0-9\*]+$/.test(cadena)) {
        if (!/\*{2,}[0-9]\*{2,}/.test(cadena)) {
            return true;
        }
    }
    return false;
}
function ejercicio6(cadena) {
    return !/bbb/.test(cadena) && !/[A-Z0-9]/.test(cadena);
}
function ejercicio4(cadena) {
    return /^[01\*]*$/.test(cadena) && !/[\*]{3,}/.test(cadena);
}
function ejercicio3(cadena) {
    return /^ini[^a-zA-Z,\n]*fin$/i.test(cadena);
}
function ejercicio2(cadena) {
    return /^\* \w*\n/.test(cadena) || /^\*\* \w* \*\*$/.test(cadena);
}
function ejercicio1(patron, cadena) {
    let expresion = new RegExp(patron);
    if (!expresion.test(cadena)) {
        return true;
    } else {
        return false;
    }
}







