import React from 'react'
import './CSS/about.css'
import Header from './Header'
import Footer from './Footer'
function Languages() {
  return (<>  
  <Header></Header>
    <div className='about-wrapper'>
    <div className="para  language">
    <h1 style={{marginTop:'1%'}}> Our Languages</h1>
    <br />
    <h1>Haryana.gov.in in other languages</h1>
    <br />
    <p>You can translate our website into 60 different languages using Google Translate.
<br />
Haryana City Council is not responsible for the content or accuracy of external websites.
<br />
You may need to install Language Packs to view some of the languages correctly.
</p>
<h2>Google language translations</h2>
<ul>
    <li>Afrikaans</li>
    <li>Albanian (Shqiptar)</li>
    <li>Amharic</li>
    <li>Arabic (العربية)</li>
    <li>Azerbaijani (Azərbaycan)</li>
    <li>Chinese (Traditional)</li>
    <li>Georgian (ქართული)</li>
    <li>Haitian Creole (Kreyòl ayisyen)</li>
    <li>Indonesian (Indonesia)</li>
    <li>Macedonian (Македонски)</li>
    </ul>

</div>
</div>
<Footer/>
</>

  )
}

export default Languages
