class Lector {
    numSocio;
    nombre;
    telefono;
    direccion;
    constructor(numSocio, nombre, telefono,direccion) {
        this.numSocio = numSocio;
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
    }
    // Getter
    get numSocio() {
        return this.numSocio;
    }
    // Method
    get nombre() {
        return this.nombre;
    }
    get telefono() {
        return this.telefono;
    }
    get direccion() {
        return this.direccion;
    }
    toString() {
        var mostrar = "DNI: " + this.DNI + ", Coches:\n";
        for (let i = 0; i < this.coches.length; i++) {
            mostrar += this.coches[i].toString() + "\n";
        }
        return mostrar;
    }
    añadirCoche(coche) {
        this.coches.push(coche);
    }
}