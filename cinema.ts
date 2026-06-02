/*type AsientosCine = number [][]; 

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

}*/
//console.log(IniciarMatrizAsientos())
type Sala = number[][];

function crearSala(): Sala {
  const sala: Sala = [];

  for (let fila = 0; fila < 8; fila++) {
    sala[fila] = [];

    for (let columna = 0; columna < 10; columna++) {
      sala[fila][columna] = 0;
    }
  }

  return sala;
}

