import { listaEstudiantes } from "../datasource/dataEstudiantes";
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
            return {
                codigoRespuesta: 'ER001',
                bodyRespuesta: 'No hay registro de un estudiante con la identificacion ingresada'
            }
        } else {
            return {
                codigoRespuesta: 'OK001',
                bodyRespuesta:  estudianteByIdentificacion
            }
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
            return {
                codigoRespuesta: 'ER002',
                bodyRespuesta: 'No hay estudiantes para el curso ingresado'
            }
        } else {
            return {
                codigoRespuesta: 'OK001',
                bodyRespuesta: estudiantesByCurso
            }
        }
    }

    
}