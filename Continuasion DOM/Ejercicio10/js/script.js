window.onresize = ()=>{
    let alto = document.getElementById("alto");
    let ancho = document.getElementById("ancho");
    ancho.value= window.innerWidth;
    alto.value= window.innerHeight;
}