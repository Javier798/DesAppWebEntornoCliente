function insert_Row() {
    var contadorColumnas=1;
    var tabla = document.getElementById("sampleTable");
    var numColumnas = tabla.children[0].children[0].childElementCount;
    var numFilas = tabla.children[0].childElementCount;
    var tbody =tabla.children[0];
    var tr = document.createElement("tr");
    for (let i = 0; i < numColumnas; i++) {
        
        var td =document.createElement("td");
        td.appendChild(document.createTextNode("Row: "+numFilas + " Cell: "+contadorColumnas));
        tr.appendChild(td);
        contadorColumnas++;
        
    }
    tbody.appendChild(tr);
}