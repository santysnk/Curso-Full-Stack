import { Termo } from "./TermoClass";
import { CajaDeTermo } from "./cajaClass";
import { TapaDeTermo } from "./tapaDeTermo";

let cajaDeTermo1:CajaDeTermo = new CajaDeTermo ("carton","mediana")
let cajaDeTermo2:CajaDeTermo = new CajaDeTermo ("vidrio","chica")

let termo1:Termo = new Termo("Termo 1","rojo",2,400,5,cajaDeTermo2)




let TapaDeTermo1:TapaDeTermo = new TapaDeTermo ("Termo5","blanco",1,395,3,cajaDeTermo1,"plastico");

TapaDeTermo1.mostrarInfo();













