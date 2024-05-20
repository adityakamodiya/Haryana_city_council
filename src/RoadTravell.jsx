import React from 'react'
import './CSS/home.css'
import Header from './Header'
import Footer from './Footer'
function RoadTravell() {
  return (
   <>
         <Header/>
                <div id="middle-section"  style={{paddingTop:'2%',paddingLeft:'8%',paddingRight:'8%',background:'wheat',height:'100vh'}}>
                <h1 >Roads, travel and parking</h1>
                <div className="row1">
                    <div className="council-tax">
                        <p style={{fontWeight:'900',fontSize:'18px'}} >Roadworks and transport improvements</p>
                       
                    </div>
                    <div className="road-travel">
                        <p style={{fontWeight:'900',fontSize:'18px'}}>Report road and pavement issues</p>
                   
                    </div>
                </div>
                <div className="row1">
                    <div className="school-learning">
                        <p style={{fontWeight:'900',fontSize:'18px'}}>Safer, greener, healthier travel
</p>

                    </div>
                    <div className="benifits-support">
                        <p style={{fontWeight:'900',fontSize:'18px'}}>Information for developers</p>
                      
                    </div>
                </div>
                <div className="row3">
                    <div className="housing" style={{background:'none' }}>
                        <p style={{fontWeight:'900',fontSize:'18px'}}>Parking</p>
                        <ul>
                            <li>Information about disabled parking (blue badges)</li>
                            <li>Parking for blue badge holders</li>
                            <li>Car park season tickets</li>
                            <li>Apply for a resident parking permit </li>
                            <li>Apply for a dropped kerb</li>

                            </ul>
                    </div>
                    <div className="waste-recycle" style={{background:'none'}}>
                        <p style={{fontWeight:'900',fontSize:'18px'}}>Travel</p>
                        <ul>
                            <li>Bus pass for older persons</li>
                            <li>Cycling in Haryana</li>
                            <li>Car clubs</li>
                            <li>Electric vehicles</li>
                            <li>Find a taxi rank</li>
                            <li>Find a taxi rank</li>
                            <li>Transport consultations</li>
                            </ul>
                    </div>
                </div>
            </div>
            <Footer/>
   </>

  )
}

export default RoadTravell
