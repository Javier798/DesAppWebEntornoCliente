class mazo {
    numCartas;
    baraja;
    alea = () => {
        return Math.random() * (baraja.length);
    };
    constructor(numCartas, baraja) {
        this.numCartas = numCartas;
        this.baraja = baraja;
    }
    get numCartas() {
        return this.numCartas;
    }
    set numCartas(value) {
        this.numCartas = value;
    }
    get baraja() {
        return this.baraja;
    }
    set baraja(value) {
        this.baraja = value;
    }
    get alea() {
        return this.alea;
    }
    set alea(value) {
        this.alea = value;
    }
    darCarta(){

    }
    barajear(){
        this.baraja = this.baraja.sort(function() {return Math.random()-this.alea});
    }

}