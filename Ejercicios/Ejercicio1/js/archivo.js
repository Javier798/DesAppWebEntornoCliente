var cadena = prompt("Escribe una cadena");
var cadenaReverse="";
for(var i=cadena.length;i!=-1;i--){
    cadenaReverse= cadenaReverse + cadena.charAt(i);
}
if(cadena==cadenaReverse){
    alert("Es palindromo");
}else{
    alert("No es palindromo");
}
