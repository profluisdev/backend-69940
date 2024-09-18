import express from "express";
import { fork } from "child_process";

const app = express();

const operacionCompleja = () => {
  let result = 0;
  for (let i = 0; i < 5e9; i++ ) {
    result += i
  }

  return result;
}


app.get("/suma", (req, res) => {
  const child = fork("./operacionCompleja.js"); // Forkeamos la operación compleja 
  child.send("Iniciar el cálculo");
  
  child.on("message", (result) => {
    res.send(`Resultado: ${result}`); // Escuchamos el proceso hijo y lo mostramos una ves que nos de la respuesta
  })


})

app.get("/hola", (req, res) => {
  res.send("Hola a todos");
})

app.listen(8080, () => {
  console.log("Server on port 8080");
})