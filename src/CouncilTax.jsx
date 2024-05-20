import React from 'react'
import './CSS/home.css'
import Header from './Header'
import Footer from './Footer'
function CouncilTax() {
  return (
      <>      
      <Header/>
                <div id="middle-section"  style={{paddingTop:'2%',paddingLeft:'8%',paddingRight:'8%',background:'wheat',height:'100vh'}}>
                <h1 >Council Tax</h1>
                <p>We are currently receiving a high volume of enquiries which may cause delays in processing changes to Council Tax accounts. You do not need to send duplicate enquiries. We will respond to you as quickly as possible.</p>
                <div className="row1">
                    <div className="council-tax">
                        <p style={{fontWeight:'900',fontSize:'18px'}} >Register for council tax online</p>
                        {/* <p>Pay Council Tax</p>
                        <p>Report a change</p>
                        <p>Set up a Direct Debit</p> */}
                    </div>
                    <div className="road-travel">
                        <p style={{fontWeight:'900',fontSize:'18px'}}>Apply for a Council Tax discount or exemption</p>
                        {/* <p>Pay a parking or CAZ fine</p>
                        <p>Report a street fault</p>
                        <p>Find out about roadworks</p> */}
                    </div>
                </div>
                <div className="row1">
                    <div className="school-learning">
                        <p style={{fontWeight:'900',fontSize:'18px'}}>Tell us about a change to your personal details <br /> or household</p>
                        {/* <p>School term dates</p>
                        <p>Find a school</p>
                        <p>Apply for school place</p> */}

                    </div>
                    <div className="benifits-support">
                        <p style={{fontWeight:'900',fontSize:'18px'}}>Sign up for paperless billing</p>
                        {/* <p>Cost of living support</p>
                        <p>Make a benefits claim</p>
                        <p>Report a change in circumstances</p> */}
                    </div>
                </div>
                <div className="row3">
                    <div className="housing" style={{background:'none' }}>
                        <p style={{fontWeight:'900',fontSize:'18px'}}>Help with Council Tax payments</p>
                        <ul>
                            <li>Difficulty paying your Council Tax</li>
                            <li>Extra help with your Council Tax bill</li>
                            <li>Request a refund on your Council Tax account</li>
                            <li>Request a review of your Council Tax bill</li>
                            </ul>
                    </div>
                    <div className="waste-recycle" style={{background:'none'}}>
                        <p style={{fontWeight:'900',fontSize:'18px'}}>More information about Council Tax</p>
                        <ul>
                            <li>Explanation of your Council Tax bill</li>
                            <li>Council Tax and houses in multiple occupation (HMOs)</li>
                            <li>Revenues privacy policy</li>
                             <li>What your Council Tax is used for</li>
                            </ul>
                    </div>
                </div>
            </div>
            <Footer/>
    </>
  )
}

export default CouncilTax
