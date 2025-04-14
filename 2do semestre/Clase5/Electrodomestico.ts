/*
    Crear una clase Electrodomestico con atributos:
        marca (string)
        modelo (string)
        estaEncendido (boolean)
    Métodos:
        encender()
        apagar()
        mostrarInfo()
*/

export class Electrodomestico{
    private _marca: string;
    private _modelo: string;
    private _estaEncendido: boolean;
    
    public get marca(): string {
        return this._marca;
    }
    public set marca(pMarca: string) {
        this._marca = pMarca;
    }
    
    public get modelo(): string {
        return this._modelo;
    }
    public set modelo(pModelo: string) {
        this._modelo = pModelo;
    }
    
    public get estaEncendido(): boolean {
        return this._estaEncendido;
    }
    public set estaEncendido(pEstaEncendido: boolean) {
        this._estaEncendido = pEstaEncendido;
    }


}