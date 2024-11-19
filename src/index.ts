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

class NameManager {

  private names: string[] = [];

  addName(name: string): void {
      if (!name.trim()) {
          throw new Error("El nombre no puede estar vacío");
      }
      this.names.push(name);
      console.log(`Se agregó el nombre "${name}" a la lista`);
  }
}

const nameManager = new NameManager();

try {
  nameManager.addName("Sam");
}
catch (error) {
  console.error(error);
}