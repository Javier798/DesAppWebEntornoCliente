window.onload=function () {
    let form = document.getElementsByName("formulario1")[0];
    let inputs = form.querySelectorAll("input");
    inputs[1].focus();
    
}
function ValidaCampos(objeto) {
    let inputs = objeto.querySelectorAll("input");

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].className.includes("requerido")) {
            if (inputs[i].value.length == 0) {
                alert("El campo " + inputs[i].name + " no puede estar vacio");
            }
        }
        if (inputs[i].className.includes("texto")) {
            if (!/^[a-zA-Z]*$/.test(inputs[i].value)) {
                alert("El campo " + inputs[i].name + " no puede contener otra cosa que no sean letras");
            }

        }
        if (inputs[i].className.includes("telefono")) {
            if(!/[0-9]{9,9}/.test(inputs[i].value)) {
                alert("El campo " + inputs[i].name + " tiene que ser un numero de telefono");
            }
        }
        if (inputs[i].className.includes("email")) {
            if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(inputs[i].value)) {
                alert("El campo " + inputs[i].name + " tiene que ser un email");
            }
        }
        if (inputs[i].className.includes("dni")) {
            nif(inputs[i].value);
        }
    }
}
function nif(dni) {
    var numero
    var letr
    var letra
    var expresion_regular_dni
   
    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
   
    if(expresion_regular_dni.test (dni) == true){
       numero = dni.substr(0,dni.length-1);
       letr = dni.substr(dni.length-1,1);
       numero = numero % 23;
       letra='TRWAGMYFPDXBNJZSQVHLCKET';
       letra=letra.substring(numero,numero+1);
      if (letra!=letr.toUpperCase()) {
         alert('Dni erroneo, la letra del NIF no se corresponde');
       }
    }else{
       alert('Dni erroneo, formato no válido');
     }
  }