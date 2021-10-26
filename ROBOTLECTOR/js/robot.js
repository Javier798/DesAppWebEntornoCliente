let claves = [];

document.getElementById("boton").onclick = function () {
    //declaro las variables
    let titulos = document.querySelectorAll("H1, H2, H3, H4, H5, H6");
    let palabrasBloque;
    let contadorPalabrasParrafo = new Map();
    let palaBrasTotales = "";
    let contadorPalabrasBloque = new Map();
    let palabrasParrafo = [];
    let palabrasPagina = "";
    let contadorPalabrasPagina = new Map();
    let palabrasNegritaParrafo = [];
    let palabrasNegritaBloque = [];
    let palabrasNegritaPagina = [];
    let palabrasCursivaParrafo = [];
    let palabrasCursivaBloque = [];
    let palabrasCursivaPagina = [];
    let enlaces = [];
    var bloqueDeParrafos = [];
    var contadorParrafos = 1;
    let enlacesBloque = [];
    let puntos = new Map()
    for (let i = 0; i < titulos.length; i++) {
        var item = titulos[i].nextElementSibling;
        //si el siguiente elemento es un p lo recorro
        if (item.tagName != "P") {
            item = item.nextElementSibling;
        }
        while (item != null && item.tagName == "P") {
            //obtengo las cursvas y las negritas
            palabrasCursivaParrafo = item.querySelectorAll("I");
            palabrasNegritaParrafo = item.querySelectorAll("B");
            palabrasNegritaParrafo = Array.from(palabrasNegritaParrafo);
            palabrasCursivaParrafo = Array.from(palabrasCursivaParrafo);
            //obtengo en texto el contenido de las cursivas y de las negritas
            for (let i = 0; i < palabrasNegritaParrafo.length; i++) {
                palabrasNegritaParrafo[i] = palabrasNegritaParrafo[i].innerHTML.toLowerCase();
            }
            for (let i = 0; i < palabrasCursivaParrafo.length; i++) {
                palabrasCursivaParrafo[i] = palabrasCursivaParrafo[i].innerHTML.toLowerCase();
            }
            if (palabrasCursivaParrafo[0] != undefined) {
                palabrasCursivaParrafo = palabrasCursivaParrafo[0].split(" ");
            }
            if (palabrasNegritaParrafo[0] != undefined) {
                palabrasNegritaParrafo = palabrasNegritaParrafo[0].split(" ");
            }
            //limpio las palabras del parrafo en cursiva y negrita
            palabrasCursivaParrafo = limpiaPalabras(palabrasCursivaParrafo);
            palabrasNegritaParrafo = limpiaPalabras(palabrasNegritaParrafo);
            palabrasCursivaBloque = palabrasCursivaParrafo.concat(palabrasCursivaParrafo);
            palabrasNegritaBloque = palabrasNegritaBloque.concat(palabrasNegritaParrafo);
            palaBrasTotales += " " + item.innerHTML.toLowerCase();
            palabrasPagina += " " + item.innerHTML.toLowerCase();
            //obtengo los enlaces
            enlacesParrafo = Array.from(item.querySelectorAll("a"));
            enlacesParrafoTexto = [];
            //añado las palabras de dentro de los a a los enlaces
            for (let i = 0; i < enlacesParrafo.length; i++) {
                palabrasParrafo = palabrasParrafo.concat(enlacesParrafo[i].innerHTML.toLowerCase().split(" "));
                enlacesParrafoTexto = enlacesParrafo[i].innerHTML.toLowerCase().split(" ");
                enlacesBloque = enlacesBloque.concat(enlacesParrafoTexto);
                for (let j = 0; j < palabrasParrafo.length; j++) {
                    palabrasPagina += " " + palabrasParrafo[i];

                }
            }

            palabrasParrafo = palabrasParrafo.concat(item.innerHTML.toLowerCase().split(" "));
            //limpio las palabras del parrafo
            palabrasParrafo.clean("");
            palabrasParrafo.clean("\n");
            palabrasParrafo = limpiaPalabras(palabrasParrafo);
            bloqueDeParrafos.push(palabrasParrafo);
            palabrasParrafo = [...cuentaPalabras(palabrasParrafo, contadorPalabrasParrafo).entries()].sort((a, b) => b[1] - a[1]);

            var values = Object.values(palabrasParrafo);

            //obtengo las mas repetidas 
            var escribir = "<h4>Parrafo: " + contadorParrafos + "</h4>";
            contadorParrafos++;
            for (let j = 0; j < enlacesParrafo.length; j++) {
                var arrayenlacesparrafo=enlacesParrafo[j].innerHTML.toLocaleLowerCase().split(" ");
                for (let k = 0; k < arrayenlacesparrafo.length; k++) {
                    if(enlacesParrafo[j].href.toLocaleLowerCase().includes(arrayenlacesparrafo[k])){
                        escribir += "<br><span style=' border: 1px solid black'>Enlace: " + enlacesParrafo[j].innerHTML + " Direccion: " + enlacesParrafo[j].href + " y aparece en la direccion";
                        break;
                    }
                    
                }
                if(escribir=="<h4>Parrafo: " + contadorParrafos-1 + "</h4>"){
                    escribir += "<br><span style=' border: 1px solid black'>Enlace: " + enlacesParrafo[j].innerHTML + " Direccion: " + enlacesParrafo[j].href + " y no aparece en la direccion";
                }
            }
            for (let i = 0; i < 3; i++) {
                //muestro si aparecen en negrita
                if (palabrasNegritaParrafo.includes(values[i][0].toLowerCase())) {
                    1
                    escribir += " " + values[i] + ", esta en negrita";
                } else {
                    escribir += "<br><span style=' border: 1px solid black'>" + values[i] + ", no esta en negrita";
                }
                //muestro si aparecen en cursiva
                if (palabrasCursivaParrafo.includes(values[i][0].toLowerCase())) {
                    escribir += ", esta en cursiva";
                } else {
                    escribir += ", no esta en cursiva";
                }
                //muestro si aparecen en enlaces y el numero de veces

                if (enlacesParrafoTexto.includes(values[i][0].toLowerCase())) {
                    var contador = 0;
                    for (let j = 0; j < enlacesParrafoTexto.length; j++) {
                        if (values[i][0].toLowerCase() == enlacesParrafoTexto[i]) {
                            contador++;
                        }

                    }
                    escribir += " y esta aparece en enlaces " + contador + " veces</span>";
                } else {
                    escribir += " y no aparece en enlaces</span>";
                }
            }
            //reinicamos las variables
            palabrasNegritaParrafo = [];
            palabrasCursivaParrafo = [];
            palabrasParrafo = [];
            claves = [];
            item.insertAdjacentHTML("beforebegin", escribir);
            contadorPalabrasParrafo = new Map();
            //cogemos el siguiente item
            item = item.nextElementSibling;
        }
        //añado las palabras en cursiva y negrita que va a haber en la pagina
        palabrasCursivaPagina = palabrasCursivaPagina.concat(palabrasCursivaBloque);
        palabrasNegritaPagina = palabrasNegritaPagina.concat(palabrasNegritaBloque);
        //divido las palabras por espacios
        palabrasBloque = palaBrasTotales.split(" ");
        //limpio las palabras de los caracteres que no me sirvan
        palabrasBloque.clean("");
        palabrasBloque.clean("\n");
        palabrasBloque = limpiaPalabras(palabrasBloque);
        //ordeno el mapa
        palabrasBloque = [...cuentaPalabras(palabrasBloque, contadorPalabrasBloque).entries()].sort((a, b) => b[1] - a[1])

        var escribirBloque = "";
        var vecesRepetido = 0;
        //cosnigo el numero de veces que se repite el titulo en el parrafo
        for (let k = 0; k < palabrasBloque.length; k++) {
            if (palabrasBloque[k][0] == titulos[i].innerHTML.toLocaleLowerCase()) {
                vecesRepetido = palabrasBloque[k][1];
            }


        }
        //muestro si el titulo aparece el el parrafo y las veces que lo hace
        if (claves.includes(titulos[i].innerHTML.toLowerCase())) {
            escribirBloque = "<hr size='8px' color='black' />" + "<span>El titulo del articulo es: " + titulos[i].innerHTML + "<br>La palabra " + titulos[i].innerHTML + " aparece en el bloque y aparece " + vecesRepetido + " veces en el bloque</span>";
        } else {
            escribirBloque = "<hr size='8px' color='black' />" + "<span>El titulo del articulo es: " + titulos[i].innerHTML + "<br>La palabra " + titulos[i].innerHTML + " no aparece en el bloque</span>";
        }
        //obtengo los valores dela array
        var values = Object.values(palabrasBloque);
        for (let i = 0; i < 3; i++) {
            //muestro si la palabra aparece en negrita
            if (palabrasNegritaBloque.includes(values[i][0].toLowerCase())) {
                escribirBloque += "<br><span style=' border: 1px solid black'>" + values[i] + ", esta en negrita";
            } else {
                escribirBloque += "<br><span style=' border: 1px solid black'>" + values[i] + ", no esta en negrita";
            }
            //muestro si la palabra aparece en cursiva
            if (palabrasCursivaBloque.includes(values[i][0].toLowerCase())) {
                escribirBloque += ", esta en cursiva";
            } else {
                escribirBloque += ", no esta en cursiva";
            }
            //muestro si la palabra aparece en enlaces
            if (enlacesBloque.includes(values[i][0].toLowerCase())) {
                var contador = 0;
                for (let j = 0; j < enlacesBloque.length; j++) {
                    if (values[i][0].toLowerCase() == [enlacesBloque[i]]) {
                        contador++;
                    }

                }
                escribirBloque += " y esta aparece en enlaces " + contador + " veces";
            } else {
                escribirBloque += " y no aparece en enlaces";
            }
            var contadorPalabrasEnParrafos = 0;
            //miro si las palabras aparecen en todos los parrafos del bloque
            for (let j = 0; j < bloqueDeParrafos.length; j++) {
                if (bloqueDeParrafos[j].includes(values[i][0].toLowerCase()))
                    contadorPalabrasEnParrafos++;

            }
            //muestro si aparecen en todos los parrafos o no
            if (contadorPalabrasEnParrafos == bloqueDeParrafos.length) {
                escribirBloque += " y esta aparece todos los parrafos</span>";
            } else {
                escribirBloque += " y esta no aparece todos los parrafos</span>";
            }
        }
        //escribo el resultado encima del bloque y reinico las variables 
        contadorPalabrasBloque = new Map();
        titulos[i].insertAdjacentHTML("beforebegin", escribirBloque);
        palaBrasTotales = "";
        palabrasNegritaBloque = [];
        enlacesBloque = [];
        claves = [];
        bloqueDeParrafos = [];
    }
    //limpio las palabras de toda la pagina
    palabrasPagina = palabrasPagina.split(" ");
    palabrasPagina.clean("");
    palabrasPagina.clean("\n");
    palabrasPagina = limpiaPalabras(palabrasPagina);
    //ordeno las palabras de toda la pagina
    palabrasPagina = [...cuentaPalabras(palabrasPagina, contadorPalabrasPagina).entries()].sort((a, b) => b[1] - a[1])
    puntos = contadorPalabrasPagina;
    var titulosTexto = [];
    //obtengo los titulos del texto
    for (let titulo = 0; titulo < titulos.length; titulo++) {
        titulosTexto = titulosTexto.concat(titulos[titulo].innerHTML.toLocaleLowerCase().split(" "));
    }
    var values = Object.values(palabrasPagina);
    //muestro las palabras las palabras mas repetidas 
    var escribirPagina = "<h4>Palabras repetidas</h4>";
    for (let i = 0; i < 3; i++) {
        //muestro si la pagina esta en negrita
        if (palabrasNegritaPagina.includes(values[i][0].toLowerCase())) {
            escribirPagina += "<span style=' border: 1px solid black'>" + values[i] + "  esta en negrita";
        } else {
            escribirPagina += "<span style=' border: 1px solid black'>" + values[i] + "  no esta en negrita";
        }
        //muestro si la pagina esta en cursiva
        if (palabrasCursivaPagina.includes(values[i][0].toLowerCase())) {
            escribirPagina += ", esta en cursiva";
        } else {
            escribirPagina += ", no esta en cursiva";
        }
        //muestro si la pagina aparecen en titulos
        if (titulosTexto.includes(values[i][0].toLowerCase())) {
            var contador = 0;
            for (let j = 0; j < titulosTexto.length; j++) {
                if (values[i][0].toLowerCase() == titulosTexto[j]) {
                    contador++;
                }
            }
            escribirPagina += " y esta aparece en un titulo " + contador + " veces</span><br>";
        } else {
            escribirPagina += " y esta no aparece en un titulo</span><br>";
        }

    }
    //
    enlaces = document.querySelectorAll("a");
    enlaces = Array.from(enlaces);
    var href = [];
    //obtengo los enlaces y el contenido de los href
    var escribirEnlaces = "<h4>Enlaces</h4>";
    for (let i = 0; i < enlaces.length; i++) {
        href[i] = enlaces[i].href;
        enlaces[i] = enlaces[i].innerHTML;
    }
    for (let i = 0; i < href.length; i++) {
        escribirEnlaces += "<span>" + href[i] + "</span><br>";
    }
    //compruebo si las palabras estan en enlaces
    var palabrasEnlace = "<h4>Relacion de enlaces y palabras repetidas</h4>";
    for (let i = 0; i < 3; i++) {
        var bool = true;
        for (let j = 0; j < href.length; j++) {
            if (href[j].toLocaleLowerCase().includes(values[i][0].toLowerCase())) {
                palabrasEnlace += "<span>La plabra " + values[i][0].toUpperCase() + " aparece en enlaces</span><br>";
                bool = false;
                continue;
            }
        }
        if (bool) {
            palabrasEnlace += "<span>La plabra " + values[i][0].toUpperCase() + " no aparece en enlaces</span><br>";
        }

    }
    //dependiendo de como sea la palabra se le da un valor u otro
    for (let i = 0; i < claves.length; i++) {
        if (palabrasNegritaPagina.includes(claves[i])) {
            puntos.set(claves[i], puntos.get(claves[i]) + 2);
        }
        if (palabrasCursivaPagina.includes(claves[i])) {
            puntos.set(claves[i], puntos.get(claves[i]) + 1);
        }
        if (enlaces.includes(claves[i])) {
            puntos.set(claves[i], puntos.get(claves[i]) + 3);
        }
    }
    puntos = new Map([...puntos].sort((x, y) => x[1] - y[1]));
    value = Object.values(puntos);
    claves = puntos.keys();
    claves = Array.from(claves).reverse();
    //obtengo las palabras importantes de las pagina
    var importantes = "<h4>El texto habla sobre:</h4>";
    for (let i = 0; i < 3; i++) {
        algo = puntos.get(claves[i]);
        importantes += "<span>" + claves[i] + "</span><br>";
    }
    //inserto el texto total de la pagina
    document.body.insertAdjacentHTML("afterend", importantes);
    document.body.insertAdjacentHTML("afterend", palabrasEnlace);
    document.body.insertAdjacentHTML("afterend", escribirEnlaces);
    document.body.insertAdjacentHTML("afterend", escribirPagina);
    //reinicia las variables
    contadorPalabrasPagina = new Map();
    claves = [];
}

