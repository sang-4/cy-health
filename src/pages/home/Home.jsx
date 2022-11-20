import React from 'react'
import "./home.scss" 
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
// import Country from '../../pages/countries/Country'
import Widget from '../../pages/widgets/Widget'
import Single from '../../pages/single/Single'



const Home = () => {
  return (
    <div className='home'> 
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className='widgets'>
          <Widget type="infections" />
          <Widget type="recoveries"/>
          <Widget type="deaths"/>
          <Widget type="tests"/>
        </div>
        </div>
    </div>
  )
}

export default Home
