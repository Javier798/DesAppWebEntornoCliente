let concesionario;
window.onload = () => {
    concesionario = new Concesionario(new Array(), new Array());
    concesionario.abrir();

}

function mostarConcesionario() {
    for (let i = 0; i < concesionario.coches.length; i++) {
        console.log(concesionario.coches[i].toString());
    }
}
function nuevoCliente() {
    var cliente = new Cliente(prompt("Introduzca el DNI"), new Array());
    concesionario.nuevoCliente(cliente);
}
function mostrarClientes() {
    for (let i = 0; i < concesionario.clientes.length; i++) {
        console.log(concesionario.clientes[i].toString());
    }
}
function venta() {
    var dni = prompt("Introduzca el DNI");
    var matricula = prompt("Introduzca la matriucula");
    
    for (let i = 0; i < concesionario.clientes.length; i++) {
        if (concesionario.clientes[i].DNI == dni) {

            for (let j = 0; j < concesionario.coches.length; j++) {
                if (concesionario.coches[j].matricula == matricula) {
                    concesionario.clientes[i].añadirCoche(concesionario.coches[j]);
                }
            }

            
        }
    }
    for (let i = 0; i < concesionario.coches.length; i++) {
        if (concesionario.coches[i].matricula == matricula) {
            concesionario.eliminarCoche(concesionario.coches[i]);
        }
    }

}