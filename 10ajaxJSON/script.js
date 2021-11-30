var indice = 0;
var sentencia = "";
var ordenar = "";
var cmapos = { "emp_no": "", "apellido": "", "dir": "", "fecha_alt": "", "salario": "", "comision": "", "salario": "", "dept_no": "" };
function mostrarDatos() {
    var numFilas = parseInt(document.getElementById("selectFilas").value);
    if (indice == 0) {
        document.getElementsByName("anterior")[0].disabled = true;
    } else {
        document.getElementsByName("anterior")[0].disabled = false;
    }
    if (numFilas == "") {
        document.getElementById("tabla").innerHTML = "";
        return;
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            var numFilas = parseInt(document.getElementById("selectFilas").value);
            if (this.readyState == 4 && this.status == 200) {
                var json = this.responseText;
                resultados = eval(json);
                var tabla = document.createElement('table');
                tabla.setAttribute("border", 1);
                var cabecera = construirCabecera();
                tabla.id = "tablaEmpleados";
                tabla.appendChild(cabecera);
                if (resultados.length == numFilas + 1) {
                    document.getElementsByName("siguiente")[0].disabled = false;
                } else {
                    document.getElementsByName("siguiente")[0].disabled = true;
                }
                for (let i = 0; i < resultados.length - 1; i++) {
                    let fila = construirFila(resultados[i], i);
                    tabla.appendChild(fila);
                }
                document.getElementById("tabla").innerHTML = "";
                document.getElementById("tabla").appendChild(tabla);
            }
        };
        numFilas += 1;
        xmlhttp.open("GET", "getEmpleados.php?q=" + numFilas + "&oculto=" + indice + "&ordenacion=" + ordenar, true);
        xmlhttp.send();
    }
}
function getIDDepartamentos() {
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = this.responseText;
            returneval(json);
        }
    };
    xmlhttp.open("GET", "getIDDepart.php", true);
    xmlhttp.send();

}
function siguiente() {
    var numFilas = document.getElementById("selectFilas").value;
    indice += parseInt(numFilas);
    mostrarDatos();
}

function anterior() {
    var numFilas = document.getElementById("selectFilas").value;
    indice -= parseInt(numFilas);
    mostrarDatos();
}
function ordenacion(item) {
    if (cmapos[item.id] == "" || cmapos[item.id] == "asc") {
        cmapos[item.id] = "desc";
        ordenar = "order by " + item.id + " desc";
        setTimeout(() => {
            item.innerHTML += " desc";
        }, 2000);
        mostrarDatos();
    } else {
        cmapos[item.id] = "asc";
        ordenar = "order by " + item.id + " asc";
        setTimeout(() => {
            item.innerHTML += " desc";
        }, 2000);
        mostrarDatos();
    }
}
function construirCabecera() {
    var cabecera = document.createElement('tr');

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Núm. Empleado");
    titulo.appendChild(texto);
    titulo.id = "emp_no";
    titulo.addEventListener("click", () => {
        ordenacion(document.getElementById("emp_no"));
    });
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Apellido");
    titulo.id = "apellido";
    titulo.addEventListener("click", () => {
        ordenacion(document.getElementById("apellido"));
    });
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Oficio");
    titulo.id = "oficio";
    titulo.addEventListener("click", () => {
        ordenacion(document.getElementById("oficio"));
    });
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Director");
    titulo.id = "dir";
    titulo.addEventListener("click", () => {
        ordenacion(document.getElementById("dir"));
    });
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Fecha Alta");
    titulo.id = "fecha_alt";
    titulo.addEventListener("click", () => {
        ordenacion(document.getElementById("fecha_alt"));
    });
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Salario");
    titulo.id = "salario";
    titulo.addEventListener("click", () => {
        ordenacion(document.getElementById("salario"));
    });
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Comisión");
    titulo.id = "comision";
    titulo.addEventListener("click", () => {
        ordenacion(document.getElementById("comision"));
    });
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Departamento");
    titulo.id = "dept_no";
    titulo.addEventListener("click", () => {
        ordenacion(document.getElementById("dept_no"));
    });
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    return cabecera;
}

function construirFila(datos, n) {
    linea = document.createElement('tr');

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "emp_no";
    campo.type = "number";
    campo.value = datos.emp_no;
    campo.setAttribute("readonly", true);
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "apellido";
    campo.type = "text";
    campo.value = datos.apellido;
    campo.onblur = function () { actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "oficio";
    campo.type = "text";
    campo.value = datos.oficio;
    campo.onblur = function () { actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "dir";
    campo.type = "number";
    campo.value = datos.dir;
    campo.onblur = function () { actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "fecha_alt";
    campo.type = "text";
    campo.value = datos.fecha_alt;
    campo.onblur = function () { actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "salario";
    campo.type = "number";
    campo.value = datos.salario;
    campo.onblur = function () { actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "comision";
    campo.type = "number";
    campo.value = datos.comision;
    campo.onblur = function () { actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "dept_no";
    campo.type = "number";
    campo.value = datos.dept_no;
    campo.onblur = function () { actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    return linea;
}