class carta{
    valor;
    palos={
        TREBOLES:"TREBOLES",
        CORAZONES:"CORAZONES",
        PICAS:"PICAS",
        ROMBOS:"DIMANTES"
    }
    simbolo;
    constructor(palo,valor,simbolo){
        this.valor=valor;
        this.palos =palo;
        this.simbolo=simbolo;
    }
    get valor() {
        return this.valor;
    }
    set valor(value) {
        this.valor = value;
    }
    get palo() {
        return this.palos;
    }
    set palo(value) {
        this.palo = value;
    }
    get simbolo(){
        return this.simbolo;
    }
    set simbolo(simbolo){
        this.simbolo=simbolo;
    }
    toString(){
        return this.simbolo +" de "+this.palo+". Valor de la carta: "+this.valor;
    }
}