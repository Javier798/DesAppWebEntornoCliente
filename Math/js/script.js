document.write("<h1>Ejercicio 1</h1>");
document.write(`<ul>`);
document.write(`<li>Entrada: E164,16,8. Salida: ${cambioDeBase('E164',16,8)}</li><br>`);
document.write(`<li>Entrada: 1000,2,8. Salida: ${cambioDeBase(1000,2,8)}</li><br>`);
document.write(`</ul>`);

/**
 * Pasa el numero a decimal y de decimal a cualquier otra base
 * @param {*} numero El numero a transformar
 * @param {*} baseActual La base en la que se encuentra
 * @param {*} baseFinal La base a la que queremos cambiarlo
 * @returns El numero en la base deseada
 */
function cambioDeBase(numero, baseActual, baseFinal) {
    let numeroDecimal = parseInt(numero, baseActual);
    return numeroDecimal.toString(baseFinal);

}


document.write("<h1>Ejercicio 2</h1>");
document.write(`<ul>`);
document.write(`<li>Entrada: 16,8. Salida: ${numeroAleatorio(16,8)}</li><br>`);
document.write(`<li>Entrada: 2,8. Salida: ${numeroAleatorio(2,8)}</li><br>`);
document.write(`<li>Entrada: 2. Salida: ${numeroAleatorio(2)}</li><br>`);
document.write(`</ul>`);
/**
 * 
 * @param {*} numero1 un numero para genrerar numeros aleatorios, puede formar parte de un rango junto con el otro parametro
 * @param {*} numero2 un numero para genrerar numeros aleatorios, puede formar parte de un rango junto con el otro parametro
 * @returns Un numero aleatorio en el rango
 */
function numeroAleatorio(numero1, numero2) {
    let max=0;
    let min=0;
    if(numero1>numero2||numero2==undefined){
        max= numero1;
        min=numero2;
    }else{
        max= numero2;
        min=numero1;
    }
    if(min==undefined){
        min=0;
    }
    return parseInt(Math.random()* ((max+1) - min) + min);
}
document.write("<h1>Ejercicio 3</h1>");
document.write(`<ul>`);
document.write(`<li>Entrada: -15. Salida: ${numerosNaturalesPositivos(-15)}</li><br>`);
document.write(`<li>Entrada: 1. Salida: ${numerosNaturalesPositivos(1)}</li><br>`);
document.write(`<li>Entrada: 10.22. Salida: ${numerosNaturalesPositivos(10.22)}</li><br>`);
document.write(`<li>Entrada: 10/0. Salida: ${numerosNaturalesPositivos(10/0)}</li><br>`);
document.write(`</ul>`);
/**
 * 
 * @param {*} numero El numero a comprobar
 * @returns true o false dependiendo de si el numero es natural o no
 */
function numerosNaturalesPositivos(numero) {
    if(Number.isInteger(numero)&&numero>0){
        return true;
    }else{
        return false;
    }
}
document.write("<h1>Ejercicio 4</h1>");
document.write(`<ul>`);
document.write(`<li>Entrada: 10.375,2. Salida: ${redondear(10.375,2)}</li><br>`);
document.write(`<li>Entrada: 12.37499,2. Salida: ${redondear(12.37499,2)}</li><br>`);
document.write(`<li>Entrada: -10.3079499,3. Salida: ${redondear(-10.3079499,3)}</li><br>`);
document.write(`</ul>`);
function redondear(numero,redondeo) {
    return numero.toFixed(redondeo);

}

document.write("<h1>Ejercicio 5</h1>");
document.write(`<ul>`);
document.write(`<li>Entrada: 23. Salida: ${esEntero(23)}</li><br>`);
document.write(`<li>Entrada: 4e2. Salida: ${esEntero(4e2)}</li><br>`);
document.write(`<li>Entrada: NaN. Salida: ${esEntero(NaN)}</li><br>`);
document.write(`<li>Entrada: 23.75. Salida: ${esEntero(23.75)}</li><br>`);
document.write(`<li>Entrada: -23. Salida: ${esEntero(-23)}</li><br>`);
document.write(`</ul>`);
/**
 * 
 * @param {*} numero El numero a comprobar
 * @returns true o false dependiendo de si el numero es entero o no
 */
function esEntero(numero) {
    if(Number.isInteger(numero)){
        return true;
    }else{
        return false;
    }
}



document.write("<h1>Ejercicio 6</h1>");
document.write(`<ul>`);
document.write(`<li>Entrada: 1000. Salida: ${numerosRomanos(1000)}</li><br>`);
document.write(`<li>Entrada: 1566. Salida: ${numerosRomanos(1666)}</li><br>`);
document.write(`<li>Entrada: 9999. Salida: ${numerosRomanos(9999)}</li><br>`);
document.write(`</ul>`);

/**
 * 
 * @param {*} numero los años que se quieren pasar a numeros romanos
 * @returns La cantidad de años en numeros romanos
 */
function numerosRomanos(numero){
    var numerosRomanos=[1000,500,100,50,10,5,1];
    var arrayResultado=[];
    let devovler="";
    for (let index = 0; index < numerosRomanos.length; index++) {
        arrayResultado[index]= parseInt(numero/numerosRomanos[index]);
        numero=numero%numerosRomanos[index];
    }
    for (let i = 0; i < arrayResultado.length; i++) {
        for (let j = arrayResultado[i]; j !=0; j--) {
            devovler = devovler + mostrarnumeros(numerosRomanos[i]);
            
        }
        
    }
    return devovler;
}
/**
 * 
 * @param {*} numero 
 * @returns La letra correspondiente
 */
function mostrarnumeros(numero){
    switch (numero){
        case 1000:
            return 'M';
        case 500:
            return 'D';
        case 100:
            return 'C';
        case 50:
            return 'L';
        case 10:
            return 'X';
        case 5:
            return 'V';
        case 1:
            return'I';
        }
    
}
