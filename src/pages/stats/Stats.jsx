import React from 'react'
import "./stats.scss"
import { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';



export const Stats = () => {
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
    const data03 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
      const data02 = [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
      ];
  return (
    <div>
        <div className='top'>           
            <div className='pieContainer'>
                <div className='titleContainer'>
                    <h3>Emails Sent</h3>
                    <div>
                        <select>
                            <option value="" hidden>Select Value</option>
                            <option>This Week</option>
                            <option>This Day</option>
                        </select>
                    </div>
                </div>
                <PieChart width={400} height={400}>
                        <Pie data={data01} dataKey="value" cx="50%" cy="50%" innerRadius={50} outerRadius={60} fill="#8884d8" />
                        <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={80} fill="#82ca9d" label />
                        <Pie data={data03} dataKey="value" cx="50%" cy="50%" innerRadius={90} outerRadius={100} fill="gray" label />
                </PieChart>
            </div>
            <div className='pieContainer'>
                <div className='titleContainer'>
                    <h3>Emails Sent</h3>
                    <div>
                        <select>
                            <option value="" hidden>Select Value</option>
                            <option>This Week</option>
                            <option>This Day</option>
                        </select>
                    </div>
                </div>
                <PieChart width={400} height={400}>
                        <Pie data={data01} dataKey="value" cx="50%" cy="50%" innerRadius={50} outerRadius={60} fill="#8884d8" />
                        <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={80} fill="#82ca9d" label />
                        <Pie data={data03} dataKey="value" cx="50%" cy="50%" innerRadius={90} outerRadius={100} fill="gray" label />
                </PieChart>
            </div>

            <div className='earningInfoCon'>
                <div className='earningInfo'>
                    <div>Icon</div>
                    <div>
                        <h1>$420</h1>
                        <p>Earning of the month</p>
                    </div>
                    <>...</>
                </div>
                
            </div>
        </div>
    </div>
  )
}
