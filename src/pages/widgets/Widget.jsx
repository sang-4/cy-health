import React from 'react'
import './widget.scss'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import MasksIcon from '@mui/icons-material/Masks';
import SickIcon from '@mui/icons-material/Sick';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import BiotechIcon from '@mui/icons-material/Biotech';

const Widget = ({ type }) => {

  let data;


switch (type) {
  case "infections":
    data = {
      title: "Infections",
      infections: "642,794,281",
      icon: (
      <SickIcon 
        className='icon'
        style={{ color: "brown", backgroundColor: "cream" }}
      />
      ),
    }
      break;
      case "recoveries":
    data = {
      title: "Recoveries",
      recoveries: "621,970,895",
      icon: (
      <MasksIcon 
        className='icon'
        style={{ color: "brown", backgroundColor: "cream" }}
        />
      ),
    }
      break;
      case "deaths":
    data = {
      title: "Deaths",
      deaths: "6,625,286",
      icon: (
      <MilitaryTechIcon 
        className='icon'
        style={{ color: "brown", backgroundColor: "cream" }}
        />
      ),
    }
      break;
      case "tests":
    data = {
      title: "Active Cases",
      counter: " ",
      activecases: "3,197,100",
      icon: (
      <BiotechIcon 
        className='icon'
        style={{ color: "brown", backgroundColor: "cream" }}
        />
      ),
    }
      break;
}
    

  return (
    <div className='widgets'>
      <div className="left">
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.infections}{data.recoveries}{data.deaths}{data.activecases}</span>
        <span className='link'>{data.link}</span>
      </div>
      <div className="right">
        <div className='cases'>
        <ArrowCircleUpIcon className='icon' />
        {}
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
