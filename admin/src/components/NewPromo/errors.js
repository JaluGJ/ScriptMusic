export function validate(input){
    let error = {}
    if(input.namePromo.trim().length < 3){
        error.namePromo = 'El nombre de la promoción debe tener al menos 3 caracteres.'
    }
    if(!input.namePromo){
        error.namePromo = 'El nombre de la promoción es obligatorio.'
    }
    if(input.description.trim().length < 10){
        error.description = 'La descripción debe tener al menos 10 caracteres.'
    }
    if(input.description.trim().length === 0){
        error.description = 'La descripción es obligatoria.'
    }
    if(!input.typePromo){
        error.typePromo = 'El tipo de promoción es obligatorio.'
    }
    if(input.typePromo !== 'Descuento' && input.typePromo !== '2X1' && input.typePromo !== 'Combo'){
        error.typePromo = 'El tipo de promoción es obligatorio.'
    }
    if(input.price < 1){
        error.price = 'El precio debe ser mayor a cero.'
    }
    if(!input.price){
        error.price = 'El precio es obligatorio.'
    }
    if(input.stock < 1){
        error.stock = 'La disponibilidad debe ser mayor a cero.'
    }
    if(!input.stock){
        error.stock = 'La disponbibilidad es obligarotia.'
    }
    if(input.products.length < 1){
        error.products = 'Debe agregar al menos un producto.'
    }
    if(input.typePromo === 'Combo' && input.products.length < 2){
        error.products = 'Para un combo debe elegir mínimo 2 productos.'
    }
    if(input.products.length >= 2 && input.typePromo === 'Descuento'){
        error.products = 'Para un descuento debe elegir máximo 1 producto.'
    }
    if(input.products.length >= 2 && input.typePromo === '2X1'){
        error.products = 'Para un 2X1 debe elegir máximo 1 producto.'
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