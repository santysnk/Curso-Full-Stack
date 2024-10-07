import * as rs from 'readline-sync'

/* Desarrolle un algoritmo que permita loguearse (registrarse) a un sistema, ingresando un nombre de usuario y la
contraseña adecuada.
    • Considerar que tanto el usuario como la contraseña están formados sólo por letras.
    • El sistema deberá validar que el usuario y la contraseña sean correctas, comparándolas con lo que es sistema tiene
    registrado para ese usuario. Tenga en cuenta que el sistema tiene registrado el usuario: Juan y la clave: claveJuan 
*/
console.clear()

console.clear();
console.log(" LOGIN");
console.log("-------");

const userReg:string = "Juan";
const passReg:string = "claveJuan";
let acceso:boolean = false;

while (!acceso) {
    let userLogin: string = rs.question("\nIngrese el nombre de usuario: ");
    let passLogin: string = rs.question("Ingrese el password: ");

    // Variables que indican si el usuario y la contraseña son correctos
    let checkUser: boolean = (userReg === userLogin);
    let checkPass: boolean = (passReg === passLogin);

    if (checkUser && checkPass) {
        console.log("Acceso correcto");
        acceso = true;
    } else {
        console.clear();
        if (!checkUser) {
            console.log("El nombre de usuario es incorrecto");
        }

        if (!checkPass) {
            console.log("El password es incorrecto");
        }
    }
}
