document.write("<h1>Ejercicio 1</h1>");
document.write("<ul>");
document.write(`<li>Entrada:  js cadena ejercicios. Salida: ${capitalizeWords(" js cadena ejercicios")}</li>`);
document.write(`<li>Entrada: El perro de Juan. Salida: ${capitalizeWords("El perro de Juan")}</li>`);
document.write(`<li>Entrada: Coche amarillo. Salida: ${capitalizeWords("Coche amarillo")}</li>`);
document.write("</ul>");
function capitalizeWords(string) {
    return string.toUpperCase();
}


document.write("<h1>Ejercicio 2</h1>");
document.write("<ul>");
document.write(`<li>Entrada: Hola Pepe como Estas. Salida: ${unCapitalizeWords("Hola Pepe como Estas")}</li>`);
document.write(`<li>Entrada: Me llamo Javier MArin. Salida: ${unCapitalizeWords("Me llamo Javier MArin")}</li>`);
document.write(`<li>Entrada: Hola buenos Dias. Salida: ${unCapitalizeWords("Hola buenos Dias")}</li>`);
document.write("</ul>");

function unCapitalizeWords(string) {
    let palabras = string.split(" ");
    let arrayAux;
    for (let index = 0; index < palabras.length; index++) {
        palabras[index] = palabras[index].charAt(0).toLowerCase() + palabras[index].substr(1);
        arrayAux = [...palabras[index]];
        arrayAux[0] = arrayAux[0].toLowerCase();
        palabras[index] = arrayAux.join("");
    }
    return palabras.join(" ");
}


document.write("<h1>Ejercicio 3</h1>");
document.write("<ul>");
document.write(`<li>Entrada: Hola Pepe como Estas. Salida: ${isUpperCaseAt("Hola Pepe como Estas", 0)}</li>`);
document.write(`<li>Entrada: Me llamo Javier MArin. Salida: ${isUpperCaseAt("Me llamo Javier MArin", 3)}</li>`);
document.write(`<li>Entrada: Hola buenos Dias Salida: ${isUpperCaseAt("Hola buenos Dias", 9)}</li>`);
document.write("</ul>");
function isUpperCaseAt(string, numero) {
    return string.charAt(numero) === string.charAt(numero).toUpperCase() ? "Es mayuscula" : "Es minuscula";
}


document.write("<h1>Ejercicio 4</h1>");
document.write("<ul>");
document.write(`<li>${startsWith('js ejercicios de cadena', 'js')}</li>`);
document.write(`<li>${startsWith('ejercicios de cadena', 'js')}</li>`);
document.write(`<li>${startsWith('ejercicios de cadena', 'ejercicios')}</li>`);
document.write("</ul>");
function startsWith(string, string1) {
    return string.startsWith(string1);

}

document.write("<h1>Ejercicio 5</h1>");
document.write("<ul>");
document.write(`<li>${endsWith('js ejercicios de cadena', 'cadena')}</li>`);
document.write(`<li>${endsWith('ejercicios de cadena', 'de')}</li>`);
document.write(`<li>${endsWith('ejercicios de', 'de')}</li>`);
document.write("</ul>");
function endsWith(string, string1) {
    return string.endsWith(string1);

}

document.write("<h1>Ejercicio 6</h1>");
document.write("<ul>");
document.write(`<li>Entrada: abcd. Salida: ${sucesor('abcd')}</li>`);
document.write(`<li>Entrada: <>. Salida: ${sucesor('<>')}</li>`);
document.write(`<li>Entrada: 3456. Salida: ${sucesor('3456')}</li>`);
document.write(`<li>Entrada: ZZZ9999. Salida: ${sucesor('ZZZ9999')}</li>`);
document.write(`<li>Entrad: THX1138. Salida: ${sucesor('THX1138')}</li>`);
document.write("</ul>");
function sucesor(string) {
    let array = [...string];
    let longitudArray = array.length - 1;
    let contador = 0;
    for (let i = longitudArray; i >= 0; i--) {
        if (array[i] === 'z') {
            array[i] = 'a';
            contador++;
            if (array[i - 1] != 'Z' && array[i - 1] != 'z' && array[i - 1] != '9' && array[i - 1]) {
                array[i - 1] = String.fromCharCode(array[i - 1].charCodeAt(0) + 1);
            }
        } else if (array[i] === 'Z') {
            contador++;
            array[i] = 'A';
            if (array[i - 1] != 'Z' && array[i - 1] != 'z' && array[i - 1] != '9' && array[i - 1]) {
                array[i - 1] = String.fromCharCode(array[i - 1].charCodeAt(0) + 1);
            }

        } else if (array[i] === '9') {
            contador++;
            array[i] = '0';
            if (array[i - 1] != 'Z' && array[i - 1] != 'z' && array[i - 1] != '9' && array[i - 1]) {
                array[i - 1] = String.fromCharCode(array[i - 1].charCodeAt(0) + 1);
            }
        } else {
            if (contador == 0) {
                array[longitudArray] = String.fromCharCode(array[longitudArray].charCodeAt(0) + 1);
                contador++;
            }
        }
    }
    return array.join("");
}


document.write("<h1>Ejercicio 7</h1>");
document.write("<ul>");
let GUIS=new Array();
document.write(`<li>Entrada: vacio .Salida: ${generarGUI()}</li>`);
document.write(`<li>Entrada: . Salida: ${generarGUI(64)}</li>`);
document.write(`<li>Entrada: 20. Salida: ${generarGUI(20)}</li>`);
document.write(`<li>entrada: 38. Salida: ${generarGUI(38)}</li>`);
document.write("</ul>");
function generarGUI(numero){
    let opciones =[..."abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPRSTUVWXYZ0123456789"];
    let GUI="";
    if(numero==undefined){
        numero=32;
    }
    do{
    for (let i = 0; i < numero; i++) {
        aleatorio=parseInt(Math.random() * (62 - 0) + 0);
        GUI=GUI+ opciones[aleatorio];
        
    }
    GUIS.push(GUI);
}while(!GUIS.includes(GUI));
    return GUI;
}


document.write("<h1>Ejercicio 8</h1>");
document.write("<ul>");
document.write(`<li>Entrada: PHP ~!@#$%^&*()+\`-={}[]|\\:\";\'/?><., MySQL .Salida: ${caracteresNoAlfanumericos("PHP ~!@#$%^&*()+`-={}[]|\\:\";\'/?><., MySQL")}</li>`);
function caracteresNoAlfanumericos(cadena){
    let opciones =[..."abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789"];
    opciones.push(" ");
    let devolver="";
    for (let i = 0; i < cadena.length; i++) {
        if (opciones.includes(cadena.charAt(i))) {
            devolver= devolver+cadena.charAt(i);

        }
        
    }
    return devolver;
}