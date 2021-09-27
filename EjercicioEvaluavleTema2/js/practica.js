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
for(var i=1; i< cadena.length;i++){
    for (let j = 0; j+i <= cadena.length; j++) {
         document.write(`<li>${cadena.substr(j,i)}</li>`);
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
document.write("<h1>Ejercicio 6</h1>");
document.write("<ul>");
devuelveTipo(2);
devuelveTipo("cadena");
devuelveTipo(true);
document.write("</ul>");

function devuelveTipo(tipo){
    document.write(`<li>Entrada: ${tipo}; Salida: ${typeof(tipo)}</li>`);

}


document.write("<h1>Ejercicio 7</h1>");
document.write("<ul>");
cambiaMonedas(46, [25, 10, 5, 2, 1]);
cambiaMonedas(40, [5,10,20]);
cambiaMonedas(1500,[1000,200,45,20,5,1]);
document.write("</ul>");

function cambiaMonedas(numero, arrayValores){
    var arrayResultado=[];
    arrayValores.sort(function(a, b){return b - a});
    document.write(`<li>Entrada: ${numero}, [${arrayValores}]; Salida: `);
    for (let index = 0; index < arrayValores.length; index++) {
        arrayResultado[index]= parseInt(numero/arrayValores[index]);
        numero=numero%arrayValores[index];
    }
    for (let i = 0; i < arrayResultado.length; i++) {
        for (let j = arrayResultado[i]; j !=0; j--) {
            document.write(`${arrayValores[i]},</li>`);
            
        }
        
    }
}

document.write("<h1>Ejercicio 8</h1>");
document.write(`<ul>`);
document.write(`<li>Entrada: thequickbrownfoxjumpsovérthelazydog; Salida:`);
repetidos("thequickbrownfoxjumpsovérthelazydog");
document.write(`<li>Entrada: elcamiónrojoserompió; Salida: `);
repetidos("elcamiónrojoserompió");
document.write(`Entrada: losperrossonbonitos; Salida: `);
repetidos("losperrossonbonitos");
document.write(`</ul>`);

function repetidos(cadena){
    var array=[...cadena];
    var arraydevovler=[];
    var posiciones=0;  
    
    array.forEach(element => {
        if(!arraydevovler.includes(element)){
            arraydevovler.push(element);
        }
    });
    
    
    document.write(`${arraydevovler.join("")}</li>`);

}




document.write("<h1>Ejercicio 9</h1>");
document.write(`<ul>`);
document.write(`<li>Entrada: 10; Salida: `);
aleatorios(10);
document.write(`<li>Entrada: 10; Salida: `);
aleatorios(20);
document.write(`<li>Entrada: 10; Salida: `);
aleatorios(50);
document.write(`</ul>`);

function aleatorios(longitud){
    var caracteresPosibles=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"];
    var devovler="";
    var numero;
    for (let i = 0; i < longitud; i++) {
        numero= parseInt(Math.random() * (62 - 0) + 0);
        devovler+= caracteresPosibles[numero];
    }
    document.write(`${devovler}</li>`);

}