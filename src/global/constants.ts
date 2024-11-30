 const FIND_BY_IDENTIFICATION_NOT_FOUND = {
    codigoRespuesta: 'ER001',
    bodyRespuesta: 'No hay registro de un estudiante con la identificacion ingresada'
}

const FIND_BY_COURSE_EMPTY =  {
    codigoRespuesta: 'ER002',
    bodyRespuesta: 'No hay estudiantes para el curso ingresado'
}

const ERROR_REQUEST = {
    codigoRespuesta: 'ER111', 
    bodyRespuesta: 'Petición incorrecta'
}

const TEXT_NOT_FOUND = {
    codigoRespuesta: 'ER101',
   bodyRespuesta: 'Se debe ingresar al menos una letra'
}

const EMPTY_RESULT =  {
    codigoRespuesta: 'ER003',
    bodyRespuesta: 'No hay resultados'
}
const responseSuccefull = (bodyResponse: any) => {
    return {
        codigoRespuesta: 'OK001',
        bodyRespuesta: bodyResponse
    }
}
// EXPORACIÓN GLOBAL DE VARIABLES
module.exports = {FIND_BY_IDENTIFICATION_NOT_FOUND, FIND_BY_COURSE_EMPTY,ERROR_REQUEST, TEXT_NOT_FOUND, EMPTY_RESULT, responseSuccefull}