function limita(evento,caracteres) {
    let elemento = evento.currentTarget;
    if(evento.keyCode==8||evento.keyCode==8||evento.keyCode==37||evento.keyCode==39||evento.keyCode==38||evento.keyCode==40&&elemento.value.length==100){
        return true
    }
    if(elemento.value.length==caracteres||evento.keyCode==8||evento.keyCode==8){
        return false;
    }
    
}
function actualizaInfo(caracteres) {
    let p = document.createElement("p");
    let ps = document.getElementsByTagName("p");
    for (let i = 0; i < ps.length; i++) {
        document.body.removeChild(ps[i]);
        
    }
    let elemento = document.getElementById("texto");
    p.appendChild(document.createTextNode("Te quedan: "+(caracteres-elemento.value.length)));
    document.body.appendChild(p);
}