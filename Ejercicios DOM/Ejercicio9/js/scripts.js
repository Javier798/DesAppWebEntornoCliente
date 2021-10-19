
function resaltarNegrita(enlace) {
    let parrafo = enlace.nextElementSibling;

    let bs=parrafo.getElementsByTagName("b");
    for (let i = 0; i < bs.length; i++) {
        bs[i].style.color="red";
        
    }



}
function quitarResalto(enlace){
    let parrafo = enlace.nextElementSibling;

    let bs=parrafo.getElementsByTagName("b");
    for (let i = 0; i < bs.length; i++) {
        bs[i].style.color="black";
        
    }
}
