import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './CSS/home.css'
function Benifits() {
  return (
    <>
         <Header/>
                <div id="middle-section"  style={{paddingTop:'2%',paddingLeft:'8%',paddingRight:'8%',background:'wheat',height:'100vh'}}>
                <h1 >Benefits and support</h1>
                <div className="row1">
                    <div className="council-tax">
                        <p style={{fontWeight:'900',fontSize:'18px'}} >Check if you need to apply for <br /> universal credit for help with housing costs</p>
                       
                    </div>
                    <div className="road-travel">
                        <p style={{fontWeight:'900',fontSize:'18px'}}>Customer Service Centres walk-in advice service</p>
                   
                    </div>
                </div>
                <div className="row1">
                    <div className="school-learning">
                        <p style={{fontWeight:'900',fontSize:'18px'}}>Make a new housing benefit or Council Tax <br /> support claim and upload evidence</p>

                    </div>
                    <div className="benifits-support">
                        <p style={{fontWeight:'900',fontSize:'18px'}}>View your benefit claim summary and <br /> next payment on Benefits Online</p>
                      
                    </div>
                </div>
                <div className="row3">
                    <div className="housing" style={{background:'none' }}>
                        <p style={{fontWeight:'900',fontSize:'18px'}}>Benefit payment/claims</p>
                        <ul>
                            <li>Benefit payment dates</li>
                            <li>How we work out your benefits</li>
                            <li>Backdating your benefit claim</li>
                            <li>Appealing a housing benefit claim</li>


                            </ul>
                    </div>
                    <div className="waste-recycle" style={{background:'none'}}>
                        <p style={{fontWeight:'900',fontSize:'18px'}}>Extra benefit support</p>
                        <ul>
                            <li>
Financial assistance grants from the Loxton Trust</li>
                            <li>Extra help with your Council Tax bill</li>
                            <li>Help with private renting</li>

                         
                            </ul>
                    </div>
                </div>
            </div>
            <Footer/>
   </>
  )
}

export default Benifits
