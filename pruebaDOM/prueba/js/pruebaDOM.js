


var now = new Date();
var mesActual = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate()
var diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
for (let i = 1; i < mesActual; i++) {
    var td = document.createElement("td");
    var indice = new Date(now.getFullYear(), now.getMonth(+1), now.getDate()).getDay();
    console.log(diasSemana[indice]);
    
}