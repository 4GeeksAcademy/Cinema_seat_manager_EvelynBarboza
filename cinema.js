/*type Sala = number [][];

function IniciarMatrizAsientos (): Sala {

    const fila = 8;
    const colum = 10;
    const sala: Sala = [];

for (let i = 0; i< fila; i++){
    sala[i] = [];

    for (let x = 0; x < colum; x++) {
        sala[i][x] = 0;
    }
}
return AsientosCine;

}*/
/////////////////* CREAR SALA*//////////////////
function crearSala() {
    var sala = [];
    var columna = 10;
    var fila = 8;
    for (var i = 0; i < fila; i++) {
        sala[i] = [];
        for (var j = 0; j < columna; j++) {
            sala[i][j] = 0;
        }
    }
    return sala;
}
//////////////////*MOSTRAR SALA*///////////////
function mostrarSala(sala) {
    for (var _i = 0, sala_1 = sala; _i < sala_1.length; _i++) {
        var fila = sala_1[_i];
        var linea = "";
        for (var _a = 0, fila_1 = fila; _a < fila_1.length; _a++) {
            var asiento = fila_1[_a];
            linea += asiento === 1 ? "X " : "L ";
        }
        console.log(linea);
    }
}
////////////////*RESERVAR ASIENTOS*///////////////
function reservarAsiento(sala, fila, columna) {
    var arrayFila = fila - 1;
    var arrayColumna = columna - 1;
    if (fila < 1 || fila > 8 || columna < 1 || columna > 10) {
        return "Error: Posici\u00F3n inv\u00E1lida. Fila debe estar entre 1-8 y columna 1-10.";
    }
    if (sala[arrayFila][arrayColumna] === 1) {
        return "Error: El asiento en la fila ".concat(fila, ", columna ").concat(columna, " ya est\u00E1 ocupado.");
    }
    sala[arrayFila][arrayColumna] = 1;
    return "\u00C9xito: Asiento fila ".concat(fila, ", columna ").concat(columna, " reservado correctamente.");
}
////////*CONTAR CANTIDAD DE ASIENTOS*////////
function contarAsientos(sala) {
    var ocupado = 0;
    var libre = 0;
    for (var i = 0; i < sala.length; i++) {
        for (var j = 0; j < sala[i].length; j++) {
            if (sala[i][j] === 1)
                ocupado++;
            else
                libre++;
        }
    }
    return "{\"Ocupados\": ".concat(ocupado, ", \"Libres\": ").concat(libre, ", \"Total\": ").concat(ocupado + libre, "}");
}
/////*PARA ENCONTRAR 2 ASIENTOS LIBRES JUNTOS*/////
function encontrarDosAsientosJuntos(asientos) {
    for (var i = 0; i < asientos.length; i++) {
        for (var j = 0; j < asientos[i].length - 1; j++) {
            if (asientos[i][j] === 0 && asientos[i][j + 1] === 0) {
                return "{\"Encontrados\": true, \"Fila\": ".concat(i + 1, ", \"Columna 1\": ").concat(j + 1, ", \"Columna 2\": ").concat(j + 2, ", \"Mensaje\": \" Se encontraron 2 asientos juntos en la fila ").concat(i + 1, ", Columnas ").concat(j + 1, " y ").concat(j + 2, "\"}");
            }
        }
    }
    return "{\"Encontrados\": false, \"Mensaje\": \"No hay dos asientos juntos disponibles en la sala.\"}";
}
/*PRUEBAS DE CONSOLA*/
var sala = crearSala();
console.log('- SALA RECIÉN CREADA -');
console.log(mostrarSala(sala));
console.log(contarAsientos(sala));
console.log(encontrarDosAsientosJuntos(sala));
console.log('- RESERVA DE ASIENTOS -');
console.log(reservarAsiento(sala, 2, 10));
console.log(reservarAsiento(sala, 2, 3)); //////Éxito: Asiento fila 2, columna 3 reservado correctamente.
console.log(reservarAsiento(sala, 7, 8));
//asiento ocupado ?
console.log(reservarAsiento(sala, 2, 3));
