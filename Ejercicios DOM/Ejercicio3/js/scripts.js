function changeContent() {
    var fila = document.getElementById("fila");
    var columna = document.getElementById("columna");
    var texto = document.getElementById("texto");
    var tabla = document.getElementById("myTable");
    tabla.children[0].children[fila.value - 1].children[columna.value - 1].innerHTML = texto.value;
}