export function validate(input){
    let error = {}
    if(input.promoName.trim().length < 3){
        error.promoName = 'El nombre de la promoción debe tener al menos 3 caracteres.'
    }
    if(!input.promoName){
        error.promoName = 'El nombre de la promoción es obligatorio.'
    }
    if(input.description.trim().length < 10){
        error.description = 'La descripción debe tener al menos 10 caracteres.'
    }
    if(input.description.trim().length === 0){
        error.description = 'La descripción es obligatoria.'
    }
    if(!input.promo){
        error.promo = 'El tipo de promoción es obligatorio.'
    }
    if(input.promo !== 'Descuento' && input.promo !== '2X1' && input.promo !== 'Combo'){
        error.promo = 'El tipo de promoción es obligatorio.'
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
    if(input.items.length < 1){
        error.items = 'Debe agregar al menos un producto.'
    }
    if(input.promo === 'Combo' && input.items.length < 2){
        error.items = 'Para un combo debe elegir mínimo 2 productos.'
    }
    if(input.items.length >= 2 && input.promo === 'Descuento'){
        error.items = 'Para un descuento debe elegir máximo 1 producto.'
    }
    if(input.items.length >= 2 && input.promo === '2X1'){
        error.items = 'Para un 2X1 debe elegir máximo 1 producto.'
    }
    if(input.image.trim().length === 0){
        error.image = 'La imagen es obligatoria.'
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