import React from 'react'
import "./daily.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Single from '../single/Single'


const Daily = () => {
  return (
    <div className='daily-home'> 
      <Sidebar />
      <div className="daily-homeContainer">
        <Navbar />
        <div className="daily-countries">
         <Single />
        </div>
      </div>
    </div>
  )
}

export default Daily
