var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
var fecha = new Date();
var noEvent = -1;
let dia = 0;
var alarmas = new Array();
var colores = new Array("red", "green", "yellow", "brown", "white");
pintar(fecha);
//el boton de siguiente mostrara el siguiente mes
function siguiente() {
    var elemento = document.getElementById("tabla");
    document.body.removeChild(elemento);
    var titulo = document.getElementById("titulo");
    document.body.removeChild(titulo);
    fecha.setMonth(fecha.getMonth() + 1);
    pintar(fecha);
}
//el boton de siguiente mostrara el mes anterior
function anterior() {
    var elemento = document.getElementById("tabla");
    document.body.removeChild(elemento);
    var titulo = document.getElementById("titulo");
    document.body.removeChild(titulo);
    fecha.setMonth(fecha.getMonth() - 1);
    pintar(fecha);
}
function pintar(fehca) {
    //obtenemos los dias del mes actual
    var diasMesActual = new Date(fehca.getFullYear(), fehca.getMonth() + 1, 0).getDate();

    var titulo = document.createElement("h3");
    titulo.setAttribute("id", "titulo");
    titulo.appendChild(document.createTextNode(meses[fecha.getMonth()] + " de " + fecha.getFullYear()));
    document.body.appendChild(titulo);
    //empezamos a crear la tabla
    var tabla = document.createElement("table");

    tabla.setAttribute("id", "tabla");
    pintarDias(tabla);
    var contador = 0;
    var contadorId = 1;
    var tr = document.createElement("tr");
    for (let i = 1; i <= diasMesActual; i++) {

        var indice = new Date(fecha.getFullYear(), fecha.getMonth(+1), i).getDay();
//si el contador es igual a 7 añadimos una nueva fila
        if (contador == 7) {
            tabla.appendChild(tr);
            tr = document.createElement("tr");
            contador = 0;

            i--;
        } else {
            if (i == 1) {
                //creamos los dias del mes que no tienen que tener evento ni numero
                for (let j = 0; j < indice - 1; j++) {
                    let td = document.createElement("td");
                    
                    tr.appendChild(td);
                    contador++;
                    noEvent++;
                }
            }
            let td = document.createElement("td");
            td.setAttribute("id", contadorId);
            //añadimos el evento click
            td.addEventListener("click", function (ev) {
                var celda = document.getElementById("alarmas");
                celda.classList.add("mostrar");
                dia = ev.currentTarget.innerHTMLM;
                celda.children[0].innerHTML = "Dia " + ev.currentTarget.innerHTML + " " + meses[fecha.getMonth()];
            }, false);
            td.appendChild(document.createTextNode(i));
            //comprobamos y añadoimos si un dia tiene una alarma
            var ul = document.createElement("ul");
            for (let j = 0; j < alarmas.length; j++) {
                if (new Date(alarmas[j]).getMonth() == fecha.getMonth() && new Date(alarmas[j]).getFullYear() == fecha.getFullYear()&&new Date(alarmas[j]).getDate() == i) {
                    var li = document.createElement("li");
                    li.appendChild(document.createTextNode(`${new Date(alarmas[j]).toDateString()} ${new Date(alarmas[j]).toTimeString().split(" ")[0]}`));
                    ul.appendChild(li);

                }

            }
            td.appendChild(ul);
            tr.appendChild(td);
            contadorId++;
            contador++;
        }


    }

    tabla.appendChild(tr);

    document.body.appendChild(tabla);
}

function pintarDias(tabla) {
    //creamos la primera parte de la tabla
    let lunes = document.createTextNode("Lunes");
    let martes = document.createTextNode("Martes");
    let Miercoles = document.createTextNode("Miercoles");
    let Jueves = document.createTextNode("Jueves");
    let Viernes = document.createTextNode("Viernes");
    let Sabado = document.createTextNode("Sabado");
    let domingo = document.createTextNode("Domingo");
    let thlunes = document.createElement("th");
    let thmartes = document.createElement("th");
    let thMiercoles = document.createElement("th");
    let thJueves = document.createElement("th");
    let thViernes = document.createElement("th");
    let thSabado = document.createElement("th");
    let thdomingo = document.createElement("th");
    let trDias = document.createElement("tr");
    thlunes.appendChild(lunes);
    thmartes.appendChild(martes);
    thMiercoles.appendChild(Miercoles);
    thJueves.appendChild(Jueves);
    thViernes.appendChild(Viernes);
    thSabado.appendChild(Sabado);
    thdomingo.appendChild(domingo);
    trDias.appendChild(thlunes);
    trDias.appendChild(thmartes);
    trDias.appendChild(thMiercoles);
    trDias.appendChild(thJueves);
    trDias.appendChild(thViernes);
    trDias.appendChild(thSabado);
    trDias.appendChild(thdomingo);
    tabla.appendChild(trDias);
}
function guardarAlarma() {
    //guardamos las alarmas
    var celda = document.getElementById("alarmas");
    var horaCompleta = document.getElementById("hora").value;
    var hora = horaCompleta.split(":")[0];
    var minutos = horaCompleta.split(":")[1];
    dia = document.getElementById("alarmas").children[0].innerHTML.split(" ")[1];
    if (dia.length > 2) {
        dia = dia.substr(0, 2);
    }
    //comprobamos que la fecha de la alarma no haya pasado
    var alarma = new Date(fecha.getFullYear(), fecha.getMonth(), dia, hora, minutos, 0);
    if (alarma.getTime() > new Date().getTime()) {
        alarmas.push(alarma.getTime());
        alarmas.sort(function (a, b) { return a - b });

    }
    celda.classList.remove("mostrar");
    var td = document.getElementById(dia);

    var lista = td.children[0];
    if (lista != null) {
        td.removeChild(lista);
    }

//pintamos las alarmas al clickar un dia
    var ul = document.createElement("ul");
    ul.setAttribute("id", "lista");
    for (let i = 0; i < alarmas.length; i++) {
        if (new Date(alarmas[i]).toDateString().split(" ")[2] == dia) {
            var li = document.createElement("li");
            var texto = document.createTextNode(`${new Date(alarmas[i]).toDateString()} ${new Date(alarmas[i]).toTimeString().split(" ")[0]}`);
            li.appendChild(texto);
            ul.appendChild(li);
        }
    }
    td.appendChild(ul);
}
//se cancela la alarma
function cancelarAlarma() {
    var celda = document.getElementById("alarmas");
    celda.classList.remove("mostrar");
}
//Si la hora actual esta en el array sonará la alarma
var intervaloPrincipal = setInterval(function () {

    var hora = new Date();
    hora.setSeconds(00);
    hora.setMilliseconds(00);
    var milisegundos = hora.getTime();
    var setHora = new Date();
    var p = document.getElementById("reloj");
    p.innerHTML = setHora.getHours() + ":" + setHora.getMinutes() + ":" + setHora.getSeconds();
    if (alarmas.includes(milisegundos)) {
        alarmas.shift();
        var contador = 0;
        let sonidoAlarma = document.createElement("audio");
        sonidoAlarma.setAttribute("src", "alarma.mp3");
        var color = setInterval(function () {
            //hacemos sonar y cambiar de color la pantalla
            sonidoAlarma.play();
            document.body.style.backgroundColor = colores[parseInt(Math.random() * 4)];
            contador++;
            if (contador == 40) {
                clearInterval(color);
                sonidoAlarma.pause();
                contador = 0;
                document.body.style.backgroundColor = "white";
                
                alert("Tiene una alarma");
            }
        }, 250);

    }
}
    , 1000);