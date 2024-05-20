import React from 'react'
import './CSS/about.css'
import Footer from './Footer'
import Header from './Header'
function About() {
  return (<>
  <Header/>
    <div className='about-wrapper'>
        <div className="para">
        <h1>Overview</h1>
        
        <p>Haryana City Council collects, holds and processes a large amount of personal data about individuals who interact with the council. This allows us to provide our services more effectively. <br />
        This privacy notice explains how we will handle your personal data. <br />
        
We understand that your personal data is important to you. We have a responsibility to ensure the information we collect, hold, and use about you is done so proportionately, correctly and safely. <br />
We are committed to safeguarding your privacy and ensuring our compliance with the legislation. We will be transparent with you and provide accessible information about how we use your information.</p>
 <br />
 <h1>Our details</h1>
 <br />
 <p>Our registration details are: <br /><br />
 Haryana City Council <br />
Council House <br />
Victoria Square <br />
Haryana <br />
B1 1BB <br />

Registration number: Z4594350</p>     
</div>
    </div>
    <Footer/>
    </>
  )
}

export default About
