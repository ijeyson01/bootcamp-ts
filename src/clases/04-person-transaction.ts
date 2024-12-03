import { PersonProcess } from "./03-person-process";


export class PersonTransaction {

    constructor(private readonly personProcess: PersonProcess)
    {}

    // agrega a una persona con una identificación que no esté registrada
    /* 
        {
            "user": "jjaramillo",
            "ip": "0.0.0.0",
            "data": {
                "identification": "1202202020",
                "name": "Mario",
                "lastName": "Cimarro"
            }
        }
    
    */
    createPerson( data: any ) {
        try {
            let dataPersona = data.data;
            let dataFindPerson = this.personProcess.getPersonByIdentification(dataPersona.identification);
            if(dataFindPerson) throw Error('La persona si está registrada en el sistema');
            this.personProcess.addPerson(dataPersona);
            return this.personProcess.getAllPerson();
        } catch (ex) {
            if(ex instanceof Error){
                console.log("Mensaje de error "+ ex.message)
            } else {
                console.log(`Error en el sistema: ${ex}`)
            }
        }
        
    }
}