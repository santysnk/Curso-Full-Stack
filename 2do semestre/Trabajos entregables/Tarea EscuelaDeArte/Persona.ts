export class Persona {
    protected nombre:string;
    protected apellido:string;
    protected dni:number;
    protected edad:number;
    

    constructor (pNombre:string, pApellido:string, pDNI:number, pEdad:number){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.dni = pDNI;
        this.edad = pEdad;
    }

    // Getters
    public getNombre():string {
        return this.nombre;
    }
    public getApellido():string {
        return this.apellido;
    }
    public getDNI():number {
        return this.dni;
    }
    public getEdad():number {
        return this.edad;
    }

     // Setters
    public setNombre(pNombre:string) {
        this.nombre = pNombre;
    }
    public setApellido(pApellido:string) {
        this.apellido = pApellido;
    }
    public setDNI(pDNI:number) {
        this.dni = pDNI;
    }
    public setEdad(pEdad:number) {
        this.edad = pEdad;
    }

    
    // Métodos
    public mostrarInfo():string {
        return `${this.nombre} ${this.apellido}.
    DNI: ${this.dni}
    Edad: ${this.edad}`;
    }

}