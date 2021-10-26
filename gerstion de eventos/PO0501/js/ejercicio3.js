window.onload=function () {
 var enlaces = document.querySelectorAll("a");
 for (let i = 0; i < enlaces.length; i++) {
     enlaces[i].addEventListener("click",()=>{
        mostrarOcultrar(i+1);
     });
     
 }
}
function mostrarOcultrar(numero) {
    if(document.getElementById("contenidos_"+numero).style.display!="none"){
        document.getElementById("contenidos_"+numero).style.display="none";
        document.getElementById("enlace_"+numero).innerHTML="Ocultando";
    }else{
        document.getElementById("contenidos_"+numero).style.display="block";
        document.getElementById("enlace_"+numero).innerHTML="Mostrando";
    }
}