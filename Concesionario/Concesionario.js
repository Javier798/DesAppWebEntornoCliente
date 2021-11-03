class Concesionario {
    coches;
    clientes;
    constructor(coches,clientes) {
      this.coches = coches;
      this.clientes = clientes;
    }
    // Getter
    get clientes() {
      return this.clientes;
    }
    
    get coches() {
      return this.coches;
    }

    abrir(){
        this.coches.push(new Coche("2345FRT","fiat","300",100));
        this.coches.push(new Coche("3972ZYY","BMW","100",130));
        this.coches.push(new Coche("6238ETZ","Mercedes","200",140));
    }
    nuevoCliente(cliente){
        this.clientes.push(cliente);
    }
    eliminarCoche(coche){
        this.coches.splice(this.coches.indexOf(coche),1);
    }
  }