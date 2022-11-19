import  React, {useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Continent', headerName: 'Continent', width: 130 },
  { field: 'Country', headerName: 'Country', type: 'text', width: 130 },
  {
    field: 'population',
    headerName: 'Population',
    type: 'number',
    width: 120,
  },
  {
    field: 'activecases',
    headerName: 'Active Cases',
    type: 'number',
    width: 120,
  },
  {
    field: 'recovered',
    headerName: 'Recovered',
    type: 'number',
    width: 120,
  },
  {
    field: 'deaths',
    headerName: 'Deaths',
    type: 'number',
    width: 120,
  },
  {
    field: 'tests',
    headerName: 'Tests',
    type: 'number',
    width: 120,
  },
];






const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1ea578d54bmshb7546e52320d64ep1a3043jsn717ee90870fe',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
  }
};

export default function DataTable() {
  const [stat, setStat] = useState([]);


  // const {id,Country, Continent, Population, activecases} = rows


// let statt=stat
const rows = 
      stat.map((sta,i)=>(

        { id: i, Country: sta.country, Continent: sta.continent, population: sta.population, activecases: sta.cases.active, recovered: sta.cases.recovered, deaths: sta.deaths.total, tests: sta.tests.total }
        ))
      ;


  useEffect(()=>{
    fetch('https://covid-193.p.rapidapi.com/statistics', options)
    .then(response => response.json())
    .then(response => setStat(response.response))
    .catch(err => console.error(err));
  },[])

  return (
    <div style={{ height: 700, width: '100%' }}>
      GLOBAL COVID-19 STATS
      <DataGrid
        rows={rows} 
        // getRowId={(row) => row.id}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
}