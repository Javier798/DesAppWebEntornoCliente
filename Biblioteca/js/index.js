tipo = {
    NOVELA: "novela",
    TEATRO: "teatro",
    POESIA: "poesia",
    ENSAYO: "ensayo",
};
estado = {
    PRESTADO: "prestado",
    RETRASADO: "retrasado",
    BIBLIOTECA: "biblioteca",
    REPARACION: "reparacion"
}
let copias = new Array();
autor1 = new Autor("Pepe", "Española", 1900);
libro1 = new Libro("Quijote", tipo.NOVELA, "Libros SA", 2000, autor1);
libro2 = new Libro("El Lorito pepe", tipo.TEATRO, "Libros SL", 2010, autor1);
copia1 = new copia(1, estado.BIBLIOTECA, libro1);
copia2 = new copia(2, estado.BIBLIOTECA, libro1);
copia3 = new copia(3, estado.BIBLIOTECA, libro2);
copia4 = new copia(4, estado.BIBLIOTECA, libro2);
copias.push(copia1);
copias.push(copia2);
copias.push(copia3);
copias.push(copia4);
let lectores = new Array();
lecto1 = new Lector("SO001", "felipe", 648986532, "su casa", new Array());
lecto2 = new Lector("SO002", "Carla", 648978123, "Casa de carla", new Array());
lectores.push(lecto1);
lectores.push(lecto2);
let lectorActual;
window.onload = () => {
    pintarCopias();
    var lectoresHTML = document.getElementById("verLectores");
    for (let i = 0; i < lectores.length; i++) {
        lectoresHTML.innerHTML += "<div class='clientes border'><p>Numero de socio:" + lectores[i].numSocio + "</p><p>Nombre:" +
            lectores[i].nombre + "</p><p>Numero:" + lectores[i].telefono + "</p><p>Direccion:" + lectores[i].direccion +
            "</p><input type='hidden' value ='" + i + "'/><button onclick='cambiarLecotr(this)'>Cambiar Lecotor</button></div>";
    }
    cambiarLecotr(0);
}

function pintarCopias() {
    var biblioteca = document.getElementById("libros");
    for (let i = 0; i < copias.length; i++) {
        biblioteca.innerHTML += "<div class='libro border'><p>Titulo:" + copias[i].libro.titulo + "</p><p>Tipo:" +
            copias[i].libro.tipo + "</p><p>Editorial:" + copias[i].libro.editorial + "</p><p>Año:" + copias[i].libro.anyo +
            "</p><p>Autor:" + copias[i].libro.autor.nombre + "</p><p>Estado de la copia:" + copias[i].estado + "</p><input type='hidden' value ='" + i + "'/><button onclick='alquilar(this)'>Alquilar</button></div>";
    }
}

function pintarPrestamos() {
    var prestamos = document.getElementById("mostrarPrestamos");
    borrarHijos(prestamos);
    for (let i = 0; i < lectorActual.prestamos.length; i++) {
        var day = lectorActual.prestamos[i]._fin.getDate()
        var month = lectorActual.prestamos[i]._fin.getMonth() + 1
        var year = lectorActual.prestamos[i]._fin.getFullYear()
        var fecha;
        if (month < 10) {
            fecha = `${day}-0${month}-${year}`;
        } else {
            fecha = `${day}-${month}-${year}`;
        }
        prestamos.innerHTML += "<div class='libro border'><p>Titulo:" + lectorActual.prestamos[i].libro.titulo + "</p><p>Tipo:" +
            lectorActual.prestamos[i].libro.tipo + "</p><p>Editorial:" + lectorActual.prestamos[i].libro.editorial + "</p><p>Año:" + lectorActual.prestamos[i].libro.anyo +
            "</p><p>Autor:" + lectorActual.prestamos[i].libro.autor.nombre + "</p><p>Estado de la copia:" + lectorActual.prestamos[i].estado +
            "<h3>El prestamo es hasta el dia: " + fecha + "</h3>" + "</p><input type='hidden' value ='" + i + "'/><button onclick='devolver(this)'>Devolver</button></div>";
    }
}
function borrarHijos(padre) {
    if (padre.hasChildNodes()) {
        while (padre.childNodes.length >= 1) {
            padre.removeChild(padre.firstChild);
        }
    }
}
function pintarMulta() {
    var multas = document.getElementById("verMultas");
    borrarHijos(multas);
    if (lectorActual.multa != undefined) {
        var dayF = lectorActual.multa.fFin.getDate()
        var monthF = lectorActual.multa.fFin.getMonth() + 1
        var yearF = lectorActual.multa.fFin.getFullYear()
        var fechaF;
        if (monthF < 10) {
            fechaF = `${dayF}-0${monthF}-${yearF}`;
        } else {
            fechaF = `${dayF}-${monthF}-${yearF}`;
        }
        var dayI = lectorActual.multa.fInicio.getDate()
        var monthI = lectorActual.multa.fInicio.getMonth() + 1
        var yearI = lectorActual.multa.fInicio.getFullYear()
        var fechaI;
        if (monthI < 10) {
            fechaI = `${dayI}-0${monthI}-${yearI}`;
        } else {
            fechaI = `${dayI}-${monthI}-${yearI}`;
        }
        multas.innerHTML += "<div class='libro border'><p>Fecha inicio:" + fechaI + "</p><p>Fecha fin:" +
            fechaF + "<button onclick='quitarMulta(this)'>Quitar multa</button></div>";
    }


}
function alquilar(id) {
    if (lectorActual.multa == undefined) {
        var padre = id.parentElement.parentElement;
        id = id.previousElementSibling.value;
        borrarHijos(padre);
        var copiaUsada = copias[id];
        copiaUsada.estado = estado.PRESTADO;
        lectorActual.prestar(copiaUsada, Date.now());

        remove(copias, copiaUsada);
        pintarCopias();
        pintarPrestamos();
    }
}

function devolver(id) {
    id = id.previousElementSibling.value;
    lectorActual.prestamos[id].estado = estado.BIBLIOTECA;
    copias.push(lectorActual.prestamos[id]);
    lectorActual.devolver(lectorActual.prestamos[id].id, Date.now());
    borrarHijos(document.getElementById("libros"));
    pintarCopias();
    pintarPrestamos();

}

function cambiarLecotr(id) {

    if (typeof (id) != "number") {
        id = id.previousElementSibling.value;
    }

    lectorActual = lectores[id];
    document.getElementById("lectorActual").innerText = lectores[id].numSocio;
    pintarPrestamos();
    pintarMulta();
}

function remove(arr, item) {
    for (var i = arr.length; i--;) {
        if (arr[i] === item) {
            arr.splice(i, 1);
        }
    }
}

function multar() {
    lectorActual.multar(Date.now(), Date.now() + 864000000);
    pintarMulta();
}
function quitarMulta() {
    lectorActual.multa=undefined;
    pintarMulta();
}