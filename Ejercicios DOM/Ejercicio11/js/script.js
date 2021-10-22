window.onload = ()=>{
    let h1s = document.getElementsByTagName("h1");
    let mostrar="";
for (let i = 0; i < h1s.length; i++) {
    mostrar+= "H1 numero: "+ i + " " + h1s[i].innerHTML+"<br>";
}
document.getElementById("mostrar").innerHTML=mostrar;
}