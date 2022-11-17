import React from 'react'
import "./home.scss" 
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Country from '../../pages/countries/Country'


const home = () => {
  return (
    <div className='home'> 
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Country />
        </div>
        </div>
    </div>
  )
}

export default home
