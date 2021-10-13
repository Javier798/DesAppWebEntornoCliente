var alarmas = new Array();
var colores= new Array("red","green","yellow","brown","white")
var intervaloPrincipal =setInterval(

    function () {
        var hora = new Date();
        var p = document.getElementById("hora");
        p.innerHTML = hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds();
        
        if (alarmas.includes(p.innerHTML)) {
            var contador=0;
            let sonidoAlarma = document.createElement("audio");
            sonidoAlarma.setAttribute("src","alarma.mp3");
            var color =setInterval(function(){
                sonidoAlarma.play();
                document.body.style.backgroundColor = colores[parseInt(Math.random() * 4)];
                contador++;
                if(contador==40){
                    clearInterval(color);
                    sonidoAlarma.pause();
                    contador=0;
                    document.body.style.backgroundColor = "white";
                }
            },250);
            
        }
    }
    , 1000);

function añadirAlarma() {
    let hora = document.getElementById("horas");
    let minutos = document.getElementById("minutos");
    let segundos = document.getElementById("segundos");
    alarmas.push(hora.value + ":" + minutos.value + ":" + segundos.value);
    hora.value="";
    minutos.value="";
    segundos.value="";
}
