class mazo {
    numCartas;
    baraja;
    alea;
    constructor(numCartas, baraja) {
        this.numCartas = numCartas;
        this.baraja = baraja;
        this.alea = Math.random();
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
    darCarta() {

    }
    barajear() {
        this.baraja = this.baraja.sort(function () {return this.alea -0.5});
    }
    generarBaraja() {
        var palo;
        palos = {
            TREBOLES: "TREBOLES",
            CORAZONES: "CORAZONES",
            PICAS: "PICAS",
            ROMBOS: "ROMBOS"
        }

        for (let i = 1; i <= 4; i++) {
            switch (i) {
                case 1:
                    palo = palos.TREBOLES;
                    break;
                case 2:
                    palo = palos.CORAZONES;
                    break;
                case 3:
                    palo = palos.PICAS;
                    break;
                case 4:
                    palo = palos.ROMBOS;
                    break;

                default:
                    break;
            }
            for (let j = 1; j <= 13; j++) {
                switch (j) {
                    case 1:
                        this.baraja.push(new carta(palo, j, "AS"));
                        break;
                    case 2:
                        this.baraja.push(new carta(palo, j, "DOS"));
                        break;
                    case 3:
                        this.baraja.push(new carta(palo, j, "TRES"));
                        break;
                    case 4:
                        this.baraja.push(new carta(palo, j, "CUATRO"));
                        break;
                    case 5:
                        this.baraja.push(new carta(palo, j, "CINCO"));
                        break;
                    case 6:
                        this.baraja.push(new carta(palo, j, "SEIS"));
                        break;
                    case 7:
                        this.baraja.push(new carta(palo, j, "SIETE"));
                        break;
                    case 8:
                        this.baraja.push(new carta(palo, j, "OCHO"));
                        break;
                    case 9:
                        this.baraja.push(new carta(palo, j, "NUEVE"));
                        break;
                    case 10:
                        this.baraja.push(new carta(palo, j, "DIEZ"));
                        break;
                    case 11:
                        this.baraja.push(new carta(palo, 10, "J"));
                        break;
                    case 12:
                        this.baraja.push(new carta(palo, 10, "Q"));
                        break;
                    case 13:
                        this.baraja.push(new carta(palo, 10, "K"));
                        break;
                    default:
                        break;
                }
            }
        }
    }
    toString() {
        var devovler = "";
        for (let i = 0; i < this.baraja.length; i++) {
            console.log(this.baraja[i].toString() + "\n");

        }
        
    }
}