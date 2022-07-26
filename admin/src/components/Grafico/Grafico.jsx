import React from 'react';
import SideBar from '../SideBar/SideBar';
import './Grafico.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { grafico } from '../../redux/actions';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



 export default function Grafico () {
 const dispatch = useDispatch()
 const graf = useSelector(state => state.graficos);
 
 useEffect(()=>{
 dispatch(grafico())
 }, [])
console.log(graf)

  
const data= [];
 graf.map(item =>{
  data.push({
    category: item.items.category,
    date: item.date,
    quantity: item.quantity,
  })
 })
 console.log(data);



    return (
      <div className='contenedor'>
         <SideBar />
        <div className='newcontenedor'>
          <div className='toop'>
            <h1 className='title'> Grafico de ventas</h1>
        <ResponsiveContainer width="90%" height={550}>
        <LineChart
          width={800}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis dataKey="quantity"/>
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="quantity"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="date" stroke="#82ca9d" />
        </LineChart>
        </ResponsiveContainer>
        </div>
        </div>
    
        </div>
      );
    }
    
  
    


    


