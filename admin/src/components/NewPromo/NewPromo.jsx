import './NewPromo.scss'
import SideBar from "../SideBar/SideBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { validate, checkprops } from "./errors";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate, Link} from 'react-router-dom';
import { addPromo, getAllProducts, getAllPromos } from "../../redux/actions";
import UploadImg from '../../ImageUpload/uploadingImg';
import { Button } from '@mui/material';

export default function NewPromo({logout}){
    const dispatch = useDispatch();
    const userToken = localStorage.user
    const promoProducts = useSelector(state => state.products)
    
    const promoType = ['Descuento', '2X1', 'Combo']
    useEffect(() => {
        dispatch(getAllProducts())
        dispatch(getAllPromos(userToken));
        setError(validate(input))
    }, [])

    const [error, setError] = useState({})
    const [input, setInput] = useState({
        promoName: '',
        promo: '',
        description: '',
        price: '',
        stock: '',
        image: '',
        items: []
    })   

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
            return toast.error('Por favor, revise los campos en rojo', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        dispatch(addPromo(input, userToken))
        toast.success('Promoción agregada exitosamente', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setInput({
            promoName: '',
            promo: '',
            description: '',
            price: '',
            stock: '',
            image: '',
            items: [],
        })
    }

    function handleSelectProduct(e) {
        const product = promoProducts.find(r => r.id === e.target.value)
        const data = input.items.find(r => r.id === e.target.value)
        if (data) {
            return toast.error('El producto ya esta en la lista', {
                position: "top-center",
                autoClose: 800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } 
            setInput({
              ...input,
              items: [...input.items, product],
            });
            setError(validate({
                ...input,
                items: product
            }))
            e.target.value = "Productos";
    }

        const handleDeleteProduct = (e) => {
            const newProducts = input.items.filter(r => r.id !== e)
            setInput({
                ...input,
                items: newProducts
            })
            setError(validate({
                ...input,
                items: newProducts
            }))
        }

        console.log(input)

    return (
        <div className="newPromo">
            <SideBar logout={logout}/>
            <ToastContainer/>
            <div className="newcontainerPromo">
                <div className="topPromo">
                    <Link to={'/promos'} style={{ textDecoration: 'none' }} >
                        <button> <ArrowBackIcon /> ATRAS</button>
                    </Link>
                    <h1 className="tittlePromo">Crear nueva promoción</h1>
                </div>
                <div className="bottomPromo">
                    <img src={input.image ? input.image : 'https://www.pngkey.com/png/full/339-3394994_png-promotion-taps.png'} alt="" />
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="formInputPromo">

                        <label>Imagen</label>
                            {/* <input
                                type="text"
                                placeholder='URL de la imagen'
                                name='image'
                                value={input.image}
                                onChange={(e) => handleinput(e)} /> */}
                            <UploadImg setInput={setInput} input={input} setError={setError} validate={validate}/>
                            {error.image && (
                                <p>{error.image }</p>
                            )}    

                            <label>Productos</label>
                            <select 
                                name='items'
                                defaultValue="Productos"
                                onChange={(e) => handleSelectProduct(e)}>
                                <option disabled={true} hidden>Productos</option>
                                {promoProducts.map((e) =>
                                    <option value={e.id} key={e.id}>{e.model}</option>)}
                            </select>
                                <ul>{input.items.map((e) => <Button key={e.id} onClick={() => handleDeleteProduct(e.id)}>{e.model}</Button>)}</ul>
                            {error.items && (
                                <p>{error.items}</p>
                            )}

                            <label>Nombre Promoción</label>
                            <input 
                                type='text'
                                placeholder='Nombre de la promoción'
                                name='promoName'
                                value={input.promoName}
                                onChange={(e) => handleinput(e)}
                            />
                            {error.promoName && (
                                <p>{error.promoName}</p>
                            )}

                            <label>Promoción</label>
                            <select 
                                name='promo'
                                defaultValue="Promoción"
                                onChange={e => handleinput(e)}>
                                <option disabled={true} hidden>Promoción</option>
                                {promoType.map((e, i) =>
                                    <option value={e} key={i}>{e}</option>)}
                            </select>
                            {error.promo && (
                                <p>{error.promo}</p>
                            )}

                            <label>Descripción</label>
                            <textarea
                                placeholder='Descripción de la promoción, caracteristicas o pie promocional'
                                name='description'
                                value={input.description}
                                onChange={(e) => handleinput(e)} />
                            {error.description && (
                                <p>{error.description}</p>
                            )}

                            <label>Precio</label>
                            <input
                                type="number"
                                placeholder='135'
                                name='price'
                                value={input.price}
                                min='0'
                                onChange={(e) => handleinput(e)} />
                            {error.price && (
                                <p>{error.price}</p>
                            )}

                            <label>Disponible</label>
                            <input
                                type="number"
                                placeholder='50'
                                name='stock'
                                value={input.stock}
                                min='0'
                                onChange={(e) => handleinput(e)} />
                            {error.stock && (
                                <p>{error.stock}</p>
                            )}                       

                            {!Object.keys(error).length && !checkprops(input) ?
                                <button>CREAR</button> :
                                <button disabled >CREAR</button>
                            }

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}