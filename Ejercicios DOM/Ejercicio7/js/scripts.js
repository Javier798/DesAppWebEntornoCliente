function volumenEsfera() {
    var radio = document.getElementById("radio").value;
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = 4/3* Math.PI* Math.pow(radio,3);
}