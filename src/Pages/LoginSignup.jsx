import React from 'react'
import './CSS/loginsignup.css'

const LoginSignup = () => {
  return (
    <div className='login-signup'>
       <div className="container">
            <h1>Sign up</h1>
            <div className="fields">
                <input type="text" className="field" placeholder='Email address...' />
                <input type="password" className="field" placeholder='Password...'/>
                <input type="text" className="field" placeholder='Phone number...'/>
            </div>
            <button>Continue</button>
            <p>Already have an account? <span>Login</span></p>
       </div>
    </div>
  )
}

export default LoginSignup
