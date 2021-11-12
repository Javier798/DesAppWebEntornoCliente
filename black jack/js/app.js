var cartaBack = new carta("BACK", 1, "AS");
var jugador;
var perdido = false;
var plantarse = false;
var banca;
var barajaDeCartas;
var partida = false;
var balance;
var nombre;
var mesa = 0;
var apuesta;
var muestraCartaTrasera;
function puntosBanca() {
if(muestraCartaTrasera){
    document.getElementById("cartasBanca").removeChild(document.getElementById("cartasBanca").lastElementChild);
}
    while (banca.cuentaPuntos() < 17) {
        
        pedirCarta(banca);
    }
    if (banca.cuentaPuntos() > jugador.cuentaPuntos() && banca.cuentaPuntos() <= 21) {
        document.getElementById("resultado").innerHTML = "<p>Has perdido</p>";
    } else {
        document.getElementById("resultado").innerHTML = "<p>Has ganado</p>";
    }
}
function pedirCarta(player) {
    if (!partida) {
        alert("Inicie la partida para empezar");
        return;
    }
    if (player == undefined) {
        player = jugador;
    }

    player.agnadeCarta(barajaDeCartas.darCarta());
    var puntos = player.cuentaPuntos();
    for (let i = 0; i < player.cartas.length; i++) {
        mostrarCartas(player);
    }
    if (puntos > 21) {
        perdido = true;
        if (player.nombre == "banca") {
            document.getElementById("resultado").innerHTML = "<p>Has ganado</p>";
            document.getElementById("pedirCarta").disabled = true;
            document.getElementById("plantarse").disabled = true;
            partida = false;
        } else {
            document.getElementById("resultado").innerHTML = "<p>Has perdido</p>";
            document.getElementById("pedirCarta").disabled = true;
            document.getElementById("plantarse").disabled = true;
            partida = false;
        }
    }
}
function mePlanto() {
    if (!partida) {
        alert("Inicie la partida para empezar");
        return;
    }
    document.getElementById("pedirCarta").disabled = true;
    document.getElementById("plantarse").disabled = true;
    puntosBanca();
}

function iniciarPartida() {
    
    mesa++;
    jugador = new mano(7, "jugador");
    banca = new mano(7, "banca");
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("cartasBanca").innerHTML = "";
    document.getElementById("cartasJugador").innerHTML = "";
    document.getElementById("pedirCarta").disabled = false;
    document.getElementById("plantarse").disabled = false;
    document.getElementById("jugador").children[0].innerHTML = "Jugador: " + prompt("Introduzca su nombre");
    document.getElementById("apuesta").children[0].innerHTML = "Apuesta: " + prompt("Introduzca su apuesta");
    document.getElementById("mesa").children[0].innerHTML= "Mesa: " +mesa;
    partida = true;
    palos = {
        TREBOLES: "TREBOLES",
        CORAZONES: "CORAZONES",
        PICAS: "PICAS",
        ROMBOS: "ROMBOS"
    }
    barajaDeCartas = new mazo(52, new Array());
    barajaDeCartas.generarBaraja();
    barajaDeCartas.barajear();
    pedirCarta(banca);
    mostrarCartaBack(cartaBack);
    barajaDeCartas.toString();
}
function mostrarCartaBack() {
    document.getElementById("cartasBanca").innerHTML += "<div class='carta " + cartaBack.simbolo + " " + cartaBack.palos + "'></div>";
    muestraCartaTrasera=true;
}

function mostrarCartas(player) {
    if (player.nombre == "jugador") {
        document.getElementById("cartasJugador").innerHTML = "";
        for (let i = 0; i < player.cartas.length; i++) {
            document.getElementById("cartasJugador").innerHTML += "<div class='carta " + player.cartas[i].simbolo + " " + player.cartas[i].palos + "'></div>";
        }
    } else {
        document.getElementById("cartasBanca").innerHTML = "";
        for (let i = 0; i < player.cartas.length; i++) {
            document.getElementById("cartasBanca").innerHTML += "<div class='carta " + player.cartas[i].simbolo + " " + player.cartas[i].palos + "'></div>";
        }
    }

}
