interface PersonaBasico {
    nombres?: string,
    apellidos: string,
    fnacimiento: string ,
    direccion?: string | string[],
    casado?: boolean,
    genero?: string
}


let personaEj: PersonaBasico = {
    nombres: 'Xavier Eduardo',
    apellidos: 'Salvador Ochoa',
    fnacimiento: '2000-11-11',
    direccion: 'Duran, Urb. La Martina',
    casado: true,
    genero: 'M'
}


console.log(personaEj);
