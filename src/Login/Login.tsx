import React, { useState } from 'react';

interface Props {
  onRegisterClick?: () => void;
  onLoginSuccess: () => void;
}

interface LoginState {
  email: string;
  password: string;
}

const Login: React.FC<Props> = ({ onRegisterClick }) => {
  const [formData, setFormData] = useState<LoginState>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Datos enviados', formData);
    // Aquí puedes agregar la lógica para autenticar al usuario.
  };

  const handleRegisterClick = () => {
    window.open('registro');
    // Si quieres abrirlo en la misma ventana, puedes omitir '_blank'
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Iniciar sesión</button>
      <button type="button" onClick={handleRegisterClick}>
        Registrar
      </button>
    </form>
  );
};

export default Login;
