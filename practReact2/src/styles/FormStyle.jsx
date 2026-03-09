import React from 'react'
import FormComponent from '../components/FormComponent'

async function FormStyle() {
 
  
  return (   

    <div>
      <nav>
        <ul>
            <li><a className='LoginRedirect' href="/login">Login</a></li>
            <li><a className='RegisterRedirect' href="/registro">Registro</a></li>
        </ul>
      </nav>
      <FormComponent/>

    </div>
  ) }


export default FormStyle