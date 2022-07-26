import SideBar from "../SideBar/SideBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { validate, checkprops } from "./errors";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate, Link} from 'react-router-dom';

export default function NewPromo({logout}){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userToken = localStorage.user

    useEffect(() => {
        setError(validate(input))
    }, [])

    const [error, setError] = useState({})
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })
}