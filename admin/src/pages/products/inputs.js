// let columns = ['Modelo', 'Marca', 'Img', 'Precio', 'Categoria','Tipo', 'Disponibles', 'Id' ]

let columns = [
    { field: 'model', headerName: 'Modelo', width: 130 },
    { field: 'brand', headerName: 'Marca', width: 130 },
    { field: 'image', headerName: 'Imagen', width: 130 },
    { field: 'price', type: 'number', headerName: 'Precio', width: 130 },
    { field: 'category', headerName: 'Categoria', width: 150 },
    { field: 'type', headerName: 'Tipo', width: 180 },
    { field: 'stock', type: 'number', headerName: 'Disponible', width: 120 },
    { field: 'id', headerName: 'ID', width: 250 },
    { field: '', headerName: 'EDITAR', width: 250 },
]


export default columns;