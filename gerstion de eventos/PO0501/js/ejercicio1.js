function muestraOculta(numero) {
    
    if(document.getElementById("contenidos_"+numero).style.display!="none"){
        document.getElementById("contenidos_"+numero).style.display="none";
        document.getElementById("enlace_"+numero).innerHTML="Ocultando";
    }else{
        document.getElementById("contenidos_"+numero).style.display="block";
        document.getElementById("enlace_"+numero).innerHTML="Mostrando";
    }
}