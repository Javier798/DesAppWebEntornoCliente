var campos = prompt("Introduce los campos que desee");

for(var i = 0; i < campos;i++){
    
    elementos(prompt("Introduzca 1 para input de tipo texto, 2 para boton, 3 para input de tipo password"));
    
}


function elementos(numero){
    switch(numero){
        case "1":
            document.write("<input name=\""+ prompt("Introduzca el valor name") + "\" type=\""+ "password\" placeholder=\""+ prompt("introduzca el valor por defecto")+"\""+">" + "</input>");
            document.write("<br>");
            break;
        case "2":
            document.write("<button>" + prompt("introduzca el texto del boton") + "</button>");
            document.write("<br>");
            break;
        case "3":
            document.write("<input name=\""+ prompt("Introduzca el valor name") + "\" type=\""+ "text\" placeholder=\""+ prompt("introduzca el valor por defecto")+"\""+">" + "</input>");
            document.write("<br>");
            break;

    }
    
}