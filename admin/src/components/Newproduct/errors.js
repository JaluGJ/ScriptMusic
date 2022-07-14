export function validate(input){
    let error = {}
    if(!input.model){
        error.model = 'El campo modelo es obligatorio.'
    }
    if(input.model.trim().length < 3){
        error.model = 'El modelo debe tener al menos 3 caracteres.'
    }
    if(!input.brand){
        error.brand = 'El campo marca es obligatorio.'
    }
    if(input.brand.trim().length < 3){
        error.brand = 'La marca debe tener al menos 3 caracteres.'
    }
    if(!input.price){
        error.price = 'El campo precio es obligatorio.'
    }
    if(!input.type){
        error.type = 'Debes seleccionar un tipo para el producto.'
    }
    if(!input.category){
        error.category = 'Debes seleccionar una categoria para el producto.'
    }
    if(!input.stock){
        error.stock = 'El campo disponibles es obligatorio.'
    }
    if(!input.image.includes('https://')){
        error.image = 'El campo debe ser un link (Ex: https://).'
    }
    if(!input.image){
        error.image = 'El campo imagen es obligatorio.'
    }
    if(input.description.trim().length < 10){
        error.description = 'Es necesaria una descripción del producto.'
    }
    if(input.description.length < 10){
        error.description = 'La descripción debe tener al menos 10 caracteres.'
    }
    if (!/(https?:\/\/.*\.(?:png))/i.test(input.image)){
        error.image = 'El formato debe ser ".png".'
    }
    if(input.price < 0){
        error.price = 'El precio debe ser mayor a 0.'
    }
    if(input.price > 100000){
        error.price = "El precio no puede ser mayor o igual a 100000."
    }
    if(input.stock <= -1){
        error.stock = 'El stock debe ser mayor o igual a 0.'
    }
    if(input.stock > 200){
        error.stock = 'El stock debe ser menor o igual a 200.'
    }
    if(input.category === "Categoria"){
        error.category = 'Debes seleccionar una categoria valida para el producto.'
    }
    if(input.type === "Tipo"){
        error.type = 'Debes seleccionar un tipo valido para el producto.'
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