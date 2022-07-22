import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from '../../components/SideBar/SideBar';
import List from '../../components/tableproducts/List';
import './Products.scss';
import { getAllProducts } from '../../redux/actions'
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { deleteProduct } from '../../redux/actions';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const Products = () => {
    
    const dispatch = useDispatch()
    const rows = useSelector(state => state.products)

    //--------------------------------------------------------------------------------------------------------------------------------
    function handleDelete(e, id){
        e.preventDefault();
        dispatch(deleteProduct(id, userToken))
        toast.success('Producto Eliminado', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        dispatch(getAllProducts());
    }
    // PARA IMPLEMENTAR EL DELETEPRODUCT SE TRAJO EL INPUTS Y SE ELIMINO,
    // PORQUE NO ESTABA RECIBIENDO EL DISPATH PARA REALIZAR LA ACCION.
    let columns = [
        { 
            field: 'edit',
            headerName: '', 
            headerAlign: 'center', 
            align: 'center',
            width: 30,
            renderCell: (cellValues) => {
                return <Link style={{ textDecoration: "none", color: 'black'}} to={`/products/${cellValues.row.id}`}> <ModeEditIcon /> </Link>
            },
         },
        { field: 'model', headerName: 'Modelo', width: 220, headerAlign: 'center', align: 'left' },
        { field: 'brand', headerName: 'Marca', width: 130, headerAlign: 'center', align: 'center' },
        { field: 'price', type: 'number', headerName: 'Precio', width: 70, headerAlign: 'center', align: 'center' },
        { field: 'category', headerName: 'Categoria', width: 100, headerAlign: 'center', align: 'center' },
        { field: 'type', headerName: 'Tipo', width: 100, headerAlign: 'center', align: 'center' },
        { field: 'stock', type: 'number', headerName: 'Disponible', width: 85, headerAlign: 'center', align: 'center' },    
        { 
            field: 'delete',
            headerName: '', 
            headerAlign: 'center', 
            align: 'center',
            width: 30,
            renderCell: (cellValues) => {
                return  <DeleteIcon onClick={(e) => handleDelete(e, cellValues.row.id)} /> 
            },
         }
    ]
    //--------------------------------------------------------------------------------------------------------------------------------
    
    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch])
    const userToken = localStorage.user

    return(
        <div className="products">
                <SideBar/>
                <ToastContainer/>
            <div className="container">
                <List 
                tipo= 'Producto'
                title = 'Productos existentes'
                rows = {rows}
                columns = {columns}
                /> 
            </div>
        </div>
    )
}

export default Products;