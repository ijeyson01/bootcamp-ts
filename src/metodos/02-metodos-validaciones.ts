import { listaEstudiantes } from "../datasource/dataEstudiantes";
import { IEstudiante } from "../global/iestudiante";


interface IPeticionEstudiante {
    usuario: string,
    ip: string,
    datosPeticion: any
}

/* 
{
    "identificacion": "EC123001"
}
*/

export class EstudiantesxValidaciones {
    
    private lEstudiantes: IEstudiante[] = listaEstudiantes;

    findEstudiantesByIdentificacion = (peticionEstudiante : IPeticionEstudiante): any =>{
        console.log(`El usuario ${peticionEstudiante.usuario} desde la IP ${peticionEstudiante.ip} usa buscar estudiante por identificacion`);
        
        let dataIdentificacion = peticionEstudiante.datosPeticion;
        let estudianteByIdentificacion = this.lEstudiantes.find( estudiante => 
            estudiante.identificacion === dataIdentificacion.identificacion);
        
        if(estudianteByIdentificacion === undefined) {
            return {
                codigoRespuesta: 'ER001',
                bodyRespuesta: {
                    data: 'No hay registro de un estudiante con la identificacion ingresada'
                }
            }
        } else {
            return {
                codigoRespuesta: 'OK001',
                bodyRespuesta: {
                    data: estudianteByIdentificacion
                }
            }
        }
    }

    
}