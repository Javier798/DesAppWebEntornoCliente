class Libro {
    titulo;
    tipo = {
        NOVELA: "novela",
        TEATRO: "teatro",
        POESIA: "poesia",
        ENSAYO: "ensayo",
    };
    editorial;
    anyo;
    autor;
    constructor(titulo, tipo, editorial, anyo,autor) {
        this.titulo = titulo;
        this.tipo = tipo;
        this.editorial = editorial;
        this.anyo = anyo;
        this.autor=autor;
    }
}