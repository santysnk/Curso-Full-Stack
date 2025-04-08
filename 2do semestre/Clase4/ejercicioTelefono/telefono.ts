export class Telefono{
    private _estaPrendido: boolean = false;
    private _bateriaActual: number;

    constructor (pEstaPrendido:boolean,pBateria:number){
        this._estaPrendido = pEstaPrendido;
        this._bateriaActual = pBateria;
    }

    public get bateriaActual(): number {
        return this._bateriaActual;
    }
    public set bateriaActual(valor: number) {
        this._bateriaActual = valor;
    }

    public get estaPrendido(): boolean {
        return this._estaPrendido;
    }
    public set estaPrendido(valor: boolean) {
        this._estaPrendido = valor;
    }

    public mandarMensaje(mensaje:string){
        console.log(`aplicar logica para mandar el mensaje: 
            "${mensaje}"`);
    }

    public hacerLlamada(numCelular:number){
        console.log(`aplicar logica para llamar al celular: 
            "${numCelular}"`);
    }

    public prenderApagar(){
        if (this._estaPrendido){
            this._estaPrendido = false;
            console.log("El celular está encendido y se apagará");
            
        }else{
            this._estaPrendido = true;
            console.log("El celular se enciende");
        }
    }

    public info():string{
        let estado = ():string =>{
            let dato:string;
            if (this._estaPrendido){
                dato = "prendido"
            }else{
                dato = "apagado"
            }
            return dato
        }

        let informacion:string = `El equipo tiene ${this._bateriaActual}% de batería y esta: ${estado()}`

        return informacion
    }



}