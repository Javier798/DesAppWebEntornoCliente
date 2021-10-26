function muestraOculta(enlace) {

    if(enlace.previousElementSibling.style.display!="none"){
        enlace.previousElementSibling.style.display="none";
        enlace.innerHTML="Ocultando";
    }else{
        enlace.previousElementSibling.style.display="block";
        enlace.innerHTML="Mostrando";
    }
}