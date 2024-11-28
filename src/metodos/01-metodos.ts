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
        // find: buscar de acuerdo a un criterio.
        // El criterio depende de los atributos de los objetos del array
        
    }
}