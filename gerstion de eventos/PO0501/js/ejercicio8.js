function limita(evento, caracteres) {
    let elemento = evento.currentTarget;
    let array =[8,37,40,46,38,39];
    if (!array.includes(evento.keyCode)&&elemento.value.length < 100) {
        return true;
    }
    if (array.includes(evento.keyCode)&&elemento.value.length == 100) {
        return true;
    }else{
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
    p.appendChild(document.createTextNode("Te quedan: " + (caracteres - elemento.value.length)));
    document.body.appendChild(p);
}