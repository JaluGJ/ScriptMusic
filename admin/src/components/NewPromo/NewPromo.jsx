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


export default function NewPromo({logout}){
    const dispatch = useDispatch();
    const userToken = localStorage.user
    const promoProducts = useSelector(state => state.products.map(r => r.model))
    const sortProducts = promoProducts.sort((a, b) => {
        if (a > b) return 1;
            if (a < b) return -1;
            return 0;
    })
    const promoType = ['Descuento', '2X1', 'Combo']

    useEffect(() => {
        dispatch(getAllProducts())
        dispatch(getAllPromos(userToken));
        setError(validate(input))
    }, [])

    const [error, setError] = useState({})
    const [input, setInput] = useState({
        namePromo: '',
        typePromo: '',
        description: '',
        price: '',
        stock: '',
        products: [],
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
            window.location.reload()
            return alert('Por favor verifique los campos')
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
            namePromo: '',
            typePromo: '',
            description: '',
            price: '',
            stock: '',
            products: [],
        })
    }

    function handleSelectProduct(e) {
        if (input.products.includes(e.target.value)) {
            for (let i = 0; i < input.products.length; i++) {
              if (input.products[i] === e.target.value) {
                input.products.splice(i, 1);
              }
            }
            setInput({
              ...input,
              products: input.products,
            });
            setError(validate({
                ...input,
            }))
            e.target.value = "Productos";
          } else {
            setInput({
              ...input,
              products: [...input.products, e.target.value],
            });
            setError(validate({
                ...input,
                products: e.target.value
            }))
            e.target.value = "Productos";
          }
    }

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
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="formInputPromo">

                            <label>Productos</label>
                            <select 
                                name='products'
                                defaultValue="Productos"
                                onChange={(e) => handleSelectProduct(e)}>
                                <option disabled={true} hidden>Productos</option>
                                {sortProducts.map((e, i) =>
                                    <option value={e} key={i}>{e}</option>)}
                            </select>
                            <ul>{input.products.map((e, i) => <b><li key={i}>{e}</li></b>)}</ul>
                            {error.products && (
                                <p>{error.products}</p>
                            )}

                            <label>Nombre Promoción</label>
                            <input 
                                type='text'
                                placeholder='Nombre de la promoción'
                                name='namePromo'
                                value={input.namePromo}
                                onChange={(e) => handleinput(e)}
                            />
                            {error.namePromo && (
                                <p>{error.namePromo}</p>
                            )}

                            <label>Promoción</label>
                            <select 
                                name='typePromo'
                                defaultValue="Promoción"
                                onChange={e => handleinput(e)}>
                                <option disabled={true} hidden>Promoción</option>
                                {promoType.map((e, i) =>
                                    <option value={e} key={i}>{e}</option>)}
                            </select>
                            {error.typePromo && (
                                <p>{error.typePromo}</p>
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