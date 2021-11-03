var el = document.getElementById('holder');
let experienciaHijo;
let experienciaPadre;
let añadirExperienciaObj;
let estudiosHijo;
let estudiosPadre;
let añadirEstudiosObj;
function stop_and_prevent(e) {
  e.stopPropagation();
  e.preventDefault();
}

function load_images(files) {
  var images = document.getElementById("images");
  [].forEach.call(files, function (file) {
    if (file.type.match('image.*')) {
      var reader = new FileReader();
      reader.onload = function () {
        document.getElementById("images").removeChild(document.getElementById("textoImagen"));
        var img = document.createElement('img');
        img.src = this.result;  //=reader.result, or use event.target.result
        images.appendChild(img);
      }
      reader.readAsDataURL(file);
    }
  });
}

function onDrop(e) {
  stop_and_prevent(e);
  load_images(e.dataTransfer.files);
  return false;
}

el.addEventListener('dragenter', stop_and_prevent);
el.addEventListener('dragover', stop_and_prevent);
el.addEventListener('drop', onDrop);

function comprobarEmail(item) {

  var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  //Se muestra un texto a modo de ejemplo, luego va a ser un icono
  if (!emailRegex.test(item.value)) {
    item.nextElementSibling.className = "form-controlerror";
    item.style.borderBottom = "solid red";
  } else {
    item.style.borderBottom = "solid green";
    item.nextElementSibling.className = "form-control";
  }

}
function comprobarTelefono(item) {
  var telefono = /^[0-9]{9}$/;
  //Se muestra un texto a modo de ejemplo, luego va a ser un icono
  if (!telefono.test(item.value)) {
    item.nextElementSibling.className = "form-controlerror";
    item.style.borderBottom = "solid red";
  } else {
    item.style.borderBottom = "solid green";
    item.nextElementSibling.className = "form-control";
  }
}

function añadirExperiencia() {
  experienciaPadre.removeChild(experienciaPadre.lastElementChild);
  experienciaHijoClonado = experienciaHijo.cloneNode(true);
  experienciaPadre.appendChild(experienciaHijoClonado);
  experienciaPadre.appendChild(añadirExperienciaObj);
}

function añadirEstudios() {
  estudiosPadre.removeChild(estudiosPadre.lastElementChild);
  estudiosHijoClonado = estudiosHijo.cloneNode(true);
  estudiosPadre.appendChild(estudiosHijoClonado);
  estudiosPadre.appendChild(añadirEstudiosObj);
}

window.onload = () => {
  experienciaHijo = document.getElementsByClassName("bloqueExperiencia")[0].cloneNode(true);
  añadirExperienciaObj = document.getElementById("añadirExperiencia");
  estudiosHijo = document.getElementsByClassName("bloqueEstudios")[0].cloneNode(true);
  estudiosPadre = document.getElementById("estudios");
  experienciaPadre = document.getElementById("experiencia");
  añadirEstudiosObj = document.getElementById("añadirEstudios");
}

function eliminarEstudios(object) {
  estudiosPadre.removeChild(object.parentElement);
}

function eliminarExperiencia(object) {
  experienciaPadre.removeChild(object.parentElement);
}
function comprobarDireccion(item) {
  var direccion = /^[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  //Se muestra un texto a modo de ejemplo, luego va a ser un icono
  if (!direccion.test(item.value)) {
    item.nextElementSibling.className = "form-controlerror";
    item.style.borderBottom = "solid red";
  } else {
    item.style.borderBottom = "solid green";
    item.nextElementSibling.className = "form-control";
  }
}
function comprobarDireccionFisica(item) {
  var direcion = /^[#.0-9a-zA-Z\s,-]+$/;
  if (!direcion.test(item.value)) {
    item.nextElementSibling.className = "form-controlerror";
    item.style.borderBottom = "solid red";
  } else {
    item.style.borderBottom = "solid green";
    item.nextElementSibling.className = "form-control";
  }
}
function soloTexto(item) {
  var texto = /^[a-zA-Z ]{1,}$/;
  if (!texto.test(item.value)) {
    item.nextElementSibling.className = "form-controlerror";
    item.style.borderBottom = "solid red";
  } else {
    item.style.borderBottom = "solid green";
    item.nextElementSibling.className = "form-control";
  }
}

function soloTextoEspecial(item) {
  var texto = /^[a-zA-Z ]{1,}$/;
  item = item.parentElement;
  if (!texto.test(item.children[0].value)) {
    item.nextElementSibling.className = "form-controlerror";
    item.children[0].style.borderBottom = "solid red";
  } else {
    item.children[0].style.borderBottom = "solid green";
    item.nextElementSibling.className = "form-control";
  }
}



function valorBarras(item) {
  if (item) {
    var w = parseInt(window.getComputedStyle(item, null).getPropertyValue('width'));

    // LA ETIQUETA 
    var etq = item.parentNode.previousElementSibling;
    if (etq) {
      var pxls = w / 100;
      // cambia el valor de la etiqueta (el tooltip) 
      etq.children[0].innerHTML = item.value;
      // cambia la posición de la etiqueta (el tooltip) 
      etq.style.left = ((item.value * pxls) - 15) + 'px';
    }
  }
}

function comprobarValores() {
  inputs = document.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].className.includes("form-controlerror") || inputs[i].value.length == 0) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    } else {
      return true;
    }

  }
}

function noNumeros(event) {
  var regex = new RegExp("^[a-zA-Z ]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  } else {
    return true;
  }
}

function maxTelefono(item){
  if(item.value.length==9){
    event.preventDefault();
    return false;
  }else{
    return true;
  }
}