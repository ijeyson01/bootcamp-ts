import { MyClassWithExceptionControl } from "./exceptions/01-exceptions";
import { IPeticion } from "./global/irequest";

let myclassWithExceptionsObject: MyClassWithExceptionControl = new MyClassWithExceptionControl();

let viajesRequest: IPeticion = {
    usuario: 'jjaramillo', 
    ip: '0.0.0.0',
    datosPeticion: {
        identificacion: 'EC120ABC'
    }
}

//console.log(JSON.stringify(myclassWithExceptionsObject.getViajesPersona(viajesRequest)));

console.log(JSON.stringify(myclassWithExceptionsObject.buscarPersonasSinDireccionRegistrada()));