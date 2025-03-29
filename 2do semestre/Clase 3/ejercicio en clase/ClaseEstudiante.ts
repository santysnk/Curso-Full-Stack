export class Estudiante {
    private nombreAlumno:string
    private nota:number

    constructor (Pnombre:string,Pnota:number){
        this.nombreAlumno = Pnombre;
        this.nota = Pnota;
    }

    
   // Evalúa la calificación del alumno.
   // retorna "aprovado" si la nota es mayor o igual a 7, o "NO aprovado" en caso contrario.
    public calificacion():string{
        let aprovado:string;

        if (this.nota >= 7){
            aprovado = "aprovado";
        }else{
            aprovado = "NO aprovado";
        }
        return aprovado;
    }

    // Retorna el nombre del estudiante.
    public getNombreEstudiante():string{
        return this.nombreAlumno;
    }

    // Retorna la nota del estudiante.
    public getNotaEstudiante():number{
        return this.nota;
    }

    // Permite modificar el nombre del estudiante.
    public setNombre(Pnombre:string){
        this.nombreAlumno = Pnombre;
    }

    // Permite modificar la nota del estudiante.
    public setNota(Pnota:number){
        this.nota = Pnota;
    }



}