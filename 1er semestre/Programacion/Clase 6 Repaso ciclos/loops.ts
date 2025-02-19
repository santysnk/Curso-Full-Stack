// algoritmo que pide numeros al usuario, hasta que este introduce 0

import * as rs from "readline-sync";

let userImput: number | null = null
    userImput = rs.questionInt("Type in a number, 0 to exit: ");
    console.clear();
do{

}while (userImput !== 0);