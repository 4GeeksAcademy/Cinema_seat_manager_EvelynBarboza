function crearSala() {
    var sala = [];
    for (var fila = 0; fila < 8; fila++) {
        sala[fila] = [];
        for (var columna = 0; columna < 10; columna++) {
            sala[fila][columna] = 0;
        }
    }
    return sala;
}
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
//console.log(mostrarSala(sala))
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
//console.log(reservarAsiento(sala,2,3))
var sala = crearSala();
mostrarSala(sala);
//console.log(reservarAsiento(sala, 2, 3)); //////Éxito: Asiento fila 2, columna 3 reservado correctamente.
console.log(reservarAsiento(sala, 2, 10));
//mostrarSala(sala);
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
    return "{\"occupied\": ".concat(ocupado, ", \"available\": ").concat(libre, ", \"total\": ").concat(ocupado + libre, "}");
}
console.log(contarAsientos(sala));
console.log(reservarAsiento(sala, 2, 10));
