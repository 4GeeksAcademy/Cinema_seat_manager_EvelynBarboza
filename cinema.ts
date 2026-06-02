type AsientosCine = number [][]; 

function IniciarMatrizAsientos (): AsientosCine {

    const fila = 8;
    const colum = 10;
    const AsientosCine: AsientosCine = [];

for (let i = 0; i< fila; i++){
    AsientosCine[i] = [];

    for (let x = 0; x < colum; x++) {
        AsientosCine[i][x] = 0;
    }
}
return AsientosCine;

}
console.log(IniciarMatrizAsientos())