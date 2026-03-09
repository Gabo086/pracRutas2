import React from 'react'
import Login from '../components/Login'

async function LoginStyle() {
  
  return (
    <div>
      <nav>
        <ul>
            <li><a className='LoginRedirect2' href="/login">Login</a></li>
            <li><a className='RegisterRedicect2' href="/formComponent">Registro</a></li>
        </ul>
      </nav>
      <Login/>
    </div>





  )
}

export default LoginStyle