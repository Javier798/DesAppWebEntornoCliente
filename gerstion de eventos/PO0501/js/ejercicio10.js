window.onload = function () {
    let form = document.getElementsByName("formulario1")[0];
    let inputs = form.querySelectorAll("input");
    inputs[1].focus();
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("change",ValidaCampos);

    }

}
function ValidaCampos(evento) {
    let objeto = evento.currentTarget;
    let boton = document.querySelector("input[type=submit]");
    if (objeto.className.includes("requerido")) {
        if (objeto.value.length == 0) {
            objeto.style.border = "1px solid red";
            boton.disabled =true;
        }else{
            objeto.style.border = "1px solid black";
            boton.disabled =false;
        }
    }
    if (objeto.className.includes("texto")) {
        if (!/^[a-zA-Z]*$/.test(objeto.value)) {
            objeto.style.border = "1px solid red";
            boton.disabled =true;
        }else{
            objeto.style.border = "1px solid black";
            boton.disabled =false;
        }

    }
    if (objeto.className.includes("telefono")) {
        if (!/[0-9]{9,9}/.test(objeto.value)) {
            objeto.style.border = "1px solid red";
            boton.disabled =true;
        }else{
            objeto.style.border = "1px solid black";
            boton.disabled =false;
        }
    }
    if (objeto.className.includes("email")) {
        if (!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(objeto.value)) {
            objeto.style.border = "1px solid red";
            boton.disabled =true;
        }else{
            objeto.style.border = "1px solid black";
        }
    }
    if (objeto.className.includes("dni")) {
        nif(objeto.value);
    }

}
function nif(dni) {
    var numero
    var letr
    var letra
    var expresion_regular_dni

    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if (expresion_regular_dni.test(dni) == true) {
        numero = dni.substr(0, dni.length - 1);
        letr = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra != letr.toUpperCase()) {
            objeto.style.border = "1px solid red";
            boton.disabled =true;
        }else{
            objeto.style.border = "1px solid black";
            boton.disabled =false;
        }
    } else {
        alert('Dni erroneo, formato no válido');
    }
}