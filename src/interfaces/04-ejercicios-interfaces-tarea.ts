// DEFINIR AUTO
//1. DEFINIR LA INTERFAZ DEL OBJETO AUTO: MARCA, ANIO, COLOR, TIPO, NUMERO_PUERTAS - OK
//2. EN LA INTERFAZ DEFINIR UNA FUNCIÓN (OPCIONAL) - OK
//3. MOSTRAR EN CONSOLA VALORES DESESTRUCTURADOS (OBLIGATORIO) - OK
//4. GENERAR UN MÉTODO CON 2 VARIABLES PARA ESTRUCTURAR UN OBJETO DE TIPO AUTO (OBLIGATORIO) - OK

const anioAutomatico = 2022;
// punto 1.
interface auto {
    marca: string,
    anio: number,
    color: string,
    numero_puertas: number,
    tipo?: string,
    automatico?(): boolean
}

let miAuto: auto = {
    marca: 'Changan',
    anio: 2018,
    color: 'negro',
    numero_puertas: 4,
    automatico() {
        if(this.anio >= anioAutomatico) {
            return true;
        } else {
            return false;
        }
    },
}

// punto 3.
//console.log('DESESTRUCTURACION DE UN OBJETO:')
//console.log('La marca de mi auto es: '+ miAuto.marca + ' y el anio de fabricacion es ' + miAuto.anio);
// COMPARACIÓN ESTRÍCTA: La comparación estrícta compara valores y tipo de dato
//let valorAutomatico: string = miAuto.automatico!() === true ? 'SI' : 'NO';
//console.log(`Mi auto es automatico: ${valorAutomatico}`);


// punto 4.
function nuevoAuto(valoresTexto: any, valoresNumeros: any) : auto {
    let [anio , numero_puertas] = [valoresNumeros.anio, valoresNumeros.numero_puertas];

    let nuevoAuto: auto = {
        marca: valoresTexto.marca,
        anio: anio,
        color: valoresTexto.color,
        numero_puertas: numero_puertas,
        automatico() {
            if(this.anio >= anioAutomatico) {
                return true;
            } else {
                return false;
            }
        }
    }
    return nuevoAuto;
}

const valoresTexto = {
    marca: 'Audi',
    color: 'Rojo'
}

const valoresNumeros = {
    anio: 2022,
    numero_puertas: 4
}
console.log(`
    
    `)
let nuevoAuto2 =  nuevoAuto(valoresTexto, valoresNumeros);
console.log('La marca de mi auto es: '+ nuevoAuto2.marca + ' y el anio de fabricacion es ' + nuevoAuto2.anio);
// COMPARACIÓN ESTRÍCTA: La comparación estrícta compara valores y tipo de dato
let valorAutomaticoAuto2: string = nuevoAuto2.automatico!() === true ? 'SI' : 'NO';
console.log(`Mi auto es automatico: ${valorAutomaticoAuto2}`);
//console.log('EJERCICIO ESTRUCTURACIÓN DE UN OBJETO');
//console.log(`Mi nuevo auto es: ${JSON.stringify(nuevoAuto(valoresTexto, valoresNumeros))}`)
