import { useState } from 'react';
import './Login.scss';
import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../../redux/actions'
import logo from '../../assets/logo.png'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [input, setInput] = useState({
        username : '',
        password: ''
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(loginUser(e))
        navigate('/home')
    }

    return (
        <div className="login">
            <div className="left">
                <img src={logo} alt="" />
                <h1>Script Music</h1>
                <h2>Panel de administrador</h2>
            </div>
           
           
            <div className="rigth">
                <form className="form" onSubmit={e=> handleSubmit(e)}>
                    <label> Usuario </label>
                    <input 
                    type="text" 
                    name= 'username'
                    onChange={e => handleChange(e)} 
                    value={input.username} 
                     />
                    <label > Contraseña </label>
                    <input 
                    type='password' 
                    name='password'
                    onChange={e => handleChange(e)} 
                    value={input.password} 
                     />
                    <button>INGRESAR</button>
                </form>
            </div>
        </div>
    )
}

export default Login;