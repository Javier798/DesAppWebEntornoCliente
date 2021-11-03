class Coche {
    matricula;
    marca;
    modelo;
    potenciaCV;
    constructor(matricula, marca, modelo, potenciaCV) {
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.potenciaCV = potenciaCV;
    }
    // Getter
    get matricula() {
        return this.matricula;
    }
    // Method
    get marca() {
        return this.marca;
    }
    get modelo() {
        return this.modelo;
    }
    get potenciaCV() {
        return this.potenciaCV;
    }
    toString(){
        return "Matricula: "+this.matricula+", Marca: "+this.marca+", Modelo: "+this.modelo+", Potencia: "+this.potenciaCV;
    }
}