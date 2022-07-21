import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from '../../components/SideBar/SideBar';
import List from '../../components/tableproducts/List';
import './Products.scss';
import { getAllProducts } from '../../redux/actions'
import columns from './inputs'

const Products = () => {
    const dispatch = useDispatch()
    const rows = useSelector(state => state.products)
    
    useEffect(() => {
        dispatch(getAllProducts());
    }, [])
    const userToken = localStorage.user

    return(
        <div className="products">
            {console.log(userToken)}
                <SideBar/>
            <div className="container">
                <List 
                tipo= 'Producto'
                title = 'Productos existentes'
                rows = {rows}
                columns = {columns}
            /> 
                {/* agregar rows y columns como parametros */}
            </div>
        </div>
    )
}

export default Products;