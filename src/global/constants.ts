 export const  FIND_BY_IDENTIFICATION_NOT_FOUND = {
    codigoRespuesta: 'ER001',
    bodyRespuesta: 'No hay registro de un estudiante con la identificacion ingresada'
}

export const  FIND_BY_COURSE_EMPTY =  {
    codigoRespuesta: 'ER002',
    bodyRespuesta: 'No hay estudiantes para el curso ingresado'
}

export const  ERROR_REQUEST = {
    codigoRespuesta: 'ER111', 
    bodyRespuesta: 'Petición incorrecta'
}

export const  TEXT_NOT_FOUND = {
    codigoRespuesta: 'ER101',
   bodyRespuesta: 'Se debe ingresar al menos una letra'
}

export const  EMPTY_RESULT =  {
    codigoRespuesta: 'ER003',
    bodyRespuesta: 'No hay resultados'
}

export const  EMPTY_RESULT_PERSON =  {
    codigoRespuesta: 'ER003',
    bodyRespuesta: 'No hay resultados de alguna persona con la identificacion ingresada'
}

export const  EMPTY_RESULT_ADDRESS =  {
    codigoRespuesta: 'ER003',
    bodyRespuesta: 'No existe direccion de origen de la persona ingresada, debe ingresar la direccion del usuario'
}

export const  EMPTY_RESULT_DESTINATION =  {
    codigoRespuesta: 'TR001',
    bodyRespuesta: 'Sin viajes registrados'
}

export const  responseSuccefull = (bodyResponse: any) => {
    return {
        codigoRespuesta: 'OK001',
        bodyRespuesta: bodyResponse
    }
}

export const  responseException = (messageException: string) => {
    return {
        codigoRespuesta: 'UE001',
        bodyRespuesta: messageException
    }
}
// EXPORACIÓN GLOBAL DE VARIABLES
/*module.exports = { FIND_BY_IDENTIFICATION_NOT_FOUND, 
    FIND_BY_COURSE_EMPTY, ERROR_REQUEST, TEXT_NOT_FOUND, EMPTY_RESULT, 
    EMPTY_RESULT_PERSON, EMPTY_RESULT_ADDRESS, EMPTY_RESULT_DESTINATION,
    responseSuccefull, responseException } */