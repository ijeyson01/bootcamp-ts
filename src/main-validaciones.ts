import { EstudiantesxValidaciones } from "./metodos/02-metodos-validaciones";


let estudiantexValidacionObjeto: EstudiantesxValidaciones = new EstudiantesxValidaciones();

let jsonPeticionEstudiante = {
    usuario: 'jjaramillo',
    ip: '0.0.0.0',
    datosPeticion: {
        identificacion: ""
    }
}

let datosEstudiante = estudiantexValidacionObjeto.findEstudiantesByIdentificacion(jsonPeticionEstudiante);

console.log(JSON.stringify(datosEstudiante));