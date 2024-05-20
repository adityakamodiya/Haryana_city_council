import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import './CSS/home.css'
function Home() {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <div className="budhet-information">
                <h2><span style={{color:'brown',fontSize:'32px'}}> Haryana</span> City Council financial challenges - time to Reset</h2><br />
                <p>To find out more about the budget and section 114 notice, <Link to='/visit our budget information page'>visit our budget information page</Link></p>
            </div>
            <div id="middle-section">
                <div className="row1">
                    <div className="council-tax">
                        <p style={{fontWeight:'900',fontSize:'18px'}} ><Link to='/Council tax information'>Council Tax</Link></p>
                        <p>Pay Council Tax</p>
                        <p>Report a change</p>
                        <p>Set up a Direct Debit</p>
                    </div>
                    <div className="road-travel">
                        <p style={{fontWeight:'900',fontSize:'18px'}}> <Link to='/road and travell'>Roads, travel and parking</Link></p>
                        <p>Pay a parking or CAZ fine</p>
                        <p>Report a street fault</p>
                        <p>Find out about roadworks</p>
                    </div>
                </div>
                <div className="row1">
                    <div className="school-learning">
                        <p style={{fontWeight:'900',fontSize:'18px'}}><Link to='/school and learnings'>Schools and learning</Link></p>
                        <p>School term dates</p>
                        <p>Find a school</p>
                        <p>Apply for school place</p>

                    </div>
                    <div className="benifits-support">
                        <p style={{fontWeight:'900',fontSize:'18px'}}><Link to='/benifits and support               '> Benefits and support</Link></p>
                        <p>Cost of living support</p>
                        <p>Make a benefits claim</p>
                        <p>Report a change in circumstances</p>
                    </div>
                </div>
                <div className="row3">
                    <div className="housing">
                        <p style={{fontWeight:'900',fontSize:'18px'}}>Housing</p>
                        <p>Request a housing repair</p>
                        <p>Services for council tenants</p>
                        <p>Pay your rent</p>
                    </div>
                    <div className="waste-recycle">
                        <p style={{fontWeight:'900',fontSize:'18px'}}>Waste and recycling</p>
                        <p>Garden Waste Service</p>
                        <p>Book a bulky waste collection</p>
                    </div>
                </div>
                <div className="row4">
                    <div>Adult social care</div>
                    <div>Business and licencing</div>
                    <div>Environment</div>
                    <div>Planning and development</div>
                    <div>Children and families</div>
                    <div>Thing to do</div>
                    <div>Business,death and ceremonies </div>
                </div>
            </div>
            <Footer />


        </>

    )
}

export default Home
