import React from 'react'
// import { useEffect, useState } from 'react'
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

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '1ea578d54bmshb7546e52320d64ep1a3043jsn717ee90870fe',
//     'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
//   }
// };

// const [datas, setData] = useState([]);

// const rows = 
//       datas.map((data,i)=>(

//         { id: i, Country: st.country, Continent: sta.continent, population: sta.population, activecases: sta.cases.active, recovered: sta.cases.recovered, deaths: sta.deaths.total, tests: sta.tests.total }
//         ))
//       ;

// fetch('https://covid-193.p.rapidapi.com/history?country=usa&day=2020-06-02', options)
//   .then(response => response.json())
//   .then(data => console.log(response))
//   .catch(err => console.error(err));

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
        24hrs Stats
      <Line data={data} options={options}></Line>
    </div>
  )
}

export default Single
