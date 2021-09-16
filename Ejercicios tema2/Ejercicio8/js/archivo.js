var campos = prompt("Introduce los campos que desee");

for(var i = 0; i < campos;i++){
    
    elementos(prompt("Introduzca 1 para input de tipo texto, 2 para boton, 3 para input de tipo password,4 para select, 5 para radiobuttons, 6 para checkbox"));
    
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
        case "4":
            var opciones = prompt("Indica el numero de opciones que va a tener el select");
            document.write("<select name=\""+ prompt("Introduzca el valor name") +"\">");
            for(var i=0;i<opciones;i++){
                document.write("<option value=\""+ prompt("Introduzca el valor del campo value") +"\">"+ prompt("Introduce el valor de la opcion") + "</option>");
            }
            document.write("</select>");
            break;
        case "5":
            var botones =prompt("Cuantos botones desea pintar");
            var name = prompt("Introduce el valor del atributo name");

            for(var i=0;i<botones;i++){
                document.write("<input type=\"radio\" id=\""+ prompt("Introduce el id del radiobutton") +"\" name=\""+ name +"\" value=\""+ prompt("Introduce el valor del campo value") +"\">");
                document.write("<label for=\""+ prompt("Introduce el valor del campo del label for") +"\">"+prompt("Inroduce el valor del label")+"</label>");
                document.write("<br>");
            }
            break;
        case "6":
            var numChecks = prompt("Introduce el numero de check box a escribir");
            for(var i=0;i<numChecks;i++){
                document.write("<label><input type=\"checkbox\" id=\""+ prompt("introduce el id") +"\" value=\""+ prompt("introduce el valor del atributo value") +"\">"+ prompt("introduce el texto del checkbox") +"</label>")
            }
            break;
    }
    
}