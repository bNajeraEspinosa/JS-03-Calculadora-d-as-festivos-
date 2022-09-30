// Cargar elementos utilizando el DOM
let dia = document.getElementById("dia");
let mes = document.getElementById("mes");
let anio = document.getElementById("anio");

let btn_calcular = document.getElementById("btn_calcular");

let resultado = document.getElementById("resultado");

// Función para calcular el día laboral
btn_calcular.addEventListener("click", () => {
    // validar que los campos no estén vacíos
    if (dia.value == "" || mes.value == "" || anio.value == "") {
        alert("Todos los campos son obligatorios");
        return;
    }

    // validar que el año sea mayor a 0
    if (anio.value <= 0) {
        alert("El año debe ser mayor a 0");
        return;
    }

    // validar que el mes esté en rango
    if (mes.value < 1 || mes.value > 12) {
        alert("El mes debe estar entre 1 y 12");
        return;
    }

    // validar que el día esté en rango
    if (dia.value < 1 || dia.value > 31) {
        alert("El día debe estar entre 1 y 31");
        return;
    }

    // ensamblar la fecha
    let fecha = new Date(anio.value, mes.value - 1, dia.value);

    // obtener el día de la semana
    let dia_semana = fecha.getDay();

    let cadena = ""; // Cadena para mostrar el resultado
    // Generar el resultado en español
    switch (dia_semana) {
        case 0:
            cadena = "Domingo";
            break;
        case 1:
            cadena = "Lunes";
            break;
        case 2:
            cadena = "Martes";
            break;
        case 3:
            cadena = "Miércoles";
            break;
        case 4:
            cadena = "Jueves";
            break;
        case 5:
            cadena = "Viernes";
            break;
        case 6:
            cadena = "Sábado";
            break;
    }

    if (dia_semana == 0 || dia_semana == 6) {
        cadena += ", no es un día laboral";
    } else {
        cadena += ", es un día laboral";
    }

    // Mostrar el resultado
    resultado.value = cadena;
});