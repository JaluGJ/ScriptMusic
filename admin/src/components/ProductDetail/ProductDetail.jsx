import './ProductDetail.scss'
import SideBar from '../../components/SideBar/SideBar';
import NavBar from '../../components/Navbar/NavBar';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct } from '../../redux/actions';
import { useState } from 'react';

export default function ProductDetail({logout}) {
    const {id} = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)

        var [input, setInput] = useState({
        model: product.model,
        brand: product.brand,
        price: product.price,
        type: product.type,
        category: product.category,
        stock: product.stock,
        image: product.image,
        description: product.description,
    })

    useEffect(() => {
        dispatch(getOneProduct(id))
        console.log(input)
    },[])

    return (
        <div className="productdetail">
            <SideBar logout={logout}/>
            <div className="container">
                <NavBar />

                <div className="top">
                    <Link to='/products' style={{ textDecoration: "none" }}>
                    <button> ATRAS </button>
                    </Link>
                    <h1 className='title' > Detalles y edición de producto. </h1>
                </div>

                <div className="bottom">
                    <div className="left">
                        LEFT
                    </div>
                    <div className="rigth">
                        RIGTH
                    </div>
                </div>
            </div>
        </div>
    )
}