const nombres: string[] = ["Juan", "María", "Carlos", "Ana", "Luis", "Sofía"];

function obtenerIndiceAleatorio(array: string[]): number {
  if (array.length === 0) {
    throw new Error("El array está vacío.");
  }
  return Math.floor(Math.random() * array.length);
}

try {

  const indiceAleatorio = obtenerIndiceAleatorio(nombres);
  console.log(`Índice aleatorio: ${indiceAleatorio}`);
  console.log(`Nombre en el índice ${indiceAleatorio}: ${nombres[indiceAleatorio]}`);

} catch (error) {
  console.log(error);
}