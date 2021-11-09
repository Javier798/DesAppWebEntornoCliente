class mano {
    numCartas;
    TOPE = 20;
    cartas;
    constructor(num){
        this.numCartas = num;
        this.cartas= new Array();
    }
    constructor(){
        this(0);
    }
    descartaTodas(){
        this.cartas=[];
    }
    agnadeCarta(carta){
        this.cartas.push(carta);
    }
    cuentaPuntos(){
        puntos=0;
        for (let i = 0; i < this.cartas.length; i++) {
            puntos+=this.cartas[i].valor;
        }
        return puntos;
    }
    get numCartas(){
        return this.numCartas;
    }
    toString(){
        devovler="";
        for (let i = 0; i < this.cartas.length; i++) {
            devovler+=this.cartas[i].toString()+"\n";
            
        }
        return devovler;
    }
}