document.write("<h1>Ejercicio 1</h1>");
document.write(`<ul>`);
document.write(`<li>Entrada: "13 de octubre de 2014 11:13:00". Salida: ${fechaValida("13 de octubre de 2014 11:13:00")}</li><br>`);
document.write(`<li>Entrada: new Date(86400000). Salida: ${fechaValida(new Date(86400000))}</li><br>`);
document.write(`<li>Entrada: new Date(99,5,24,11,33,30,0). Salida: ${fechaValida(new Date(99, 5, 24, 11, 33, 30, 0))}</li><br>`);
document.write(`<li>Entrada: [1, 2, 4, 0]. Salida: ${fechaValida([1, 2, 4, 0])}</li><br>`);


document.write(`</ul>`);

/**
 * Pasa el numero a decimal y de decimal a cualquier otra base
 * @param {*} fecha La fecha que hay que comprobar
 * @returns Si el string es fecha o no
 */
function fechaValida(fecha) {


    if (isNaN(Date.parse(fecha))) {
        return false;
    }
    else {
        return true;
    }


}


document.write("<h1>Ejercicio 2</h1>");
document.write(`<ul>`);
document.write(`<li>Entrada: 1,2012. Salida: ${diasMes(1, 2012)}</li><br>`);
document.write(`<li>Entrada: 2,2012. Salida: ${diasMes(2, 2012)}</li><br>`);
document.write(`<li>Entrada: 9,2012. Salida: ${diasMes(9, 2012)}</li><br>`);
document.write(`<li>Entrada: 12,2012. Salida: ${diasMes(12, 2012)}</li><br>`);
document.write(`</ul>`);
/**
 * 
 * @param {*} mes numero de mes
 * @param {*} año numero año
 * @returns dias en mes
 */
function diasMes(mes, año) {
    return new Date(año, mes, 0).getDate();
}
document.write("<h1>Ejercicio 3</h1>");
document.write(`<ul>`);
document.write(`<li>Entrada: '04/02/2014', '11/04/2014'. Salida: ${diferenciaEnDias('04/02/2014', '11/04/2014')}</li><br>`);
document.write(`<li>Entrada: '12/02/2014', '11/04/2014'. Salida: ${diferenciaEnDias('12/02/2014', '11/04/2014')}</li><br>`);

document.write(`</ul>`);
/**
 * 
 * @param {*} fecha1 Fecha 1
 * @param {*} fecha2 Fecha 2
 * @returns Diferncia en dias 
 */
function diferenciaEnDias(fecha1, fecha2) {
    fecha1 = new Date(fecha1).getTime();
    fecha2 = new Date(fecha2).getTime();
    return parseInt((fecha2 - fecha1) / (1000 * 60 * 60 * 24));


}
document.write("<h1>Ejercicio 4</h1>");
document.write(`<ul>`);
document.write(`<li>Entrada: ['2015/02/01', '2015/02/02', '2015/01/03']. Salida: ${fechaMin(['2015/02/01', '2015/02/02', '2015/01/03'])}</li><br>`);
document.write(`</ul>`);
function fechaMin(fechas) {
    let fechaMin = Number.MAX_VALUE;
    for (let i = 0; i < fechas.length; i++) {
        let fechaAux = new Date(fechas[i]).getTime();
        if (fechaMin > fechaAux) {
            fechaMin = fechaAux;
        }

    }
    let fechaMostrar = new Date(fechaMin);
    return fechaMostrar.getDate() + "/" + (fechaMostrar.getMonth() + 1) + "/" + fechaMostrar.getFullYear();

}


document.write("<h1>Ejercicio 5</h1>");
document.write(`<ul>`);
document.write(`<li>Entrada: new Date(2015, 10, 1). Salida: ${diaSemana(new Date(2015, 10, 1))}</li><br>`);
document.write(`</ul>`);
/**
 * 
 * @param {*} fecha fecha
 * @returns Dia de la semana
 */
function diaSemana(fecha) {
    aux = fecha.getDay();
    return ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'][fecha.getDay()];
}



document.write("<h1>Ejercicio 6</h1>");
document.write(`<ul>`);
let dt = new Date(2014, 10, 2);
document.write(`<li>Entrada: new Date(2014,10,2),10. Salida: ${sumaSemanas(dt, 10)}</li><br>`);
document.write(`</ul>`);

/**
 * 
 * @param {*} fecha fecha
 * @param {*} semanas semanas a sumar
 * @returns fecha mas semanas
 */
function sumaSemanas(fecha, semanas) {
    let milisegundos = fecha.getTime();
    let semanasMilisegundos = semanas * 7 * 24 * 60 * 60 * 1000;
    milisegundos += semanasMilisegundos;
    return new Date(milisegundos);
}


document.write("<h1>Ejercicio 6</h1>");
document.write(`<ul>`);
dt1 = new Date("06/13/2014");
dt2 = new Date("10/19/2014");
document.write(`<li>Entrada: 13/06/2014,19/10/2014. Salida: ${diferenciaEnMeses(dt1, dt2)}</li><br>`);
document.write(`</ul>`);

/**
 * 
 * @param {*} fecha1 
 * @param {*} fecha2 
 * @returns Diferencia en meses
 */
function diferenciaEnMeses(fecha1, fecha2) {
    let mesesDiferencia = ((fecha2.getFullYear() - fecha1.getFullYear()) * 12);
    mesesDiferencia -= fecha1.getMonth();
    mesesDiferencia += fecha2.getMonth();
    return mesesDiferencia;

}



