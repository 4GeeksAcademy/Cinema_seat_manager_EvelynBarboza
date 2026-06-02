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

type Sala = number[][];

/////////////////* CREAR SALA*//////////////////
function crearSala(): Sala {
  const sala: Sala = [];
  const columna =10
  const fila= 8

  for (let i = 0; i < fila; i++) {
    sala[i] = [];

    for (let j = 0; j < columna; j++) {
      sala[i][j] = 0;
    }
  }

  return sala;
}
//////////////////*MOSTRAR SALA*///////////////
function mostrarSala(sala: number[][]): void {
  for (const fila of sala) {
    let linea = "";

    for (const asiento of fila) {
      linea += asiento === 1 ? "X " : "L ";
    }

    console.log(linea);
  }
}

////////////////*RESERVAR ASIENTOS*///////////////
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

////////*CONTAR CANTIDAD DE ASIENTOS*////////
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

 /////*PARA ENCONTRAR 2 ASIENTOS LIBRES JUNTOS*/////
function encontrarDosAsientosJuntos(asientos: Sala): string {
  for (let i = 0; i < asientos.length; i++) {
    for (let j = 0; j < asientos[i].length - 1; j++) {
      if (asientos[i][j] === 0 && asientos[i][j + 1] === 0) {
        return `{"Encontrados": true, "Fila": ${i + 1}, "Columna 1": ${j + 1}, "Columna 2": ${j + 2}, "Mensaje": " Se encontraron 2 asientos juntos en la fila ${i + 1}, Columnas ${j + 1} y ${j + 2}"}`;
      }
    }
  }
  return `{"Encontrados": false, "Mensaje": "No hay dos asientos juntos disponibles en la sala."}`;
}

/*PRUEBAS DE CONSOLA*/
const sala = crearSala();
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
//asiento no existe ?
console.log(reservarAsiento(sala,25,1));

