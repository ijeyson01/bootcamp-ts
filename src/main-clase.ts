import { MyClassPerson } from "./clases/01-clases";
import { Deportista } from "./clases/02-clase-con-herencia";

const objectMyClassPerson: MyClassPerson = new MyClassPerson('Jeyson', 'Jaramillo');
objectMyClassPerson.setBirthDate('2000-00-00');

const objectMyClassPerson2: MyClassPerson = new MyClassPerson('María', 'Jaramillo', '2000-00-00');

console.log(`Persona de la clase: ${objectMyClassPerson.getName()}`);


const bolt: Deportista = new Deportista('Correr', '100m', 'U.', 'Bolt');
console.log(`Persona deportista: ${bolt.getName()} ${bolt.getLastName()}`);
