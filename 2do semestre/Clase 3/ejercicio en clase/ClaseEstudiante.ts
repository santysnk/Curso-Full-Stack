export class Estudiante {
    private nombreAlumno:string
    private nota:number

    constructor (Pnombre:string,Pnota:number){
        this.nombreAlumno = Pnombre;
        this.nota = Pnota;
    }

    public calificacion():string{
        let aprovado:string;

        if (this.nota >= 7){
            aprovado = "aprovado";
        }else{
            aprovado = "NO aprovado";
        }
        return aprovado;
    }

    public getNombre():string{
        return this.nombreAlumno;
    }

    public getnota():number{
        return this.nota;
    }

    public setNombre(Pnombre:string){
        this.nombreAlumno = Pnombre;
    }

    public setNota(Pnota:number){
        this.nota = Pnota;
    }



}