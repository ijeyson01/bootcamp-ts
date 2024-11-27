// Métodos
import { dataPersona } from '../datasource/dataIPersona'

export interface IPersona {
    id: number,
    name: string,
    age: number,
    phone?: string
}

class MiClase {

    dataPersona: IPersona[] = dataPersona; 
}