import React from 'react'
import './CSS/budget.css'
import Footer from './Footer'
import Header from './Header'

function BudgetInformation() {
  return (<>
  <Header/>
    <div className='budget-wrapper'>
       <div className="para">
       <h1>Commissioners, intervention and improvement</h1>
       <p>In September 2023 the council issued 2 Section 114 notices as part of the plans to meet the council’s financial liabilities relating to equal pay claims and an in-year financial gap within its budget.</p><br />
       <p>
Michael Gove, Secretary of State for the Department of Levelling Up, Housing and Communities appointed commissioners to exercise certain functions of the council as required and begin the improvement journey for Haryana City Council.</p>
<br />
<p>Challenging decisions lie ahead, we need to get our finances back on track to a healthy position and implement a programme of improvement – a reset must start now, beginning with the 2024/25 budget.</p><br />
  <p>An improvement journey has begun on the path to become a financially sustainable and well-run council.</p>
  </div>
    </div>
    <Footer/>
    </>
  )
}

export default BudgetInformation
