import React from 'react';
import SideBar from '../SideBar/SideBar';
import './GraficoDetalles.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams, Link} from 'react-router-dom';
import {grafico, graficoById } from '../../redux/actions';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



 export default function GraficoById () {
 const {id} = useParams()
 const dispatch = useDispatch()
 const graficoId = useSelector(state => state.graficosId);
 const userToken = localStorage.user
 
 useEffect(()=>{
 dispatch(grafico(userToken))
 dispatch(graficoById(id, userToken))
 }, [])
console.log('que llega aqui', graficoId)

  
    const data= [];
    for(let i = 0; i < graficoId.length; i++){
        data.push({
            date: graficoId[i].date,
            quantity: graficoId[i].quantity,
        })
    }
 
 console.log(data);



    return (
      <div className='coontenedor'>
        <SideBar />
       <div className='neewcontenedor'>
          <div className='toop'>
          <Link to={'/products'} style={{ textDecoration: 'none' }} >
                        <button> <ArrowBackIcon /> ATRAS</button>
                    </Link>
            <h1 className='tiitle'> Gráfico de {graficoId.model}</h1>
            </div>
        <ResponsiveContainer width="95%" height={500}>
        <BarChart className='baarchart'
          data={data}
          barSize={20}
        >
          <XAxis dataKey="date" className='xx' />
          <YAxis dataKey="quantity"/>
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="quantity" fill="#DD8643" background={{ fill: '#eee' }} />
        </BarChart>
        </ResponsiveContainer>
        
         </div>
    
       </div>
      );
    }
    
  