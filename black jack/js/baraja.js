class baraja {
    baraja;
    constructor() {

    }
    generarBaraja() {
        var contador=1;
        palos={
            TREBOLES:"TREBOLES",
            CORAZONES:"CORAZONES",
            PICAS:"PICAS",
            ROMBOS:"ROMBOS"
        }
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 13; j++) {
                switch (palos[i]) {
                    case "TREBOLES":
                        this.baraja.push(new carta(contador,palos.TREBOLES));
                        break;
                    case "CORAZONES":
                        this.baraja.push(new carta(contador,palos.CORAZONES));
                        break;
                    case "ROMBOS":
                        this.baraja.push(new carta(contador,palos.ROMBOS));
                        break;
                    case "PICAS":
                        this.baraja.push(new carta(contador,palos.PICAS));
                        break;
                    default:
                        break;
                }
            contador++;
            }

        }
    }
}