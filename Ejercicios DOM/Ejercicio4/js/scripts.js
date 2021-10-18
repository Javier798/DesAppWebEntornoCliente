function createTable() {

    var columnas= document.getElementById("columnas").value;
    var filas = document.getElementById("filas").value;
    var table =document.getElementById("myTable");
    for (let i = 0; i < filas; i++) {
        var tr = document.createElement("tr");
        for (let j = 0; j < columnas; j++) {
            var td = document.createElement("td");
            td.appendChild(document.createTextNode("Fila: "+i+" Columna: "+j));
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}