import SideBar from '../SideBar/SideBar'
import './updateProduct.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getOneProduct, updateProduct, clearCache } from '../../redux/actions'
import { useState } from 'react';
import { validate, checkprops } from './errors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

export default function UpdateProduct({ inputs, title, logout}){
    const { id } = useParams()
    const types = useSelector(state=> state.types)
    const product = useSelector(state=> state.product)
    const dispatch  =  useDispatch()
    const categories = ['Guitarra', 'Teclado', 'Bajos', 'Percusión', 'Viento', 'Ukelele', 'Arco']
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

    const [error, setError] = useState({})
    const [input, setInput] = useState({
        model: product.model,
        brand: product.brand,
        price: product.price,
        type: product.type,
        category: product.category,
        stock: product.stock,
        image: product.image,
        description: product.description
    })
    useEffect(() => {
        dispatch(getOneProduct(id))
        dispatch(getAllProducts())
        return () => {
            dispatch(clearCache())
        }
    }, [])


    function handleinput(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })

        setError(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        if(Object.keys(error).length > 0){
            window.location.reload()
            return alert('Por favor verifique los campos')
        }
        console.log(input)
        dispatch(updateProduct(id, input))
        toast.success('Producto agregado exitosamente', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    return(

        product.length === 0 ? <div>Cargando...</div> :
        <div className="new">
        <SideBar logout={logout}/>
        <ToastContainer />
        <div className="newcontainer">
            <div className="top">
                <h1 className="title"> Actualiza el producto </h1>
            </div>
            <div className="bottom">
                <div className="left">
                    <img src={product.image ? product.image : 'https://maxler.com/local/templates/maxler/assets/img/not-found.png'} alt="" />

                </div>
                <div className="rigth">
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="formInput">
                           
                            <label> Imagen </label>
                            <input 
                            type="text"
                            placeholder='Agrega un link de imagen'
                            name='image'
                            value={product.image}
                            onChange={(e) => handleinput(e)}
                            />
                            {error.image && (
                            <p>{ error.image }</p>
                            )}


                            <label>Modelo</label>
                            <input 
                            type="text" 
                            placeholder='Paloma Estudio Satinada'
                            name='model'
                            value={product.model}
                            onChange={(e) => handleinput(e)}/>
                            {error.model && (
                            <p>{ error.model }</p>
                            )}

                            <label>Marca</label>
                            <input 
                            type="text" 
                            placeholder='Admira'
                            name='brand'
                            value={product.brand}
                            onChange={(e) => handleinput(e)}/>
                            {error.brand && (
                            <p>{ error.brand }</p>
                            )}

                            <label>Precio</label>
                            <input 
                            type="number" 
                            placeholder='135'
                            name='price'
                            value={product.price}
                            onChange={(e) => handleinput(e)}/>
                            {error.price && (
                            <p>{ error.price }</p>
                            )}

                            <label>Disponibles</label>
                            <input 
                            type="number" 
                            placeholder='50'
                            name='stock'
                            value={product.stock}
                            onChange={(e) => handleinput(e)}/>
                            {error.stock && (
                            <p>{ error.stock }</p>
                            )}
                            <label> Categoria </label>
                            <select name='category' defaultValue="Categoria"
                            onChange={e => handleinput(e)}>
                            <option disabled={true}>{product.categories}</option>
                            { categories.map(e =>
                            <option value={e} key={e}>{e}</option>)}
                            </select>
                            {error.category && (
                            <p>{ error.category }</p>
                            )}

                            <label> Tipo </label>
                            <select name='type' defaultValue="Tipo"
                            onChange={e => handleinput(e)}>
                            <option disabled={true}>{product.type}</option>
                            { types.map(e =>
                            <option value={e} key={e}>{e}</option>)}
                            </select>
                            {error.type && (
                            <p>{ error.type }</p>
                            )}

                            <label>Descripción</label>
                            <textarea 
                            placeholder='Descripción del producto, caracteristicas o pie promocional'
                            name='description'
                            value={product.description}
                            onChange={(e) => handleinput(e)}/>
                            {error.description && (
                            <p>{ error.description }</p>
                            )}
                            
                            
                            {!Object.keys(error).length && !checkprops(input) ?
                                <button >ACTUALIZAR PRODUCTO</button> : 
                                <button disabled >ACTUALIZAR PRODUCTO</button>   
                            } 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}