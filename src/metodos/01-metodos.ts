import { dataPersona } from '../datasource/dataIPersona'
export interface IPersona {
    id: number,
    name: string,
    age: number,
    phone?: string
}

export class MiClase {

    private dataPersona: IPersona[] = dataPersona;

    mostrarValoresArrayPersona(){
        console.log(JSON.stringify(dataPersona));
    }

    buscarPersonaById(idPersona: number) {
        // find: busca un objeto de acuerdo a un criterio.
        // El criterio depende de los atributos de los objetos del array
        // El criterio compara valores y devuelve un objeto o un valor undefined
        //let personaByfind: IPersona | undefined = dataPersona.find( persona => persona.id == idPersona );
        let personaByfind: any = dataPersona.find( persona => persona.id == idPersona );
        console.log(`Persona: ${JSON.stringify(personaByfind)}`);
    }

    buscarPersonaByAge(minorAge: number, maxAge: number) {
        // filter: busca varios objectos de acuerdo a un criterio.
        // El criterio depende de los atributos de los objetos del array
        // El criterio compara valores y devuelve un grupo de objetos o un array vacio []
        let personaByfilter: IPersona[] = dataPersona.filter( persona => 
            (persona.age >= minorAge && persona.age <= maxAge));
        console.log(`Personas: ${JSON.stringify(personaByfilter)}`);
    }

    buscarPorNombre(inputText: string){
        let personaByFilter: IPersona[] = dataPersona.filter( persona => {
            if(persona.name.toLocaleLowerCase().includes(inputText.toLocaleLowerCase())){
                return persona;
            }
        });
        console.log(`Personas: ${JSON.stringify(personaByFilter)}`);
    }
}