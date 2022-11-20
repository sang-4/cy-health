import React from 'react'
import "./global.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Country from '../countries/Country'
import Single from '../single/Single'


const Global = () => {
  return (
    <div className='global-home'> 
      <Sidebar />
      <div className="global-homeContainer">
        <Navbar />
        <div className="global-countries">
         <Country />
        </div>
        <div className="global-history">
         <Single />
        </div>
      </div>
    </div>
  )
}

export default Global
