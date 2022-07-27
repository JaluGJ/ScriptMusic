import AdminProfile from "./AdminProfile"

export  function validate(input) {
    let errors = {}
    if (!input.email) {
        errors.email = 'El campo correo electronico es obligatorio.'
    }

    if (input.email === input.newEmail) {
        errors.email = 'El nuevo correo debe ser diferente al anterior.'
    }

    if (!input.password) {
        errors.password = 'Por favor escriba su contraseña actual.'
    }

    if (!input.newEmail) {
        errors.newEmail = 'Por favor escriba una nueva direccion de correo electronico.'
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(input.email)) {
        errors.email = 'Por favor escriba una dirección de correo electronico valida.'
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(input.newEmail)) {
        errors.newEmail = 'Por favor escriba una dirección de correo electronico valida.'
    }

    return errors;
}

export  function validate2(input) {
    let errors = {}
    if (!input.email) {
        errors.email = 'El campo correo electronico es obligatorio.'
    }
  
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(input.email)) {
        errors.email = 'Por favor escriba una dirección valida.'
    }

    if (!input.password) {
        errors.password = 'Por favor escriba su contraseña actual.'
    }
  
    if (!input.newPassword) {
        errors.newPassword = 'Por favor escriba su nueva contraseña.'
    }

    if(input.password === input.newPassword){
        errors.newPassword = 'La contraseña nueva debe ser diferente a la actual'
    }

    return errors;
}