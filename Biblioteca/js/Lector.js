class Lector {
    numSocio;
    nombre;
    telefono;
    direccion;
    prestamos;
    multa;
    constructor(numSocio, nombre, telefono, direccion, prestamos) {
        this.numSocio = numSocio;
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
        this.prestamos = prestamos;
        
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
    set numSocio(numSocio) {
        this.numSocio = numSocio;
    }
    set nombre(nombre) {
        this.nombre = nombre;
    }
    set telefono(telefono) {
        this.telefono = telefono;
    }
    set direccion(direccion) {
        this.direccion = direccion;
    }
    devolver(id, fechaActual) {
        if (this.hayPrestamos()) {
            for (let i = 0; i < this.prestamos.length; i++) {
                if (this.prestamos[i].id == id && this.prestamos[i]._fin.getTime() >= fechaActual) {
                    this.remove(this.prestamos,this.prestamos[i]);
                } else {
                    this.remove(this.prestamos,this.prestamos[i]);
                    var tiempoTranscurrido = Date.now();
                    var hoy = new Date(tempoTranscurrido);
                    var fin = tiempoTranscurrido + 1728000000;
                    var fFin = new Date(fin);
                    multar(hoy, fFin);
                }
            }
        }
    }
    prestar(copia, fechaActual) {
        if (this.multa == undefined) {
            if(this.prestamos.length<=3){
                copia.inicio=new Date(fechaActual);
                copia.fin= new Date(fechaActual+432000000);
                this.prestamos.push(copia);
            }
        }
    }
    multar(fInicio, fFin) {
        this.multa = new Multa(new Date(fInicio), new Date(fFin));
    }
    hayPrestamos() {
        if (this.prestamos.length > 0) {
            return true;
        } else {
            return false;
        }
    }
    remove(arr, item) {
        for(var i = arr.length; i--;) {
            if(arr[i] === item) {
                arr.splice(i, 1);
            }
        }
    }
}