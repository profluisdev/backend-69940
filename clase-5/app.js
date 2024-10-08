import cluster from "cluster";
import { cpus } from "os";

const numCPUs = cpus().length;

// Chequeamos el proceso principal
// console.log(cluster.isPrimary);

// Validar si es el proceso principal
if (cluster.isPrimary) {
  console.log("Proceso primary, generando workers ...");

  for (let i = 0; i < numCPUs; i++) {
    console.log("Creando un nuevo worker ...");
    cluster.fork();
  }

  // Control del evento exit 
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} murió con el código ${code} y señal ${signal} `);
    // Creamos un nuevo worker
    cluster.fork(); // Reemplaza el worker muerto
  })

  // Escuchamos los mensajes de los workers
  cluster.on("message", (worker, message) => {
        console.log(`Worker ${worker.id} envió el siguiente mensaje: ${message}`);
  })
} else {
  // Código del worker

  switch (cluster.worker.id) {
    case 1:
      console.log("Worker 1 procesando suma ...");
      const suma = (a, b) => a + b;
        // Enviamos el resultado de nuestro proceso al primary
        process.send(`Resultado del a suma es: ${suma(10, 5)}`);
      break;
    case 2:
      console.log("Worker 2 procesando resta ...");
      const resta = (a, b) => a - b;
      // Enviamos el resultado al proceso principal
      process.send(`Resultado de la resta: ${resta(5, 3)}`);
      break;
    case 3:
      console.log("Worker 3 procesando división ...");
      const division = (a, b) => a / b;
      // Enviamos el resultado al proceso principal
      process.send(`Resultado de la división: ${division(5, 3)}`);
      break;
    case 4:
      console.log("Worker 4 procesando multiplicación ...");
      const multiplicacion = (a, b) => a * b;
      // Enviamos el resultado al proceso principal
      process.send(`Resultado de la multiplicación: ${multiplicacion(5, 3)}`);
      break;
    default:
      console.log(`Worker ${cluster.worker.id} descansando como siempre ...`);
  }
}
