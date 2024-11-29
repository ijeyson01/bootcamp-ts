import {Estudiantes} from '../src/metodos/01-metodos-ejercicio';

import * as claseEstudiantes from '../src/metodos/01-metodos-ejercicio';

let variableClase: Estudiantes = new Estudiantes(); 

//let variableClase1: Estudiantes = new claseEstudiantes.Estudiantes(); 

//let estudianteByIdentificacion = variableClase.findByIdentificacion('EC123001');
//console.log(estudianteByIdentificacion);

let estudiantesByCurso = variableClase.findEstudiantesByCurso('Tercero');
console.log(JSON.stringify(estudiantesByCurso));

