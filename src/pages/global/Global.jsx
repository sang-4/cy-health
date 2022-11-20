import React from 'react'
import "./global.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Country from '../countries/Country'


const Global = () => {
  return (
    <div className='global-home'> 
      <Sidebar />
      <div className="global-homeContainer">
        <Navbar />
        <div className="global-countries">
         <Country />
        </div>
      </div>
    </div>
  )
}

export default Global
