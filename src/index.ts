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

function createNameManager() {

  const names: string[] = [];

  return {
    addName(name: string) {

      if (!name.trim()) {
        throw new Error("Error en el nombre")
      }
      names.push(name);
      console.log(`Nombre "${name}" agregado`)
    },

    getNames(): string[] {
      return [...names];
    }
  }
}

const nameManager = createNameManager();

try {
  nameManager.addName("Sam");
  nameManager.addName("Dan");
}
catch (error) {
  console.error(error);
}

console.log("Nombre almacenados", nameManager.getNames())
