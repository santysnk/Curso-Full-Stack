export class Estudiante {
    private nombreAlumno:string
    private nota:number

    constructor (Pnombre:string,Pnota:number){
        this.nombreAlumno = Pnombre;
        this.nota = Pnota;
    }

    
   // Evalúa la calificación del alumno.
   // retorna "aprobado" si la nota es mayor o igual a 7, o "NO aprobado" en caso contrario.
    public calificacion():string{
        let aprobado:string;

        if (this.nota >= 7){
            aprobado = "aprobado";
        }else{
            aprobado = "NO aprobado";
        }
        return aprobado;
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