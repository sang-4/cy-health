import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Country', headerName: 'Country', width: 130 },
  { field: 'reportedcases', headerName: 'Reported Cases', type: 'number', width: 130 },
  {
    field: 'activecases',
    headerName: 'Active Cases',
    type: 'number',
    width: 120,
  },
  {
    field: 'recoveries',
    headerName: 'Recoveries',
    type: 'number',
    width: 120,
  },
  {
    field: 'globalindex',
    headerName: '+vity Index',
    type: 'number',
    width: 120,
  },
];

const rows = [
  { id: 1, reportedcases: 67006, Country: 'Kenya', activecases: 3500, recoveries:"33" },
  { id: 2, reportedcases: 68565, Country: 'Turkey', activecases: 4298, recoveries:"33" },
  { id: 3, reportedcases: 55886, Country: 'Ukraine', activecases: 45999, recoveries:"33" },
  { id: 4, reportedcases: 866668, Country: 'Burundi', activecases: 1689, recoveries:"33" },
  { id: 5, reportedcases: 68686, Country: 'Greece', activecases: 9000, recoveries:"33" },
  { id: 6, reportedcases: 68686, Country: 'Denmark', activecases: 15065, recoveries:"33" },
  { id: 7, reportedcases: 68686, Country: 'Ethiopia', activecases: 44575, recoveries:"33" },
  { id: 8, reportedcases: 65788, Country: 'Uganda', activecases: 375796, recoveries:"33" },
  { id: 9, reportedcases: 1406, Country: 'Ireland', activecases: 659757, recoveries:"33" },
];

export default function DataTable() {
  return (
    <div style={{ height: 700, width: '100%' }}>
      GLOBAL COVID-19 STATS
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
}