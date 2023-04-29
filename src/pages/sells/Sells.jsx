import React from 'react'
import './sells.scss'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'

export const Sells = () => {
  const data = [
    {name: 'Sat', sell: 400},
    {name: 'Sun', sell: 700},
    {name: 'Mon', sell: 200},
    {name: 'Tue', sell: 100},
    {name: 'Wed', sell: 150},
    {name: 'Thus', sell: 300},
    {name: 'Fri', sell: 400},
  ];
  return (
    <div className='sellsContainer'>
      <div className='buttonContainer'>
        <button>Add Parcel</button>
        <button>Request Pickup</button>
      </div>
      <p className='para'>Today Statistics</p>

      <div className='cardContainer'>
        <div className='infoContainer'>
          <div>
            <p>title</p>
            
          </div>
          <h1>3</h1>
        </div>
        <div className='infoContainer'>
          <div>
            <p>title</p>
            
          </div>
          <h1>3</h1>
        </div>
      </div>

      <div className='chartContainer'>
        <div className='barChart'>
        <BarChart width={730} height={250} data={data} margin={{top: 20, right: 20, bottom: 20, left: 20}} >
          <XAxis dataKey="name" />
          <CartesianGrid stroke="#ccc" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sell" fill="#8884d8" />
        </BarChart>
        </div>

        <div></div>
      </div>
      
    </div>
  )
}
