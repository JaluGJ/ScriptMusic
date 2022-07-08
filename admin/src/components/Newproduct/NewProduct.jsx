import NavBar from '../Navbar/NavBar'
import SideBar from '../SideBar/SideBar'
import './NewProduct.scss'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllProducts} from '../../redux/actions'

export default function NewProduct(){
    const categories = useSelector(state => state.categories)
    const types = useSelector(state=> state.types)
    const dispatch  =  useDispatch()


    useEffect(() => {
        dispatch(getAllProducts());
    }, [])

    
    console.log(categories)

    return(
        <div className="new">
        <SideBar />
        <div className="newcontainer">
            <NavBar />
            <div className="top">
                <h1 className="title">Crear nuevo producto.</h1>
            </div>
            <div className="bottom">
                <div className="left">
                    <img src="https://maxler.com/local/templates/maxler/assets/img/not-found.png" alt="" />
                </div>
                <div className="rigth">
                    <form>
                        <div className="formInput">
                           

                            <label> <AddPhotoAlternateIcon/> </label>
                            <input type="file"/>
                            <label>Modelo</label>
                            <input type="text" placeholder='Paloma Estudio Satinada'/>
                            <label>Marca</label>
                            <input type="text" placeholder='Admira'/>
                            <label>Precio</label>
                            <input type="number" placeholder='135'/>
                            <label>Disponibles</label>
                            <input type="number" placeholder='50'/>

                                <label>Categoria </label>
                            <select>
                                { categories.map(e =>
                                <option value={e}>{e}</option>)}
                            </select>
                                <label> Tipo </label>
                            <select>
                                { types.map(e =>
                                <option value={e}>{e}</option>)}
                            </select>

                            <label>Descripción</label>
                            <textarea placeholder='Descripción del producto, caracteristicas o pie promocional'/>
                            <button>CREAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}