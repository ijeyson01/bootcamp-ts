

import { dataPersona, datosDestino, direccioOrigenPersona } from "../datasource/dataipersona";
import { EMPTY_RESULT_ADDRESS, EMPTY_RESULT_DESTINATION, EMPTY_RESULT_PERSON, responseException, responseSuccefull } from "../global/constants";
import { IPersona } from "../global/ipersona";
import { IPeticion } from "../global/irequest";
import { IRespuesta } from "../global/iresponse";
//var method = require("../global/constants")

export class MyClassWithExceptionControl {

    private lPersonas: IPersona[] = dataPersona;
    private ldireccionPersona = direccioOrigenPersona;
    private lDestinoViajePersona = datosDestino;

    /* 
{
    "usuario": "jjaramillo",
    "ip": "0.0.0.0",
    "datosPeticion": {
        "identification":"EC123ABC" 
    }    
}
    
    */
    getViajesPersona = (dataRequest: IPeticion): IRespuesta => {
        try {
            let datoViaje = dataRequest.datosPeticion;

            let persona = this.lPersonas.find( personaViaje => personaViaje.identification === datoViaje.identificacion);
            if(!persona) throw Error(EMPTY_RESULT_PERSON.bodyRespuesta); 

            let direccionOrigenPersonaViaje = this.ldireccionPersona.find( direccionOrigen => direccionOrigen.person_id = persona.id )!;
            if(!direccionOrigenPersonaViaje) throw Error(EMPTY_RESULT_ADDRESS.bodyRespuesta);

            let viajesRealizados = this.lDestinoViajePersona.filter( destino => destino.person_id = persona.id )!;
            if(!viajesRealizados) throw Error(EMPTY_RESULT_DESTINATION.bodyRespuesta);

            let dataResponse = {
                persona: persona.name,
                direccion:  direccionOrigenPersonaViaje.address,
                viajes: viajesRealizados
            }
            return responseSuccefull(dataResponse);

        } catch (err) {
            if(err instanceof Error) {
                return responseException(err.message);
            } else {
                return responseException(JSON.stringify(err))
            }
        }
    }

    buscarPersonasSinDireccionRegistrada() {
        /*let dataPersonasSinDireccion: any[] = [];

        this.lPersonas.forEach( persona => {
            let direccion = this.ldireccionPersona.find( direccionPersona => direccionPersona.person_id === persona.id );
            if(!direccion) {
                dataPersonasSinDireccion.push({ persona: persona.name, phone: persona.phone });
            }
        });*/

        let dataPersonasSinDireccion = this.lPersonas.map( persona => {
            let direccion = this.ldireccionPersona.find( direccionPersona => direccionPersona.person_id === persona.id );
            let notificate: string = 'NO';
            if(!direccion) {
                notificate = 'SI';
            } 
            return { persona: persona.identification, notification: notificate};
        } )

        if(dataPersonasSinDireccion.length === 0) {
            return responseSuccefull('No existen personas sin direccion registrada');
        } else {
            return responseSuccefull(dataPersonasSinDireccion);
        }
    }
}