import React from 'react';
import SideBar from '../SideBar/SideBar';
import './GraficoDetalles.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import {grafico, graficoById } from '../../redux/actions';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



 export default function GraficoById () {
 const {id} = useParams()
 const dispatch = useDispatch()
 const graficoId = useSelector(state => state.graficosId);
 const userToken = localStorage.user
 
 useEffect(()=>{
 dispatch(grafico(userToken))
 dispatch(graficoById('62d4d94dda220153870d778e', userToken))
 }, [])
console.log('que llega aqui', graficoId)

  
const data= [];
 for(let i= 0; i< graficoId.length; i++){
    data.push({
        quantity: graficoId[i].quantity,
        date: graficoId[i].date,
    })
 }
 console.log(data);



    return (
      <div className='contenedor'>
        <SideBar />
       <div className='newcontenedor'>
          <div className='top'>
            <h1 className='title'> Gráfico de {graficoId.model}</h1>
            </div>
        <ResponsiveContainer width="95%" height={500}>
        <BarChart className='barchart'
          data={data}
          barSize={20}
        >
          <XAxis dataKey="date" className='x' />
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
    
  