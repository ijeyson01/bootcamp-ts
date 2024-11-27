interface Persona {
    nombres?: string,
    apellidos: string,
    fnacimiento: number | string | {} | null | '2000-01-01' | undefined,
    direccion?: string | string[],
    casado?: boolean,
    genero?: string,
    setNombre(nombre: string): void,
    getNombre?(): string,
    calcularEdad(): number
}

let persona: Persona = {
    //nombres: 'Xavier Eduardo',
    apellidos: 'Salvador Ochoa',
    fnacimiento: undefined,
    direccion: 'Duran, Urb. La Martina',
    genero: 'M',
    casado: true,
    calcularEdad() {
        this.fnacimiento//..
        return 10;
    },
    setNombre(nombre) {
        this.nombres = nombre;
    },
    getNombre() {
        return this.nombres!;
    }
}


// DESESTRUCTURURACIÓN: ACCEDER A UN ATRIBUTO ESPECIFICO Y USARLO DE MANERA INDEPENDIENTE 
console.log('############################# DATOS DESESTRUCTURADOS #####################');
console.log(`Nombres de la persona: ${personaEjemplo.nombres}`);
console.log(`Apellidos de la persona: ${personaEjemplo.apellidos}`);
console.log(`Direccio(nes) de la persona: ${personaEjemplo.direccion}`);
console.log(`Género de la persona: ${personaEjemplo.genero}
    
    `);

console.log('############################# DATOS ESTRUCTURADOS PRESENTADOS EN FORMATO JSON #####################');
// EJEMPLO DE FORMATO JSON
/*{
    "Nombre": "Jeyson",
    "Apellido": "Jaramillo"
}*/

console.log(` Datos de persona en formato JSON: ${JSON.stringify(personaEjemplo)}`);
console.log(`
    
    `);

console.log('############################# PRESENTACIÓN DEL OBJETO #####################');
console.log(personaEjemplo);



// ESTRUCTURACIÓN: INICIALIZAR UN OBJETO CON VALORES INDEPENDIENTES
// FUNCIÓN QUE CONSTRUYE UN OBJETO PERSONA, DE LA INTERFAZ PERSONA
function definePersona(dataNombres : any, dataInformacionGeneral: any): Persona {
    let [ nombres, apellidos ] = [dataNombres.nombres , dataNombres.apellidos];

    let nuevaPersona: Persona = {
        nombres: nombres,
        apellidos: apellidos,
        fnacimiento: dataInformacionGeneral.fnacimiento,
        calcularEdad() {
            return 10;
        },
        setNombre(nombre) {
            this.nombres = nombre;
        },
    }
    return nuevaPersona;
}
// variable 1 con los datos de la persona, parámetro 1
const dataNombres = {
    nombres: 'Julio',
    apellidos: 'Jaramillo',
    raza: 'Mestiza'
}

// variable 2 con los datos de la persona, parámetro 2
const dataInformacionGeneral = {
    fnacimiento: '2000-12-12',
    telefono: '0999999999',
    email: 'mail@mail.com',
}

// ejecución del método y asignación del resultado en una variable
let dataNuevaPersona = definePersona(dataNombres, dataInformacionGeneral);
// muestra en consola del resultado de un objeto de tipo persona estructurado en formato JSON
console.log(JSON.stringify(dataNuevaPersona));