import React from 'react'
import { Link } from 'react-router-dom'
import footerimg1 from './Logos/footer1.png'
import footerimg2 from './Logos/footer2.png'
import logo from './Logos/logo1.png'
import footerimg3 from './Logos/footer3.png'
import './CSS/footer.css'
function Footer() {
  return (
    <>
    <div className="footer">
        <div className="links">
<Link to='/About us'>about us</Link>
<Link to='/our contacts'>Contact</Link>
{/* <Link>about us</Link> */}
<Link to='/our languages'>Language</Link>
<Link to='/'><img src={logo} alt="" onClick={window.location} /></Link>
</div>
<div className="footer-img">
 <img src={footerimg1} alt="" />
 <img src={footerimg2} alt="" />
 <img src={footerimg3} alt="" />
 </div>
    </div>
    </>
  )
}

export default Footer
