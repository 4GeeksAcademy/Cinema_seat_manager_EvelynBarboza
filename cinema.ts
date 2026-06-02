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

function mostrarSala(sala: number[][]): void {
  for (const fila of sala) {
    let linea = "";

    for (const asiento of fila) {
      linea += asiento === 1 ? "X " : "L ";
    }

    console.log(linea);
  }
}

//console.log(mostrarSala(sala))

function reservarAsiento(sala: Sala, fila: number, columna: number): string{
    const arrayFila = fila-1
    const arrayColumna = columna -1

    if (fila < 1 || fila > 8 || columna < 1 || columna > 10) {
    return `Error: Posición inválida. Fila debe estar entre 1-8 y columna 1-10.`;
  }

  if (sala[arrayFila][arrayColumna] === 1) {
    return `Error: El asiento en la fila ${fila}, columna ${columna} ya está ocupado.`;
  }

  sala[arrayFila][arrayColumna] = 1;
  return `Éxito: Asiento fila ${fila}, columna ${columna} reservado correctamente.`;
}
//console.log(reservarAsiento(sala,2,3))
const sala = crearSala();

mostrarSala(sala);

//console.log(reservarAsiento(sala, 2, 3)); //////Éxito: Asiento fila 2, columna 3 reservado correctamente.
console.log(reservarAsiento(sala, 2, 10));
//mostrarSala(sala);

function contarAsientos(sala: Sala): string {
  let ocupado = 0;
  let libre = 0;

  for (let i = 0; i < sala.length; i++) {
    for (let j = 0; j < sala[i].length; j++) {
      if (sala[i][j] === 1) ocupado++;
      else libre++;
    }
  }

  return `{"Ocupados": ${ocupado}, "Libres": ${libre}, "Total": ${ocupado + libre}}`;
}

console.log(contarAsientos(sala))
console.log(reservarAsiento(sala, 2, 10));
