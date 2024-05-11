import chalk from "chalk";
import { v4 as uuid } from "uuid";
import moment from "moment";
import _ from "lodash";
import axios from "axios";

//1
console.log(chalk.bgYellow.green("Hola mundo"));

//2
const ID = uuid();
console.log(ID);
console.log(ID.slice(-6));

//3
moment.locale("es");

console.log(`La fecha actual es: ${moment().format("LLLL")}`);
console.log(`En 10 dias más será: ${moment().add(10, "d").format("LLLL")}`);

//4
const numeros = [true, 0, null, undefined, "", 22, false];
console.log(_.partition(numeros, (n) => n));

//5
axios
  .get("https://mindicador.cl/api")
  .then((response) => {
    const dolarActual = response.data.dolar.valor;
    console.log(`La cotizacion del dolar en Chile es: ${dolarActual}`);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("Esperando a que se cargue la informacion...");
