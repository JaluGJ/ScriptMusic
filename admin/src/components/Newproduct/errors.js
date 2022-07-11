export function validate(input){
    let error = {}
    if(!input.model){
        error.model = 'El campo modelo es obligatorio.'
    }
    if(!input.brand){
        error.brand = 'El campo marca es obligatorio.'
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
        error.image = 'El campo debe ser un link (Ex: https://)'
    }
    if(!input.image){
        error.image = 'El campo imagen es obligatorio.'
    }
    if(!input.description){
        error.description = 'Es necesaria una descripción del producto.'
    }
    if (!/(https?:\/\/.*\.(?:png))/i.test(input.image)){
        error.image = 'El formato debe ser .png'
    }

    return error;
}