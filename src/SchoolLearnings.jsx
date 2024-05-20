import React from 'react'
import Header from './Header'
import Footer from './Footer'
function SchoolLearnings() {
  return (
    <>
         <Header/>
                <div id="middle-section"  style={{paddingTop:'2%',paddingLeft:'8%',paddingRight:'8%',background:'wheat',height:'100vh'}}>
                <h1 >Schools and learning</h1>
                <div className="row1">
                    <div className="council-tax">
                        <p style={{fontWeight:'900',fontSize:'18px'}} >Apply for a school place - School admissions
</p>
                       
                    </div>
                    <div className="road-travel">
                        <p style={{fontWeight:'900',fontSize:'18px'}}>Schools policies and strategies</p>
                   
                    </div>
                </div>
                <div className="row1">
                    <div className="school-learning">
                        <p style={{fontWeight:'900',fontSize:'18px'}}>Haryana Children’s Partnership
</p>

                    </div>
                    <div className="benifits-support">
                        <p style={{fontWeight:'900',fontSize:'18px'}}>Haryana's Local Offer (SEND)</p>
                      
                    </div>
                </div>
                <div className="row3">
                    <div className="housing" style={{background:'none' }}>
                        <p style={{fontWeight:'900',fontSize:'18px'}}>Additional help and support</p>
                        <ul>
                            <li>Extra support for children in care (Haryana Virtual School)</li>
                            <li>School aged parents</li>
                            <li>School travel costs (Travel Assist)</li>
                            <li>School uniforms</li>


                            </ul>
                    </div>
                    <div className="waste-recycle" style={{background:'none'}}>
                        <p style={{fontWeight:'900',fontSize:'18px'}}>For parents and learners</p>
                        <ul>
                            <li>Children in entertainment and employment</li>
                            <li>Further education in Haryana</li>
                            <li>School attendance, advice for parents</li>
                            <li>What can I do to support my child attending an Out of School Setting?</li>
                            <li>Universities in Haryana</li>
                         
                            </ul>
                    </div>
                </div>
            </div>
            <Footer/>
   </>
  )
}

export default SchoolLearnings
