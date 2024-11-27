interface Persona {
    nombres?: string,
    apellidos: string,
    fnacimiento: number | string | {} | null | '2000-01-01' | undefined,
    direccion?: string | string[],
    casado?: boolean,
    genero?: string,
    setNombre(nombre: string): void, // función con un parámetro que no devuelve nada 
    getNombre?(): string, // función que devuelve un string
    calcularEdad(): number // función que devuelve un string en base a la fecha de nacimiento
}

let personaEjemplo: Persona = {
    apellidos: 'Salvador Ochoa',
    fnacimiento: undefined,
    direccion: 'Duran, Urb. La Martina',
    genero: 'M',
    casado: true,
    calcularEdad() {
        this.fnacimiento//código
        return 10;
    },
    setNombre(nombre) {
        this.nombres = nombre;
    },
    getNombre() {
        return this.nombres!;
    }
}

//USO DE LA FUNCIÓN SET NOMBRE
personaEjemplo.setNombre('Xavier Eduardo');
// USO DE LA INTERPOLACIÓN ${} DE ATRIBUTOS DE LA INTERFAZ Y CONCATENACIÓN CON LAS TÍLDES INVERSAS 
console.error(`La edad de ${personaEjemplo.nombres} ${personaEjemplo.apellidos} es: ${personaEjemplo.calcularEdad()}`);
