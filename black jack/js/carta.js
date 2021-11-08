class carta{
    valor;
    palos={
        TREBOLES:"TREBOLES",
        CORAZONES:"CORAZONES",
        PICAS:"PICAS",
        ROMBOS:"ROMBOS"
    }
    constructor(palo,valor){
        this.valor=valor;
        this.palo =palo;
    }
    get valor() {
        return this.valor;
    }
    set valor(value) {
        this.valor = value;
    }
    get palo() {
        return this.palo;
    }
    set palo(value) {
        this.palo = value;
    }
}