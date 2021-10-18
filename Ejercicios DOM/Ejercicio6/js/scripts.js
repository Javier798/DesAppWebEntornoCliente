function getOptions() {
    var selector=document.getElementById("mySelect");
    var opciones = selector.childElementCount;
    var mostrar="";
    for (let i = 0; i < opciones; i++) {
        mostrar+="Opcion 1: "+ selector[i].value+"\n";
    }
    alert("Total: "+opciones+"\n"+"Opciones\n"+mostrar);

}