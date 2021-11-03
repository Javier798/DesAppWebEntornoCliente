class Cliente {
    DNI;
    coches;
    constructor(DNI, coches) {
        this.DNI = DNI;
        this.coches = coches;
    }
    // Getter
    get DNI() {
        return this.DNI;
    }
    // Method
    get coches() {
        return this.coches;
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