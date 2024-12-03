import { EMPTY_RESULT } from "../global/constants";
import { MyClassPerson } from "./01-clases";


export class PersonProcess {

    private lperson: MyClassPerson[];

    constructor(lperson: MyClassPerson[]){
        this.lperson = lperson;
    }


    getPersonByIdentification(identification: string): MyClassPerson | undefined{
        let personByIdentification = this.lperson.find(person => person.getIdentification() === identification);
        return personByIdentification;
    }

    getAllPerson(){
        return this.lperson;
    }

    addPerson(person: MyClassPerson) {
        this.lperson.push(person);
    }
}