function cuentaPalabras(arrayConPalabras, contadorPalabras) {
    console.log("asd");
    for (let i = 0; i < arrayConPalabras.length; i++) {
        console.log(arrayConPalabras[i]);
        if (!claves.includes(arrayConPalabras[i]) && !articulos.includes(arrayConPalabras[i])) {

            contadorPalabras.set(arrayConPalabras[i], 1);
            claves.push(arrayConPalabras[i]);
        } else if (claves.includes(arrayConPalabras[i])) {
            contadorPalabras.set(arrayConPalabras[i], contadorPalabras.get(arrayConPalabras[i]) + 1);
        }
    }
    return contadorPalabras;
}
function limpiaPalabras(array) {
    for (let i = 0; i < array.length; i++) {

        if (array[i].substr(-1, 2) == "\n") {
            array[i] = array[i].substr(0, array[i].length - 1);
        }
        algo = array[i].substr(-4, 4);
        if (array[i].substr(-4, 4) == "</b>") {
            array[i] = array[i].substr(0, array[i].length - 4);
        }
        if (array[i].substr(-4, 4) == "</i>") {
            array[i] = array[i].substr(0, array[i].length - 4);
        }
        if (array[i].substr(-1, 1) == "," || array[i].substr(-1, 1) == ".") {
            array[i] = array[i].substr(0, array[i].length - 1);
        }
        if (array[i].substr(-1, 1) == ")") {
            array[i] = array[i].substr(0, array[i].length - 1);
        }
        if (array[i].substr(0, 1) == "(") {
            array[i] = array[i].substr(1, array[i].length);
        }
        if (array[i].substr(0, 3) == "<b>") {
            array[i] = array[i].substr(3, array[i].length);
        } if (array[i].substr(0, 3) == "<i>") {
            array[i] = array[i].substr(3, array[i].length);
        }
    }
    return array;
}
Array.prototype.clean = function (deleteValue) {
    for (var i = 0, j = this.length; i < j; i++) {
        if (this[i] == deleteValue) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};
let articulos = [
    "a",
    "diosa",
    "como",
    "más",
    "muchos",
    "I",
    "vez",
    "una",
    "fue",
    "Su",
    "En",
    "al",
    "el",
    "e",
    "ha",
    "del",
    "la",
    "muy",
    "los",
    "lo",
    "las",
    "mi",
    "su",
    "sus",
    "ante",
    "bajo",
    "cabe",
    "con",
    "contra",
    "era",
    "será",
    "son",
    "fueron",
    "hace",
    "de",
    "desde",
    "en",
    "es",
    "entre",
    "durante",
    "mediante",
    "hacia",
    "hasta",
    "para",
    "por",
    "segun",
    "sin",
    "so",
    "sobre",
    "tras",
    "versus",
    "via",
    "suyo",
    "mios",
    "mias",
    "tu",
    "tus",
    "tuyos",
    "tuyas",
    "suya",
    "suyos",
    "suyas",
    "nuestras",
    "nuestros",
    "vuestras",
    "vuestros",
    "aquí",
    "ahí",
    "allá",
    "encima",
    "debajo",
    "cerca",
    "lejos",
    "delante",
    "arriba",
    "abajo",
    "y",
    "que",
    "o",
    "",
    "se",
    "un",
]