import SideBar from '../SideBar/SideBar'
import './NewProduct.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, getAllProducts } from '../../redux/actions'
import { useState } from 'react';
import { validate, checkprops } from './errors';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NewProduct({inputs, title, logout}){
    const types = useSelector(state=> state.types)
    const dispatch  =  useDispatch()
    const navigate = useNavigate()
    const categories = ['Guitarra', 'Teclado', 'Bajos', 'Percusión', 'Viento', 'Ukelele', 'Arco']
    
    useEffect(() => {
        dispatch(getAllProducts());
        setError(validate(input))
    }, [])
    
    const [error, setError] = useState({})
    const [file, setFile] = useState('')
    const [input, setInput] = useState({
        model: '',
        brand: '',
        price: '',
        type: '',
        category: '',
        stock: '',
        image: '',
        description: '',
    })

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
        dispatch(addProduct(input))
        toast.success('Producto agregado exitosamente', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        setInput({
            model: '',
            brand: '',
            price: '',
            type: '',
            category: '',
            stock: '',
            image: '',
            description: '',
        })
    }
    return(
        <div className="new">
        <SideBar logout={logout}/>
        <ToastContainer />
        <div className="newcontainer">
            <div className="top">
                <h1 className="title"> Crear nuevo producto. </h1>
            </div>
            <div className="bottom">
                <div className="left">
                    {/* <img 
                        src={file ? URL.createObjectURL(file) 
                        : 'https://maxler.com/local/templates/maxler/assets/img/not-found.png'} 
                    alt="" /> */}
                    <img src={input.image ? input.image : 'https://maxler.com/local/templates/maxler/assets/img/not-found.png'} alt="" />

                </div>
                <div className="rigth">
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="formInput">
                           
                            <label> Imagen </label>
                            {/* <input 
                            type="file" 
                            onChange={e => setFile(e.target.files[0])}/> */}
                            <input 
                            type="text"
                            placeholder='Agrega un link de imagen'
                            name='image'
                            value={input.image}
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
                            value={input.model}
                            onChange={(e) => handleinput(e)}/>
                            {error.model && (
                            <p>{ error.model }</p>
                            )}

                            <label>Marca</label>
                            <input 
                            type="text" 
                            placeholder='Admira'
                            name='brand'
                            value={input.brand}
                            onChange={(e) => handleinput(e)}/>
                            {error.brand && (
                            <p>{ error.brand }</p>
                            )}

                            <label>Precio</label>
                            <input 
                            type="number" 
                            placeholder='135'
                            name='price'
                            value={input.price}
                            // min='1'
                            onChange={(e) => handleinput(e)}/>
                            {error.price && (
                            <p>{ error.price }</p>
                            )}

                            <label>Disponible</label>
                            <input 
                            type="number" 
                            placeholder='50'
                            name='stock'
                            value={input.stock}
                            // min='0'
                            onChange={(e) => handleinput(e)}/>
                            {error.stock && (
                            <p>{ error.stock }</p>
                            )}

                            <label>Tipo</label>
                            <input 
                            type="text" 
                            placeholder='Acústico'
                            name='type'
                            value={input.type}
                            onChange={(e) => handleinput(e)}/>
                            {error.type && (
                            <p>{ error.type }</p>
                            )}


                            <label> Categoria </label>
                            <select name='category' defaultValue="Categoria"
                            onChange={e => handleinput(e)}>
                            <option disabled={true}>Categoria</option>
                            { categories.map(e =>
                            <option value={e} key={e}>{e}</option>)}
                            </select>
                            {error.category && (
                            <p>{ error.category }</p>
                            )}


                            <label>Descripción</label>
                            <textarea 
                            placeholder='Descripción del producto, caracteristicas o pie promocional'
                            name='description'
                            value={input.description}
                            onChange={(e) => handleinput(e)}/>
                            {error.description && (
                            <p>{ error.description }</p>
                            )}
                            
                            
                            {!Object.keys(error).length && !checkprops(input) ?
                                <button >CREAR</button> : 
                                <button disabled >CREAR</button>   
                            } 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}