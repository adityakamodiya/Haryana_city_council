import React, { useState } from 'react'
import { useContext } from 'react'
// import { MyWebContext } from './Main'
// import avtaar from './images/avtaar.avif'
import './CSS/login.css'
import Header from './Header'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'


function Login() {
//   const { setloginvar, setprofileData } = useContext(MyWebContext)
  const [password, setpassword] = useState('')
  const [username, setusername] = useState('')
  let navigate = useNavigate()

//   axios.defaults.withCredentials = true

//   function log_in_user(e, name) {
//     // console.log(d)           
//     e.preventDefault()
//     console.log("hello")
//     // http://localhost:8001/login


//     axios.post('http://localhost:8001/login', {
//       username, password
//     })
//       .then((res) => {
//         console.log(res)
//         // console.log(isLoggedIn)
//         // res.data == 'login successfull'
//         if (res.data == 'login successfull') {
//           // const isLoggedIn  = sessionStorage.setItem('isLoggedIn',true)
//         //   setprofileData(username)
//         //   setloginvar(true)
//         //   let rand = Math.random()*1000
//         //   localStorage.setItem('token',rand)
//         //   localStorage.setItem('username',username)
//         //   navigate('/profile')

//                 alert('you are loged in')
//         }

//         else
//           alert(res.data + ' please check username or your password')
//       })
//   }
  return (
    <>
      {/* <h1>this is log in page</h1> */}
        <Header/>
      <div id="Log_In">
        <form className='signup-form' action="" onSubmit={()=>alert('backend is not connected')} >
          <input type="text" required onChange={(e) => setusername(e.target.value)} placeholder='   username' />
          <input type="password" required onChange={(e) => setpassword(e.target.value)} placeholder='   password' />
          <div className="submit-button">
            <button type='submit'> log in </button>
          </div>
          <p>if you did not sign up yet ,please  <Link to='/Sign-up'>sign up</Link></p>
        </form>
      </div>
    </>
  )
}

export default Login
