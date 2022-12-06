import React from 'react'
import "./home.scss" 
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
// import Widget from '../../pages/widgets/Widget'
// import Featured from '../../components/featured/Featured'
// import Charts from '../../components/Charts/Charts'




const Home = () => {
  return (
    <div className='home'> 
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {/* <div className='widgets'>
          <Widget type="infections" />
          <Widget type="recoveries"/>
          <Widget type="deaths"/>
          <Widget type="tests"/>
        </div> */}
        {/* <div className="charts">
          <Featured/>
          <Charts/>
        </div> */}
      </div>
    </div>
  )
}

export default Home
