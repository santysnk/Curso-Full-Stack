import * as rs from 'readline-sync'

let i:number;
let linea : string;
let numero1 :number = rs.questionInt ("Ingrese el primer valor: ");
let numero2:number = rs.questionInt ("Ingrese el segundo valor: ");
let opcionMenu: number = rs.questionInt("Ingrese 1  si quiere sumar o 2 si quiere restar")