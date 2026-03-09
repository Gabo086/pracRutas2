import { useState } from "react";
import { postData } from "../services/fetch";

function FormComponent() {

  const [nombreCompleto, setNombreCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [edad, setEdad] = useState("");
  const [rol, setRol] = useState("cliente");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const objUsuario = {
      nombreCompleto,
      email,
      password,
      telefono,
      edad,
      rol
    };

    try {
      await postData(objUsuario, "usuarios");
      alert("Usuario registrado correctamente");

      // limpiar formulario
      setNombreCompleto("");
      setEmail("");
      setPassword("");
      setTelefono("");
      setEdad("");

    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li><a href="/loginPag">Login</a></li>
          <li><a href="/registro">Registro</a></li>
        </ul>

        <h1>Registro</h1>

        <select
          name="RoleType"
          id="FormRole"
          value={rol}
          onChange={(e) => setRol(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="cliente">Cliente</option>
        </select>
      </nav>

      <form onSubmit={handleSubmit}>

        <label htmlFor="FormName">Nombre Completo</label><br />
        <input
          type="text"
          id="FormName"
          placeholder="Nombre Completo"
          value={nombreCompleto}
          onChange={(e) => setNombreCompleto(e.target.value)}
          required
        />
        <br /><br />

        <label htmlFor="FormEmail">Email</label><br />
        <input
          type="email"
          id="FormEmail"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <label htmlFor="ForPassword">Contraseña</label><br />
        <input
          type="password"
          id="ForPassword"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />

        <label htmlFor="FormAge">Edad</label><br />
        <input
          type="number"
          id="FormAge"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        <br /><br />

        <label htmlFor="PhoneNum">Teléfono</label><br />
        <input
          type="number"
          id="PhoneNum"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => {
            try {
              const valor = e.target.valueAsNumber;

              if (isNaN(valor)) {
                setTelefono("");
              } else {
                setTelefono(valor);
              }
            } catch (error) {
              console.error("Error al procesar el teléfono:", error);
              setTelefono("");
            }
          }}
        />
        <br /><br />

        <button type="submit">Registrar</button>

      </form>
    </div>
  );
}

export default FormComponent;