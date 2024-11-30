import { listaEstudiantes } from "../datasource/dataestudiantes";
import { IEstudiante } from "../global/iestudiante";


interface IPeticionEstudiante {
    usuario: string,
    ip: string,
    datosPeticion: any
}



interface IRespuestaEstudiante {
    codigoRespuesta: string,
    bodyRespuesta: any
}

export class EstudiantesxValidaciones {
    
    private lEstudiantes: IEstudiante[] = listaEstudiantes;
    /* 
    Contenido de dataPeticion para buscar por identificacion
    {
        "identificacion": "EC123001"
    }
    */
    findEstudiantesByIdentificacion = (peticionEstudiante : IPeticionEstudiante): IRespuestaEstudiante => {
        console.log(`El usuario ${peticionEstudiante.usuario} desde la IP ${peticionEstudiante.ip} usa buscar estudiante por identificacion`);
        
        let dataIdentificacion = peticionEstudiante.datosPeticion;
        let estudianteByIdentificacion = this.lEstudiantes.find( estudiante => 
            estudiante.identificacion === dataIdentificacion.identificacion);
        
        if(estudianteByIdentificacion === undefined) {
            return FIND_BY_IDENTIFICATION_NOT_FOUND;
        } else {
            return responseSuccefull(estudianteByIdentificacion);
        }
    }
    /* 
    Contenido de dataPeticion para buscar por curso
    {
        "curso": "Primero"
    }
    */
    findEstudiantesByCurso = (peticionEstudiante: IPeticionEstudiante): IRespuestaEstudiante => {
        console.log(`El usuario ${peticionEstudiante.usuario} desde la IP ${peticionEstudiante.ip} usa buscar estudiantes por curso`);

        let dataCurso = peticionEstudiante.datosPeticion; 
        let estudiantesByCurso: IEstudiante[] = this.lEstudiantes.filter( estudiante => {
            if( estudiante.curso == dataCurso.curso) {
                return estudiante;
            }
        });
        if(estudiantesByCurso.length === 0){
            return FIND_BY_COURSE_EMPTY
        } else {
            return responseSuccefull(estudiantesByCurso);
        }
    }

    /*
{
   "nombre": ""    
}
     */
    findByNombre = (peticionEstudiante: IPeticionEstudiante): IRespuestaEstudiante => {
        console.log(`El usuario ${peticionEstudiante.usuario} desde la IP ${peticionEstudiante.ip} usa buscar estudiantes por nombre`);

        let dataNombre = peticionEstudiante.datosPeticion;
        if(!dataNombre.nombre) { // dataNombre.nombre === undefined | dataNombre.nombre === null | dataNombre.nombre === ''
            return ERROR_REQUEST
        }
        
        let nombreIngresado: string = String(dataNombre.nombre);
        if(nombreIngresado.trim().length === 0) {
            return TEXT_NOT_FOUND
        }

       
        let estudiantesPorNombre = this.lEstudiantes.filter( estudiante => estudiante.nombre.toLocaleLowerCase().includes(nombreIngresado.toLocaleLowerCase()));

        if(estudiantesPorNombre.length === 0) {
            return EMPTY_RESULT
        } else {
            return responseSuccefull(estudiantesPorNombre);
        }
    }

    
}