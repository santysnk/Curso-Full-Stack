import { Profesor } from "./Profesor";
import { Estudiante } from "./Estudiante";

export class Curso {
    private nombreCurso:string;
    private responsable?:Profesor;
    private participantes:Estudiante[];

    constructor(pNombreCurso:string, pResponsable?:Profesor) {
        this.nombreCurso = pNombreCurso;
        this.responsable = pResponsable;
        this.participantes = [];
    }

    public agregarEstudiante(estudiante:Estudiante){
        this.participantes.push(estudiante);
    }

    public listarParticipantes(){
        console.log(`-----------------------------`);
        console.log(`📖  Curso: ${this.nombreCurso}`);
        console.log(`-----------------------------\n`);
        
        if (this.responsable) {
            console.log(`Responsable: ${this.responsable.mostrarInfo()}`);
        } else {
            console.log("Este curso aún no tiene responsable asignado.");
        }
        console.log(`\n*************************************************\n`);
        
        if (this.participantes.length === 0) {
            console.log("Este curso aún no tiene Estudiantes asignados.\n");
        }else {
            console.log("Participantes:");
            console.log(`-----------------------------\n`);

            for (let i = 0; i < this.participantes.length; i++) {
                console.log(`→ ${this.participantes[i].mostrarInfo()}`);
                console.log("");
            }
        }
        console.log("##########################################################################\n");
        
    }
}