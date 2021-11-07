class copia {
    _id;
    _estado = {
        PRESTADO: "prestado",
        RETRASADO: "retrasado",
        BIBLIOTECA: "biblioteca",
        REPARACION: "reparacion"
    }
    _inicio;
    _fin;
    _libro;

    constructor(id, estado,libro) {
        this._id = id;
        this._estado = estado;
        this._libro=libro;
    }
    get libro() {
        return this._libro;
    }
    set libro(value) {
        this._libro = value;
    }
    get estado() {
        return this._estado;
    }
    set estado(value) {
        this._estado = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get inicio() {
        return this._inicio;
    }
    set inicio(value) {
        this._inicio = value;
    }

    get fin() {
        return this._fin;
    }
    set fin(value) {
        this._fin = value;
    }
}