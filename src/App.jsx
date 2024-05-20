import { useState } from 'react'
import Header from './Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import BudgetInformation from './BudgetInformation'
import Login from './Login'
import About from './About'
import Contact from './Contact'
import Languages from './Languages'
import CouncilTax  from './CouncilTax'
import RoadTravell from './RoadTravell'
import SchoolLearnings from './SchoolLearnings'
import Benifits from './Benifits'
function App() {


  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/Sign-up' element={<Signup/>}></Route>
  <Route path='/Login' element={<Login/>}></Route>
  <Route path='/visit our budget information page' element={<BudgetInformation/>}></Route>
  <Route path='/About us' element={<About/>}></Route>
  <Route path='/our contacts' element={<Contact/>}></Route>
  <Route path='/our languages' element={<Languages/>}></Route>
  <Route path='/school and learnings' element={<SchoolLearnings/>}></Route>
  <Route path='/benifits and support' element={<Benifits/>}></Route>
  <Route path='/road and travell' element={<RoadTravell/>}></Route>
  <Route path='/Council tax information' element={<CouncilTax/>}></Route>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
