 import React from 'react'
 import "./navbar.scss" 
 import SearchIcon from '@mui/icons-material/Search';
 import LanguageIcon from '@mui/icons-material/Language';
 import Switch from '@mui/material/Switch';
 import FullscreenIcon from '@mui/icons-material/Fullscreen';
 import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
 import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
 import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
 
 const Navbar = () => {
   return ( 
    <div className='navbar'>
        <div className='navbarContainer'>
            <div className="search">
                <input type="text" placeholder="Search" />
                <SearchIcon />
            </div>
            <div className="items">
                <div className="item">
                    <LanguageIcon  className='icon'/>
                    <span>Eng</span>
                </div>
                <div className='item'>
                    <Switch style= {{ color: "#210876"  }}  className='icon'/>
                </div>
                <div className='item'>
                    <MedicalInformationIcon  className='icon'/>
                </div>
                <div className='item'>
                    <NotificationsActiveIcon  className='icon'/>
                    <div className="counter">4</div>
                </div>
                <div className='item'>
                    <ChatBubbleIcon className='icon'/>
                    <div className="counter">9</div>
                </div>
                <div className='item'>
                    <FullscreenIcon  className='icon'/>
                </div>
                <div className='item'>
                    <img src="/assets/profile.JPG" alt="sang" className='avatar' />
                </div>
            </div>
        </div>
    </div>
    )
    }

 
 export default Navbar
 