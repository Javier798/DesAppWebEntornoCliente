var imagenes = ["https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800",
    "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
    "https://st.depositphotos.com/1020341/4233/i/600/depositphotos_42333899-stock-photo-portrait-of-huge-beautiful-male.jpg"];
function imagenAzar() {

    let imagen = document.getElementById("imagen");
    imagen.setAttribute("src", imagenes[parseInt(Math.random() * (3))])
}