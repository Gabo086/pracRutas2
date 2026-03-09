import { useState } from "react"
import { postData } from "../services/fetch"

 function Login() {
  
  //Aquí irá la lógica de mi login.

  const [usuario,setUsuario] = useState("")
  const [contraseña,setContraseña] = useState("")

  }
  
    return (
    <div>
      <nav>
        <h1>Ride Safe</h1>
        <ul>
          <li><a href="/loginPag">Login</a></li>
          <li><a href="/registro">Registro</a></li>
          </ul>
                <h4>Role Type <select name="RoleType" id="RoleLogin">
                  <option value="admin">Admin</option>
                  <option value="cliente">Cliente</option>
                </select></h4>
            </nav>

        <label htmlFor="Usuario">User Name</label><br />
        <input type="text" placeholder="Usuario" value={usuario} onChange={(e)=>setUsuario(e.target.value)}/>

        <br /><label htmlFor="Contraseña">Password</label>
        <br /><input type="password" placeholder="Contraseña" value={contraseña} onChange={(e)=>setContraseña(e.target.value)}/>
        
        <button>Login</button>

    </div>

)

export default Login

import { useNavigate } from 'react-router-dom';

function RoleSelector() {
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    const value = event.target.value;
    if (value === 'admin') {
      navigate('/adminDshbrd'); // Ruta interna
    } else if (value === 'cliente') {
      navigate('/home-cliente');    // Ruta interna
    }
  }
}
