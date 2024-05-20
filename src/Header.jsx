import React from 'react'
import logo from './Logos/logo1.png'
import './CSS/header.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Header() {
  const navigete = useNavigate();
  
  return (
    <div className='header'>
      <img src={logo} alt="" onClick={()=>navigete('/')} />
      <ul>
        <li><Link to='/Login'>Log-in</Link></li>
        <li><Link to='/Sign-up'>Register</Link></li>
      </ul>
    </div>
  )
}

export default Header
