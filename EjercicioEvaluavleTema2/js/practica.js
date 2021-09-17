function invertirNumero(numero){
    numero = numero + "";
    return [...numero].reverse().join("");
}
document.write("<h1>Ejercicio 1</h1>");
document.write("<ul>");
document.write(`<li>Entrada: 594593289; Salida: ${invertirNumero(594593289)}</li>`);
document.write(`<li>Entrada: 29.9; Salida: ${invertirNumero(29.9)}</li>`);
document.write(`<li>Entrada: 85867; Salida: ${invertirNumero(85867)}</li>`);
document.write("</ul>");

document.write("<h1>Ejercicio 2</h1>");


document.write(`<ul>`);
document.write(`<li>Entrada: Pan; Salida:</li>`);
combinacionesPosibles("Pan");
document.write(`<li>Entrada: Pepino; Salida:</li>`);
combinacionesPosibles("Pepino");
document.write(`<li>Entrada: Avion; Salida:</li>`);
combinacionesPosibles("Avion");
document.write(`</ul>`);


function combinacionesPosibles(cadena){
document.write("<ul>");
document.write(`<li>${cadena}</li>`);
for(var i=0; i< cadena.length;i++){
    document.write(`<li>${cadena.charAt(i)}</li>`);
    for(var j=0; j< cadena.length;j++){
        if(i!=j&&i<j)
            document.write(`<li>${cadena.charAt(i)+cadena.charAt(j)}</li>`);
    }
}
document.write("</ul>");
}


document.write("<h1>Ejercicio 3</h1>");

document.write("<ul>");
ordenarArray("webmaster");
ordenarArray("periquito");
ordenarArray("Hipopotamo");
document.write("</ul>");
function ordenarArray(cadena){
    var array = [...cadena];
    array.sort();
    document.write("<li>")
    for (let index = array.length-1; index > 0; index--) {
            document.write(array[index]);
    }
    document.write("</li>");
}


document.write("<h1>Ejercicio 4</h1>");
document.write("<ul>");
palabraMasLarga("Tutorial de desarrollo web");
palabraMasLarga("Me gusta el pan");
palabraMasLarga("Ayer estubo nublado");
document.write("</ul>");
function palabraMasLarga(cadena){
    var array = cadena.split(" ");
    
    var posicionArray=0;
    var tamaño=0;
    for(var i=0; i<array.length;i++) {
        if(array[i].length>tamaño){
            tamaño=array[i].length;
            posicionArray=array.indexOf(array[i]);
        }
        
    }
    document.write(`<li>Entreada: ${cadena}; Salida: ${array[posicionArray]}</li>`);
}


document.write("<h1>Ejercicio 5</h1>");
document.write("<ul>");
cuentaVocales("El rápido zorro marrón");
cuentaVocales("El camión corría mucho");
cuentaVocales("EL AVIÓN ERA BLANCO");
document.write("</ul>");

function cuentaVocales(cadena){
    var vocales=["a","e","i","o","u","A","E","I","O","U","Á","É","Í","Ó","Ú","á","é","í","ó","ú"];
    var contVocales=0;
    for (let index = 0; index < cadena.length; index++) {
        if(vocales.includes(cadena.charAt(index))){
            contVocales++;
        }
    }
    document.write(`<li>Entrada: ${cadena}; Salida: ${contVocales}</li>`);
}