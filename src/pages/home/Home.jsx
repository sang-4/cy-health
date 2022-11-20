import React from 'react'
import "./home.scss" 
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Country from '../../pages/countries/Country'
import Widget from '../../components/widgets/Widget'
// import Chart from '../../components/Charts/Charts'



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
        <div className="countries">
         <Country/>
        </div>
        {/* <div>
          <Chart/>
        </div> */}
        </div>
    </div>
  )
}

export default Home
