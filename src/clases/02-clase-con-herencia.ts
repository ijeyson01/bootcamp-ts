import { MyClassPerson } from "./01-clases";

export class Deportista extends MyClassPerson {

    constructor(
        private deporte: string, 
        private categoria: string, 
        identification: string,
        name: string, 
        lastName: string){
        super(identification, name, lastName);
    }

    getDeporte () {
        return this.deporte;
    }

    setDeporte(deporte: string) {
        this.deporte = deporte;
    }

    getCategoria() {
        return this.categoria;
    }

    setCategoria(categoria: string) {
        this.categoria = categoria;
    } 
}

