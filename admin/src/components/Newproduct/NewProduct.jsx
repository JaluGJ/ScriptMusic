import NavBar from '../Navbar/NavBar'
import SideBar from '../SideBar/SideBar'
import './NewProduct.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, getAllProducts } from '../../redux/actions'
import { useState } from 'react';

export default function NewProduct({inputs, title}){
    const categories = useSelector(state => state.categories)
    const types = useSelector(state=> state.types)
    const dispatch  =  useDispatch()

    const [file, setFile] = useState('')

    useEffect(() => {
        dispatch(getAllProducts());
    }, [])

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

    console.log(input)

    function handleinput(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e){
        dispatch(addProduct(input))
    }
    return(
        <div className="new">
        <SideBar />
        <div className="newcontainer">
            <NavBar />
            <div className="top">
                <h1 className="title"> Crear nuevo producto. </h1>
            </div>
            <div className="bottom">
                <div className="left">
                    <img 
                        src={file ? URL.createObjectURL(file) 
                        : 'https://maxler.com/local/templates/maxler/assets/img/not-found.png'} 
                    alt="" />
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


                            <label>Modelo</label>
                            <input 
                            type="text" 
                            placeholder='Paloma Estudio Satinada'
                            name='model'
                            value={input.model}
                            onChange={(e) => handleinput(e)}/>

                            <label>Marca</label>
                            <input 
                            type="text" 
                            placeholder='Admira'
                            name='brand'
                            value={input.brand}
                            onChange={(e) => handleinput(e)}/>

                            <label>Precio</label>
                            <input 
                            type="number" 
                            placeholder='135'
                            name='price'
                            value={input.price}
                            onChange={(e) => handleinput(e)}/>

                            <label>Disponibles</label>
                            <input 
                            type="number" 
                            placeholder='50'
                            name='stock'
                            value={input.stock}
                            onChange={(e) => handleinput(e)}/>


                                <label> Categoria </label>
                            <select name='category'
                            onChange={e => handleinput(e)}>
                                { categories.map(e =>
                                <option value={e}>{e}</option>)}
                            </select>
                                <label> Tipo </label>
                            <select name='type'
                            onChange={e => handleinput(e)}>
                                { types.map(e =>
                                <option value={e}>{e}</option>)}
                            </select>

                            <label>Descripción</label>
                            <textarea 
                            placeholder='Descripción del producto, caracteristicas o pie promocional'
                            name='description'
                            value={input.description}
                            onChange={(e) => handleinput(e)}/>
                            <button>CREAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}