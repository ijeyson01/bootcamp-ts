import { MyClassPerson } from "./clases/01-clases";
import { Deportista } from "./clases/02-clase-con-herencia";
import { PersonProcess } from "./clases/03-person-process";
import { PersonTransaction } from "./clases/04-person-transaction";

const objectMyClassPerson: MyClassPerson = new MyClassPerson('','Jeyson', 'Jaramillo');
objectMyClassPerson.setBirthDate('2000-00-00');

const objectMyClassPerson2: MyClassPerson = new MyClassPerson('María', 'Jaramillo', '2000-00-00');

//console.log(`Persona de la clase: ${objectMyClassPerson2.getName()}`);


const bolt: Deportista = new Deportista('Correr', '100m', '','U.', 'Bolt');
//console.log(`Persona deportista: ${bolt.getName()} ${bolt.getLastName()}`);


let dataNuevaPersona = {
    "user": "jjaramillo",
    "ip": "0.0.0.0",
    "data": {
        "identification": "1202202020",
        "name": "Mario",
        "lastName": "Cimarro"
    }
}
const myObjectClass: PersonProcess = new PersonProcess([]);
let objectPersonTransaction: PersonTransaction = new PersonTransaction(myObjectClass);

console.log('Ingreso de nueva persona '+JSON.stringify(objectPersonTransaction.createPerson(dataNuevaPersona)));