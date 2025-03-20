export class Celular {
    private marca:string;
    private modelo:string;
    private sistemaOperativo:string;
    private memoriaRam:number;
    private almacenamiento:number;
    private estado:boolean

    constructor (pMarca:string,pModelo:string,pSistemaOperativo:string,pMemoriaRam ?:number,pAlmacenamiento?:number,pEstado?:boolean){
        this.marca = pMarca;
        this.modelo = pModelo;
        this.sistemaOperativo = pSistemaOperativo;
        this.memoriaRam = pMemoriaRam ?? 4;
        this.almacenamiento = pAlmacenamiento ?? 64;
        this.estado = pEstado ?? false;
    }

    setMemoriaRam(pMemoriaRam:number){
        this.memoriaRam = pMemoriaRam;
    }

    getMemoriaRam(){
        return this.memoriaRam;
    }

    encenderApagar():void{
        if (this.estado == false){  
            this.estado = true;   
        }else{
            this.estado = false;
        }
        console.log(this.estado);
        
    }

    mostrarInfo(info:string):string{
        info = `celular: ${this.marca}, modelo: ${this.modelo}, sistemaOperativo: ${this.sistemaOperativo}
         memoriaRam: ${this.memoriaRam}, almacenamiento: ${this.almacenamiento}, apagado: ${this.estado}`
        return info
    }
}