module.exports = (error, request, response, next) => {
    console.error(error.name)

    if(error.name === "CastError"){
        return response.status(400).json({
            error: "ID Invalido",
            message: error.message
        }).end()
    }
    if(error.name === "TypeError"){
        return response.status(400).json({
            error: "Master... Escribí bien",
            message: error.message
        }).end()
    }
    return response.status(500).json({
        error: "Server error",
        message: error.message
    }).end()
}