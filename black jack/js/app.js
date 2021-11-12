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
        balance= balance+(apuesta*2);
            document.getElementById("balance").children[0].innerHTML="Balance: "+balance;
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
    if(player.nombre=="banca"){
        document.getElementById("mesa").children[0].innerHTML ="Mesa: "+puntos;
    }else{
        document.getElementById("jugador").children[0].innerHTML ="Jugador: "+puntos;
    }
    if (puntos > 21) {
        perdido = true;
        if (player.nombre == "banca"&&puntos>21) {
            document.getElementById("resultado").innerHTML = "<p>Has ganado</p>";
            document.getElementById("pedirCarta").disabled = true;
            document.getElementById("plantarse").disabled = true;
            document.getElementById("iniciarPartida").disabled=false;
            partida = false;
            balance= balance+(apuesta*2);
            document.getElementById("balance").children[0].innerHTML="Balance: "+balance;
        } else {
            document.getElementById("resultado").innerHTML = "<p>Has perdido</p>";
            document.getElementById("pedirCarta").disabled = true;
            document.getElementById("plantarse").disabled = true;
            document.getElementById("iniciarPartida").disabled=false;
            partida = false;
        }
    }
}
function mePlanto() {
    document.getElementById("iniciarPartida").disabled=false;
    if (!partida) {
        alert("Inicie la partida para empezar");
        return;
    }
    document.getElementById("pedirCarta").disabled = true;
    document.getElementById("plantarse").disabled = true;
    puntosBanca();
}

function iniciarPartida() {
    document.getElementById("iniciarPartida").disabled=true;
    document.getElementById("jugador").children[0].innerHTML ="Jugador: ";
    mesa++;
    jugador = new mano(7, "jugador");
    banca = new mano(7, "banca");
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("cartasBanca").innerHTML = "";
    document.getElementById("cartasJugador").innerHTML = "";
    document.getElementById("pedirCarta").disabled = false;
    document.getElementById("plantarse").disabled = false;
    apuesta =prompt("Introduzca su apuesta");
    balance= balance-apuesta;
    document.getElementById("balance").children[0].innerHTML="Balance: "+balance;
    document.getElementById("apuesta").children[0].innerHTML = "Apuesta: " + apuesta;
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
window.onload=()=>{
    setTimeout(() => {
        balance=prompt("Intoduzca el balance",100);
        document.getElementById("balance").children[0].innerHTML="Balance: " + balance;
    }, 1000);
    
}