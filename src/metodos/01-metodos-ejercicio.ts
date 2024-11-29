// 1. Crear un método para buscar por identificación - find
// 2. Crear un método para buscar un grupo de estudiantes por curso - filter
// Consideraciones: exportar el array, crear una clase y crear la interface estudiante.

import { listaEstudiantes } from '../datasource/dataestudiantes';
import { IEstudiante } from '../global/iestudiante';

export class Estudiantes {

    private lEstudiantes: IEstudiante[] = listaEstudiantes;

    // punto 1.
    findByIdentificacion = (identificacion: string): IEstudiante | undefined => {
        let estudianteByIdentificaion = this.lEstudiantes.find( estudiante => 
            estudiante.identificacion = identificacion );
        return estudianteByIdentificaion;
    }
    // punto 2.
    findEstudiantesByCurso = (curso: string): IEstudiante[] => {
        let estudiantesCurso = this.lEstudiantes.filter( estudiante => {
            if( estudiante.curso === curso ){
                return estudiante
            }
        });
        return estudiantesCurso;
    }
  
}