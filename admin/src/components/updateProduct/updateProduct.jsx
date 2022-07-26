import SideBar from '../SideBar/SideBar'
import './updateProduct.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getOneProduct, updateProduct, clearCache } from '../../redux/actions'
import { useState } from 'react';
import { validate, checkprops } from './errors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams, Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Loading from '../Loading/Loading'

export default function UpdateProduct({ logout }) {
    const { id } = useParams()
    const userToken = localStorage.user;
    const product = useSelector(state => state.product)
    const dispatch = useDispatch()
    const categories = ['Guitarra', 'Teclado', 'Bajos', 'Percusión', 'Viento', 'Ukelele', 'Arco']

    const [error, setError] = useState({})
    const [input, setInput] = useState({})

    useEffect(() => {
        setInput({
            model: product.model,
            brand: product.brand,
            price: product.price,
            type: product.type,
            category: product.category,
            stock: product.stock,
            image: product.image,
            description: product.description,
        })
    }, [product])

    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(getOneProduct(id, userToken))
        return () => {
            dispatch(clearCache())
        }
    }, [])


    function handleinput(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

        setError(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (Object.keys(error).length > 0) {
            window.location.reload()
            return alert('Por favor verifique los campos')
        }
        dispatch(updateProduct(id, input, userToken))
        toast.success('Producto Actualizado', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return (
        <div className="newUpdateProduct">
            <SideBar logout={logout} />
            <ToastContainer />
            <div className="containernewUpdateProduct">
                <div className="topUpdateProduct">
                    <Link to={'/products'} style={{ textDecoration: 'none' }} >
                        <button> <ArrowBackIcon /> ATRAS</button>
                    </Link>
                    <h1 className="titleUpdateProduct"> Actualiza el producto </h1>
                </div>
                {product.length === 0 
                ? <div className="bottomloa"> <Loading className='loading' /></div>
                :
                <div className="bottomUpdateProduct">                        
                    <img src={input.image ? input.image : 'https://www.clipartmax.com/png/full/139-1396744_we-can-help-dropshipping-png.png'} alt="" />
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="formInputUpdateProduct">
                                    
                            <div className="leftUpdateProduct">
                                
                                <label>Imagen</label>
                                <input
                                    key='Imagen'
                                    type="text"
                                    placeholder={product.image}
                                    name='image'
                                    value={input.image}
                                    onChange={(e) => handleinput(e)}
                                    />
                                {error.image && (
                                    <p>{error.image}</p>
                                )}
   
                                <label>Modelo</label>
                                <input
                                    key='Modelo'
                                    type="text"
                                    placeholder={product.model}
                                    name='model'
                                    value={input.model}
                                    onChange={(e) => handleinput(e)} />
                                {error.model && (
                                    <p>{error.model}</p>
                                )}

                                <label>Marca</label>
                                <input
                                    key='Marca'
                                    type="text"
                                    placeholder={product.brand}
                                    name='brand'
                                    value={input.brand}
                                    onChange={(e) => handleinput(e)} />
                                {error.brand && (
                                    <p>{error.brand}</p>
                                )}

                                <label>Precio</label>
                                <input
                                    key='Precio'
                                    type="number"
                                    placeholder={product.price}
                                    name='price'
                                    value={input.price}
                                    onChange={(e) => handleinput(e)} />
                                {error.price && (
                                    <p>{error.price}</p>
                                )}

                                <label>Disponible</label>
                                <input
                                    key='Disponible'
                                    type="number"
                                    placeholder={product.stock}
                                    name='stock'
                                    value={input.stock}
                                    onChange={(e) => handleinput(e)} />
                                {error.stock && (
                                    <p>{error.stock}</p>
                                )}

                            </div>
                            
                            <div className="rigthUpdateProduct">
                                   
                                <label>Tipo</label>
                                <input
                                    key='Tipo'
                                    type="text"
                                    placeholder={product.type}
                                    name='type'
                                    value={input.type}
                                    onChange={(e) => handleinput(e)} />
                                {error.type && (
                                    <p>{error.type}</p>
                                )}

                                <label>Categoria</label>
                                <select name='category' defaultValue="Categoria"
                                    onChange={e => handleinput(e)}>
                                    <option disabled={true}>{input.categories}</option>
                                    {categories.map(e =>
                                        <option value={e} key={e}>{e}</option>)}
                                </select>
                                {error.category && (
                                    <p>{error.category}</p>
                                )}

                                <label>Descripción</label>
                                <textarea
                                    placeholder={product.description}
                                    name='description'
                                    value={input.description}
                                    onChange={(e) => handleinput(e)} />
                                {error.description && (
                                    <p>{error.description}</p>
                                )}

                                {!Object.keys(error).length && !checkprops(input) ?
                                    <button >ACTUALIZAR PRODUCTO</button> :
                                    <button disabled >ACTUALIZAR PRODUCTO</button>
                                }
                            </div>
                        </div>
                    </form>                        
                </div>
                }
            </div>
        </div>
    )
}