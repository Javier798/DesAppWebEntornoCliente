let tabla=document.getElementById("myTable");

window.onload=function(){
    
    var fila= document.getElementById("fila");
    fila.setAttribute("min","0");
    fila.setAttribute("max",tabla.children[0].childElementCount);
    var columna = document.getElementById("columna");
    columna.setAttribute("min","0");
    columna.setAttribute("max",tabla.children[0].children[0].childElementCount);
}
function changeContent() {
    var fila = document.getElementById("fila");
    var columna = document.getElementById("columna");
    var texto = document.getElementById("texto");

    tabla.children[0].children[fila.value - 1].children[columna.value - 1].innerHTML = texto.value;
}
function comprobarColumnas(){
    var columnas =tabla.children[0].children[0].childElementCount;
    var columna = document.getElementById("columna").value;
    if(columna<1||columna>columnas){
        document.getElementById("columna").value="";
    }
}
function comprobarFilas(){
    var filas =tabla.children[0].childElementCount;
    var fila = document.getElementById("fila").value;
    if(fila<1||fila>filas){
        document.getElementById("fila").value="";
    }
}
