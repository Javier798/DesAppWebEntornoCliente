window.onload=function () {
    var selector=document.getElementById("mySelect");
    var opciones = selector.childElementCount;
    var mostrar="";
    for (let i = 0; i < opciones; i++) {
        mostrar+="Opcion 1: "+ selector[i].value+"\n";
    }
    document.getElementById("total").disabled =true;
    document.getElementById("total").value= opciones;
    document.getElementById("mostrar").innerHTML= mostrar;
    

}