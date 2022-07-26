import React from 'react';
import SideBar from '../SideBar/SideBar';
import './Grafico.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { grafico } from '../../redux/actions';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';


 export default function Grafico () {
 const dispatch = useDispatch()
 const graf = useSelector(state => state.graficos);
 const userToken = localStorage.user;
 
 useEffect(()=>{
 dispatch(grafico(userToken))
 }, [])
console.log(graf)

  
const data= [];
 graf.map(item =>{
  data.push({
    category: item.category,
    ventas: item.quantity,
  })
 })
 console.log(data);



    return (
      <div className='contenedor'>
         <SideBar />
        <div className='newcontenedor'>
          <div className='toop'>
            <h1 className='title'> Grafico de ventas</h1>
        <ResponsiveContainer className="responsive">
        <BarChart className='margin'
          data={data}
          barSize={30}
        >
          <XAxis dataKey="category" className='x'  />
          <YAxis dataKey="ventas"/>
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="4 4" />
          <Bar dataKey="ventas" className='bar' />
        </BarChart>
        </ResponsiveContainer>
        </div>
        </div>
    
        </div>
      );
    }
    
  
    


    


