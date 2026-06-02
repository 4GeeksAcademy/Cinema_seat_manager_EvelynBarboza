function IniciarMatrizAsientos() {
    var fila = 8;
    var colum = 10;
    var AsientosCine = [];
    for (var i = 0; i < fila; i++) {
        AsientosCine[i] = [];
        for (var x = 0; x < colum; x++) {
            AsientosCine[i][x] = 0;
        }
    }
    return AsientosCine;
}
console.log(IniciarMatrizAsientos());
