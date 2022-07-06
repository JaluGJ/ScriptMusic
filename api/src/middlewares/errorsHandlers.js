module.exports = (error, request, response, next) => {
    console.error(err)

    if(error.name === "CastError"){
        return response.status(400).json({
            error: "Invalid ID",
            message: error.message
        }).end()
    }
    return response.status(500).json({
        error: "Server error",
        message: error.message
    }).end()
}