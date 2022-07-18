import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../components/Navbar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import List from '../../components/tableproducts/List';
import './Products.scss';
import { getAllProducts } from '../../redux/actions'
import columns from './inputs'

const Products = ({logout}) => {
    const dispatch = useDispatch()
    const rows = useSelector(state => state.products)
    useEffect(() => {
        dispatch(getAllProducts());
    }, [])



    return(
        <div className="products">
                <SideBar logout={logout}/>
            <div className="container">
                {/* <NavBar /> */}
                <List 
                rows = {rows}
                columns = {columns}
                title = 'Productos existentes'
            /> 
                {/* agregar rows y columns como parametros */}
            </div>
        </div>
    )
}

export default Products;