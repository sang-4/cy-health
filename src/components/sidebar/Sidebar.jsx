import {React, Link} from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import ArticleIcon from '@mui/icons-material/Article';
import CommentIcon from '@mui/icons-material/Comment';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import "./sidebar.scss"
import {useNavigate} from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='sidebar'>
      <div className='top'>
        <div className="spanlogo">CyHealth</div>
      </div>
      <hr />
      <div className='bottom'>
        <ul>
          <p className="title">Main</p>
          <li onClick={()=>navigate("/") }> 
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className="title">Lists</p>
          <li>
          <GroupWorkIcon className='icon' />
            <span>Partners</span>
          </li>
          <li>
            <ArticleIcon className='icon' />
            <span>Posts</span>
          </li>
          <li>
            <CommentIcon className='icon' />
            <span>Comments</span>
          </li>
          <p className="title">Charts</p>
          <li onClick={()=>navigate("/countries") }>
            <CoronavirusIcon className='icon' />
            <span>Global Infections</span>
          </li>
          <li onClick={()=>navigate("/single")}>
            <GpsFixedIcon className='icon' />
            <span>Country Specific</span>
          </li>
          <li>
            <VaccinesIcon className='icon' />
            <span>Recoveries</span>
          </li>
          <p className="title">User Management</p>
          <li>
            <ManageAccountsIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <SettingsIcon className='icon' />
            <span>Settings</span>
          </li>
          <li>
            <HelpIcon className='icon' />
            <span>Help</span>
          </li>
          <li>
            <LogoutIcon className='icon' />
            <span>Logout</span>
          </li>
          <p className="title">Contact</p>
          <li>
            <ContactSupportIcon className='icon' />
            <span>Get in touch</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
