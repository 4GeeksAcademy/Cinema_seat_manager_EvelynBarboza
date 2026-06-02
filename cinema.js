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
var sala = crearSala();
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
console.log(mostrarSala(sala));
