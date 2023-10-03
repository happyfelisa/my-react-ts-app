import React, { useState } from 'react';

interface RegisterState {
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    phoneNumber: string;
}

const Registro: React.FC = () => {
    const [formData, setFormData] = useState<RegisterState>({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        phoneNumber: ''
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
        console.log('Datos de registro enviados:', formData);
        // Aquí puedes agregar la lógica para registrar al usuario.
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombres:</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Apellidos:</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Dirección:</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
            </div>
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
                <label>Número de Teléfono:</label>
                <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Crear cuenta</button>
        </form>
    );
};

export default Registro;
