var rows = prompt("introduzca el alto de la tabla");
var columns = prompt("introduzca el ancho de la tabla");
var colspan = prompt("introduzca el colspan de la tabla");
var contador = 1;
document.write("<table border>");
for (var i = 0; i < rows; i++) {
    document.write("<tr>");
    if (i < 1) {
        for (var j = 0; j < columns; j++) {

            document.write("<td>" + contador + "</td>");
            contador++;
        }
    } else {
        for (var j = 0; j < columns; j++) {
            if (columns - j > colspan) {
                document.write("<td colspan=" + colspan + ">" + contador + "</td>");
                contador++;
                j=j+parseInt(colspan)-1;
            } else {
                document.write("<td>" + contador + "</td>");
                contador++;
            }

        }
    }
    document.write("</tr>");
}
document.write("</table>");

