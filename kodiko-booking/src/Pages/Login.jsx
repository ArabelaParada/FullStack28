
import React, { useState } from 'react';
import axios from 'axios';
function Login() {
    return <h2>Login PAges</h2>;
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password,

      });
      console.log('Token:', response.data.token);
      // Guarda el token en localStorage o context/state
      localStorage.setItem('token', response.data.token);
      // Redirige al dashboard (ejemplo)
      window.location.href = '/dashboard';
    } catch (error) {
      setError(error.response?.data?.message || 'Error al iniciar sesión');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

}
export default Login;

//export default Login;