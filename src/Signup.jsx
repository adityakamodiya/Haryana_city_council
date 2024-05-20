import React, { useState } from 'react'
import './CSS/signup.css'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
// import avtaar from './images/avtaar.avif'

function Signup() {
    const  navigate = useNavigate()
   const [gender, setgender] = useState('')
   const [city, setcity] = useState('')
   const [password, setpassword] = useState('')
   const [username, setusername] = useState('')
   const [confirmPassword, setconfirmPassword] = useState('')
   const [age, setage] = useState('')



//    function UserAddToDataBase(e) {
//       e.preventDefault()
//       if (password === confirmPassword) {
//          console.log(username,password)
//          axios.post('http://localhost:8001/receive', {
//             username,password
//          })
//             .then((res) => {
//                alert(res.data)
               
//             })
// // alert('success')

//       }
//       else {
//          let pas = document.querySelector('.password-input')
//          let rechecking = document.querySelector('.rechecking-input')
//          rechecking.style.display = 'block'
//          pas.focus()
//          navigate('/login')
//       }
//    }

   function hidewarningMain(e) {

      let pas = document.querySelector('.password-input')
      let rechecking = document.querySelector('.rechecking-input')
      rechecking.style.display = 'none'
      setpassword(e.target.value)
   }
   function hidewarningConfirm(e) {
      let pas = document.querySelector('.password-input')
      let rechecking = document.querySelector('.rechecking-input')
      rechecking.style.display = 'none'

      setconfirmPassword(e.target.value)
   }


   return (
      <>
      <Header/>
         {/* this is sign up page!! */}
         <div id="signup-wrapper">

            <form action="" className='signup-form'
             onSubmit={()=>alert('backend is not connected')}
             >
               <input required type="text" className='Usrername' placeholder='  username' value={username} onChange={(e) => { setusername(e.target.value) }} />
              

               <div id="signup_password">
                  <p className='rechecking-input' style={{ display: 'none' }}> please check both entries are same!!!</p>
                  <input required className='password-input' type="password" placeholder='password' value={password} onChange={(e) => { hidewarningMain(e) }} />
                  <input required className='password-input' type="password" placeholder='confirm password' value={confirmPassword} onChange={(e) => { hidewarningConfirm(e) }} />

               </div>


               <div className="submit-button"><button type='submit'> Submit</button></div>
            </form>
         </div>

      </>
   )
}

export default Signup
