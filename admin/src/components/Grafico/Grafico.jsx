import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { grafico } from '../../redux/actions';

const data = [
  {
    name: 'Guitarra',
    date: 4000,
    venta: 2400,
   
  },
  {
    name: 'Teclado',
    date: 3000,
    venta: 1398,
   
  },
  {
    name: 'Bajos',
    date: 2000,
    venta: 9800,
    
  },
  {
    name: 'Ukelele',
    date: 2780,
    venta: 3908,
  
  },
  {
    name: 'Arco',
    date: 1890,
    venta: 4800,
   
  },
  {
    name: 'Percusión',
    date: 2390,
    venta: 3800,
  
  },
  {
    name: 'Viento',
    date: 3490,
    venta: 4300,

  },
];


export default function Grafico () {
    return (
        <ResponsiveContainer width="100%" height={600}>
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="date"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="venta" stroke="#82ca9d" />
        </LineChart>
        </ResponsiveContainer>
      );
    }
    
  
    


    


