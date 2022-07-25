export function validate(input){
    let error = {}
    if(!input.firstName){
        error.firstName = 'El campo es obligatorio.'
    }
    if(input.firstName.trim().length < 3){
        error.firstName = 'El nombre debe tener al menos 3 caracteres.'
    }
    if(!input.lastName){
        error.lastName = 'El campo es obligatorio.'
    }
    if(input.lastName.trim().length < 3){
        error.lastName = 'El apellido debe tener al menos 3 caracteres.'
    }
    if(!input.email){
    error.email= 'El campo es obligatorio.'
    }
   let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(!emailRegex.test(input.email)){
    error.email = 'el email es requerido'
    }

    return error;
}

export function checkprops(obj) {
    for (var key in obj) {
        if (obj[key] !== null && obj[key] !== '')
            return false;
    }
    return true;
}