import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import "./sidebar.scss"

const sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <div className="spanlogo">Cy-Health</div>
      </div>
      <hr />
      <div className='bottom'>
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default sidebar
