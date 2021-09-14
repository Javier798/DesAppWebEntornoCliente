var rows = prompt("introduzca el alto de la tabla");
var columns = prompt("introduzca el ancho de la tabla");
var res = rows * columns;
document.write("<table border>");


for(var i = 0; i< rows;i++){
    document.write("<tr>");

    for(var j=0; j< columns;j++){
        document.write("<td>" + esPrimo(res) + "</td>");
        res--;
    }
    document.write("</tr>");
}
document.write("</table>");

function esPrimo(numero){
    for(var i=2; i<numero;i++){
        if(numero%i==0){
            return numero;
        }
    }
    return "p";
}