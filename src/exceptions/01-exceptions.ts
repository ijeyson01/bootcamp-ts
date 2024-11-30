

import { dataPersona, datosDestino, direccioOrigenPersona } from "../datasource/dataipersona";
import { IPersona } from "../global/ipersona";
import { IPeticion } from "../global/irequest";
import { IRespuesta } from "../global/iresponse";


class MyClassWithExceptionControl {

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
        return responseSuccefull('OK');
    }

}