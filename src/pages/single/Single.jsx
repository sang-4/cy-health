import React from 'react'
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS, 
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement 
}   from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
)

const Single = () => {
    const data ={
        labels: ["12 a.m", "1 a.m", "2 a.m", "3 a.m", "4 a.m", "5 a.m", "6 a.m", "7 a.m", "8 a.m", "9 a.m", "10 a.m", "11 a.m", "12 p.m", "1 p.m", "2 p.m", "3 p.m", "4 p.m", "5 p.m", "6 p.m", "7 p.m", "8 p.m", "9 p.m", "10 p.m", "11 p.m"],
        datasets: [{
            data: [5, 12, 11, 34, 23, 45, 56, 67, 78, 89, 90, 60, 10, 90, 80, 60, 5, 12, 11, 34, 23, 45, 56, 67],
            backgroundColor: 'transparent',
            borderColor: '#5e72e4',
        }]
    };
    const options ={

    };

  return (
    <div style={{width: '1000px', height: '1000px', marginLeft: '20px'}}>
      <Line data={data} options={options}></Line>
    </div>
  )
}

export default Single
