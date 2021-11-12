class mano {
    numCartas;
    TOPE = 20;
    cartas;
    nombre;
    constructor(num, nombre){
        this.numCartas = num;
        this.cartas= new Array();
        this.nombre =nombre;
    }
    descartaTodas(){
        this.cartas=[];
    }
    agnadeCarta(carta){
        this.cartas.push(carta);
    }
    cuentaPuntos(){
        var puntos=0;
        var ases=0;
        for (let i = 0; i < this.cartas.length; i++) {
            puntos+=this.cartas[i].valor;
            if(this.cartas[i].simbolo=="AS"){
                ases++;
            }
        }
        for (let i = 0; i < ases; i++) {
            if(puntos+10<=21){
                puntos+=10;
            }
            
        }
        return puntos;
    }
    get numCartas(){
        return this.numCartas;
    }
    get nombre(){
        return this.nombre;
    }
    toString(){
        devovler="";
        for (let i = 0; i < this.cartas.length; i++) {
            devovler+=this.cartas[i].toString()+"\n";
            
        }
        return devovler;
    }
}